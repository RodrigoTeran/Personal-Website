export type MESSAGE_TYPE_MODAL = 'success' | 'danger';
export type MESSAGE_TYPE_MODAL_STATIC = 'success' | 'danger';

export interface MESSAGE_MODAL {
    id: string;
    text: string;
    type: MESSAGE_TYPE_MODAL;
}