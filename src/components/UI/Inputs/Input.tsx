import React from 'react';

const Input: React.FC = () => {
    const [value, setValue] = React.useState('');
    return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default Input;
