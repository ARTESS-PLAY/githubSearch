import { DefaultButtonIF } from './types';

import cl from './DefaultButton.module.scss';

const DefaultButton: React.FC<DefaultButtonIF> = ({ title, onClick }) => {
    return (
        <div onClick={onClick} className={cl.button}>
            {title}
        </div>
    );
};

export default DefaultButton;
