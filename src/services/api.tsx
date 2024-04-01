import axios from 'axios';


const url = 'https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json'

const instance = axios.create({
    baseURL: url,
});

export const getData = async () => {
    try {
        const { data } = await instance.get('');
        return data;
    } catch (error) {
        return error;
    }
}