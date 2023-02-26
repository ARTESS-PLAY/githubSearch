import React, { Dispatch, SetStateAction } from 'react';

export type changeF = (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface InputProps {
    setParentValue?: Dispatch<SetStateAction<string>>;
}
