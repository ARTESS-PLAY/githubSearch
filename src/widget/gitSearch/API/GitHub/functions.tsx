import axios from 'axios';

export const getSearch = async (val: string): Promise<any> => {
    const { data } = await axios.get(`https://api.github.com/search/repositories?q=${val}`);
    return data.items;
};

export const getCurrentLimit = async (): Promise<number> => {
    const { data } = await axios.get('https://api.github.com/rate_limit');
    const limit: number = data.resources.search.limit;
    return limit;
};
