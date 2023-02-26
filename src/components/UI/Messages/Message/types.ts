import { ReactNode } from 'react';

export interface MessageIP {
    type: MessageType;
    children: ReactNode;
}

export enum MessageType {
    DEFAULT = 'DEFAULT',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
}
