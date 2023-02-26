import { GitRepoT } from './types';

import cl from './GitRepo.module.scss';

const GitRepo: React.FC<GitRepoT> = ({ avatarUrl, description, full_name, svn_url }) => {
    return (
        <div className={cl.git__repo}>
            <img src={avatarUrl} alt="avatar" />
            <div className={cl.git__repo__text}>
                <p className={cl.git__repo__text__title}>{full_name}</p>
                <p className={cl.git__repo__text__desc}>{description}</p>
                <a href={svn_url} target="_blank">
                    Перейти на репозиторий
                </a>
            </div>
        </div>
    );
};

export default GitRepo;
