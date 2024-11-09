import { ChangeEvent, useEffect, useState, useContext } from "react";
import type { EncryptedState, ICryptoInput, ICryptoOutput } from "./crypto.types"
import { MessagesContext } from "../../context/Messages.context";
import crypto from "crypto";
import Icons from "../Icons/index";

// Btn
import Btn from "../Buttons/index";

// Styles
import styles from "./crypto.module.scss";

// Checking the crypto module
const algorithm = "aes-256-cbc"; // Using AES encryption
const iv = crypto.randomBytes(16);

// Encrypting text
function encrypt(input: ICryptoInput): ICryptoOutput | null {
    try {
        const key = crypto.createHash('sha256').update(input.key).digest('base64').slice(0, 32);
        let cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(input.text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return {
            encryptedData: `${encrypted.toString("hex")}:${iv.toString("hex")}`
        };
    } catch {
        return null;
    }
}

// Decrypting text
function decrypt(input: ICryptoInput): string | null {
    try {
        const spliited: string[] = input.text.split(":");
        if (spliited.length !== 2) {
            return null;
        }
        const text = spliited[0];
        const stringifiedIv = spliited[1];

        const iv = Buffer.from(stringifiedIv, "hex");
        const encryptedText = Buffer.from(text, "hex");
        const key = crypto.createHash('sha256').update(input.key).digest('base64').slice(0, 32);
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    } catch {
        return null;
    }
}

export default function Body() {
    const [encryptedState, setEncryptedState] = useState<EncryptedState>("text");
    const { addStaticMsg } = useContext(MessagesContext);

    const [text, setText] = useState<string>("");
    const [output, setOutput] = useState<string | null>(null);
    const [key, setKey] = useState<string>("");

    const toggle = (): void => {
        setText("");
        setKey("");
        setOutput(null);
    };

    useEffect(toggle, [encryptedState]);

    const isValid = (): boolean => {
        if (text.trim() === "") return false;
        if (key.trim() === "") return false;

        return true;
    }

    const action = (): void => {
        if (!isValid()) {
            addStaticMsg("Invalid arguments", "danger");
            return;
        }


        if (encryptedState === "text") {
            const encryptedVersion: ICryptoOutput | null = encrypt({
                text,
                key
            });
            if (encryptedVersion === null) {
                addStaticMsg("Error", "danger");
                return;
            }

            setOutput(encryptedVersion.encryptedData);
        }
        if (encryptedState === "encrypted") {
            const decryptedVersion: string | null = decrypt({
                text,
                key
            });

            if (decryptedVersion === null) {
                addStaticMsg("Error", "danger");
                return;
            }

            setOutput(decryptedVersion);
        }
    };

/*     const copyToClipboard = (): void => {
        if (output === null) {
            addStaticMsg("Error while copying to clipboard", "danger");
            return;
        }
        navigator.clipboard.writeText(output);
        addStaticMsg("Copied to clipboard", "success");

    } */

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
                    callback={action}
                    text="🚀"
                    withBorder
                    type="white"
                    size="medium"
                    className={styles.btn_act}
                />
            </div>
            <textarea
                placeholder={encryptedState === "text" ? "Regular text" : "Encrypted version"}
                spellCheck={false}
                value={text}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setText(e.target.value);
                }}
            ></textarea>
            <div className={styles.keys}>
                <textarea
                    placeholder="Key"
                    spellCheck={false}
                    value={key}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        setKey(e.target.value);
                    }}
                ></textarea>
            </div>

            {output !== null && (
                <code className={styles.output}>
                    {output}
                </code>
            )}
        </div>
    );
}
