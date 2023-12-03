import { createContext, Dispatch, SetStateAction, useState, useRef } from "react";
import MessagesModal from "../components/Modals/Messages/Messages";
import {
    MESSAGE_MODAL,
    MESSAGE_TYPE_MODAL_STATIC
} from "../components/Modals/Messages/Messages.types";

export const MessagesContext = createContext<IMessagesContext>({} as IMessagesContext);

interface IMessagesContext {
    modalMsgs: MESSAGE_MODAL[];
    hashSetSeedsMsgs: React.MutableRefObject<Set<string>>;

    setModalMsgs: Dispatch<SetStateAction<MESSAGE_MODAL[]>>;
    addStaticMsg: (text: string, typeMsg: MESSAGE_TYPE_MODAL_STATIC) => void;
}

interface Props {
    children: any
}

export default function PropertiesLayoutContext({
    children
}: Props) {

    // Modal messages
    const [modalMsgs, setModalMsgs] = useState<MESSAGE_MODAL[]>([]);
    const hashSetSeedsMsgs = useRef<Set<string>>(new Set());

    const addStaticMsg = (
        text: string,
        typeMsg: MESSAGE_TYPE_MODAL_STATIC
    ): void => {
        if (hashSetSeedsMsgs.current.has(text)) return;
        hashSetSeedsMsgs.current.add(text);

        // Create unique id
        const id: string = String(new Date().getTime() + Math.random());

        // Push msg
        setModalMsgs((prev) => [
            ...prev,
            {
                id,
                text,
                type: typeMsg,
                isOkCancel: false,
                newUI: false
            },
        ]);
    };

    return (
        <MessagesContext.Provider value={{
            modalMsgs,
            hashSetSeedsMsgs,

            setModalMsgs,
            addStaticMsg,
        }}>
            <MessagesModal />
            {children}
        </MessagesContext.Provider>
    )
}
