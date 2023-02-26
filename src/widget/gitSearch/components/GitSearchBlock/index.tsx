import { useState } from 'react';
import Input from '../../../../components/UI/Inputs/Input';
import { getCurrentLimit, getSearch } from '../../API/GitHub/functions';
import cl from './GitSearchBlock.module.scss';

const GitSearchBlock: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    // getSearch();
    getCurrentLimit();
    return (
        <div className={cl.git_block}>
            <Input setParentValue={setSearchValue} />
            {searchValue}
        </div>
    );
};

export default GitSearchBlock;
