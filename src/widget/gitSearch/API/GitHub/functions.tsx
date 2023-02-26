import axios from 'axios';

export const getSearch = async () => {
    const data = await axios.get('https://api.github.com/search/repositories?q=tetris');
    console.log(data);
};

export const getCurrentLimit = async (): Promise<number> => {
    const { data } = await axios.get('https://api.github.com/rate_limit');
    const limit: number = data.resources.search.limit;
    return limit;
};
