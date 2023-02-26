import React, { Dispatch, SetStateAction } from 'react';
import { changeF, InputProps } from './types';

const Input: React.FC<InputProps> = ({ setParentValue = null }) => {
    const [value, setValue] = React.useState('');

    let changeFunction: changeF;

    if (setParentValue) {
        changeFunction = (e) => {
            setValue(e.target.value);
            setParentValue(e.target.value);
        };
    } else {
        changeFunction = (e) => {
            setValue(e.target.value);
        };
    }

    return <input value={value} onChange={changeFunction} />;
};

export default Input;
