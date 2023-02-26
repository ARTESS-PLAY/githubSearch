import { MessageIP, MessageType } from './types';

import cl from './Message.module.scss';

const Message: React.FC<MessageIP> = ({ children, type }) => {
    let classMessage: string = '';

    if (type === MessageType.WARNING) {
        classMessage = cl.warning;
    } else if (type === MessageType.ERROR) {
        classMessage = cl.error;
    } else if (type === MessageType.DEFAULT) {
        classMessage = cl.default;
    }
    return <div className={`${cl.message} ${classMessage}`}>{children}</div>;
};

export default Message;
