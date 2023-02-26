export interface MessageIP {
    type: MessageType;
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}

export enum MessageType {
    DEFAULT = 'DEFAULT',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
}
