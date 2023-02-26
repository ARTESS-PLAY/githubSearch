import { useEffect, useState } from 'react';

import { getCurrentLimit, getSearch } from '../../API/GitHub/functions';

import Message from '../../../../components/UI/Messages/Message';
import Input from '../../../../components/UI/Inputs/Input';
import GitRepoList from '../GitRepoList';

import { MessageType } from '../../../../components/UI/Messages/Message/types';

import cl from './GitSearchBlock.module.scss';
import { GitRepoT } from '../GitRepo/types';

const GitSearchBlock: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');
    const [countLimit, setCountLimit] = useState<number>(-1);

    const [repos, setRepos] = useState<GitRepoT[]>([]);

    useEffect(() => {
        const f = async (): Promise<void> => {
            const limit = await getCurrentLimit();
            setCountLimit(limit);
        };
        f();
    }, []);

    const buttonSearchClick = async () => {
        setCountLimit((prev) => prev - 1);
        const data: any[] = await getSearch(searchValue);

        const arrRepo: GitRepoT[] = data.map((el) => {
            const item: GitRepoT = {
                avatarUrl: el.owner.avatar_url,
                description: el.description,
                full_name: el.full_name,
                svn_url: el.svn_url,
            };
            return item;
        });

        setRepos(arrRepo);
    };

    return (
        <div className={cl.git_block}>
            {countLimit > 0 && (
                <Message type={MessageType.WARNING}>Осталось запросов - {countLimit}</Message>
            )}
            {countLimit === 0 ? (
                <Message type={MessageType.ERROR}>
                    Запросы кончились. Они должны обновиться в течение минуты
                </Message>
            ) : (
                ''
            )}
            <Input setParentValue={setSearchValue} />
            {countLimit > 0 && <button onClick={buttonSearchClick}>a</button>}
            {repos.length > 0 ? <GitRepoList items={repos} /> : ''}
        </div>
    );
};

export default GitSearchBlock;
