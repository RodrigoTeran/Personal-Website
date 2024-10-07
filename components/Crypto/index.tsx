import { useState } from "react";
import type { EncryptedState } from "./crypto.types"

// Btn
import Btn from "../Buttons/index";

// Styles
import styles from "./crypto.module.scss";

export default function Body() {
    const [encryptedState, setEncryptedState] = useState<EncryptedState>("text");

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_btns}>
                <div></div>
                <div>
                    <Btn
                        callback={() => {
                            setEncryptedState("text");
                        }}
                        text="Encrypt"
                        withBorder
                        type={encryptedState === "text" ? "gradient" : "white"}
                        size="medium"
                        className={styles.btn_each}
                    />
                    <Btn
                        callback={() => {
                            setEncryptedState("encrypted");
                        }}
                        text="Decrypt"
                        withBorder
                        type={encryptedState === "encrypted" ? "gradient" : "white"}
                        size="medium"
                        className={styles.btn_each}
                    />
                </div>
                <Btn
                    callback={() => {
                        
                    }}
                    text="🚀"
                    withBorder
                    type="white"
                    size="medium"
                    className={styles.btn_act}
                />
            </div>

            <textarea
                disabled={encryptedState === "encrypted"}
                placeholder="Regular text"
                spellCheck={false}
            ></textarea>
            <textarea
                disabled={encryptedState === "text"}
                placeholder="Encrypted version"
                spellCheck={false}
            ></textarea>
        </div>
    );
}
