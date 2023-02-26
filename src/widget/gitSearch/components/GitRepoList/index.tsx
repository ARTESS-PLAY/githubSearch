import { GitRepoListT } from './types';

import cl from './GitRepoList.module.scss';
import GitRepo from '../GitRepo';

const GitRepoList: React.FC<GitRepoListT> = ({ items }) => {
    return (
        <div className={cl.git__repo__list}>
            <h2>Найденные репозитории:</h2>
            {items.map((el) => (
                <GitRepo
                    avatarUrl={el.avatarUrl}
                    description={el.description}
                    full_name={el.full_name}
                    svn_url={el.svn_url}
                    key={el.avatarUrl}
                />
            ))}
        </div>
    );
};

export default GitRepoList;
