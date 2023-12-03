import React, { Fragment, useContext, useEffect, useRef } from 'react';
import styles from './Messages.module.scss';
import { MESSAGE_MODAL } from './Messages.types';
import { MessagesContext } from '../../../context/Messages.context';

const MILISECONDS_MSGS: number = 5000;

interface Props {
    msg: MESSAGE_MODAL;
    resolveMsgOk: (msg: MESSAGE_MODAL, isOk: boolean) => void;
}

const Message: React.FunctionComponent<Props> = ({ msg, resolveMsgOk }) => {
    const putTimeOut = useRef<boolean>(false);

    const time = (): void => {
        const t: NodeJS.Timeout = setTimeout(() => {
            resolveMsgOk(msg, false);
            clearTimeout(t);
        }, MILISECONDS_MSGS);
    };

    useEffect(() => {
        if (putTimeOut.current) return;
        putTimeOut.current = true;
        time();
        // eslint-disable-next-line
    }, []);

    return (
        <div
            className={`${styles.msg} ${styles[msg.type]} ${styles.counter}`}
        >
            <>
                <div className={styles.msg_top}>
                    <div className={styles.msg_top_text}>{msg.text}</div>
                    <button
                        title="Cerrar mensaje"
                        onClick={() => {
                            resolveMsgOk(msg, false);
                        }}
                        className={styles.msg_top_icon}
                    >
                        <svg
                            width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8.27455 6L11.686 2.58852C12.1047 2.16989 12.1047 1.49114 11.686 1.07216L10.9278 0.313977C10.5092 -0.104659 9.83045 -0.104659 9.41148 0.313977L6 3.72545L2.58852 0.313977C2.16989 -0.104659 1.49114 -0.104659 1.07216 0.313977L0.313977 1.07216C-0.104659 1.4908 -0.104659 2.16955 0.313977 2.58852L3.72545 6L0.313977 9.41148C-0.104659 9.83011 -0.104659 10.5089 0.313977 10.9278L1.07216 11.686C1.4908 12.1047 2.16989 12.1047 2.58852 11.686L6 8.27455L9.41148 11.686C9.83011 12.1047 10.5092 12.1047 10.9278 11.686L11.686 10.9278C12.1047 10.5092 12.1047 9.83045 11.686 9.41148L8.27455 6Z" />
                        </svg>
                    </button>
                </div>
            </>
        </div>
    );
};

const MessagesModal: React.FunctionComponent = () => {
    const {
        modalMsgs,
        hashSetSeedsMsgs,

        setModalMsgs,
    } = useContext(MessagesContext);

    const removeOurselves = (
        prev: MESSAGE_MODAL[],
        msg: MESSAGE_MODAL
    ): MESSAGE_MODAL[] => {
        const aux: MESSAGE_MODAL[] = [];

        for (let i = 0; i < prev.length; i++) {
            if (prev[i].id !== msg.id) {
                aux.push(prev[i]);
            }
        }

        return aux;
    };

    const remove = (msg: MESSAGE_MODAL): void => {
        setModalMsgs((prev) => removeOurselves(prev, msg));
    };

    const resolveMsgOk = (msg: MESSAGE_MODAL, isOk: boolean): void => {
        // eslint-disable-next-line
        hashSetSeedsMsgs.current.delete(msg.text);
        remove(msg);
    };

    return (
        <div className={styles.msgs}>
            {modalMsgs.map((msg: MESSAGE_MODAL, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <Message resolveMsgOk={resolveMsgOk} msg={msg} />
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default MessagesModal;
