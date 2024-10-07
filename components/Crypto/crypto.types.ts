export type EncryptedState = "text" | "encrypted";

export interface ICryptoInput {
    text: string;
    key: string;
}

export interface ICryptoOutput {
    encryptedData: string;
}