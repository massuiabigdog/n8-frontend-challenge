import axios from 'axios';
import localData from './listing.json'
import { PropertyItem } from '../types';

const url = 'https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json'

const instance = axios.create({
    baseURL: url,
});

export const getData = async () => {
    try {
        // Uncomment this line to fetch data from the API. You may require a CORS extension to fetch data from the API. 
        // const { data } = await instance.get('');

        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Comment this line to fetch data from the API
        const data = localData as PropertyItem[];
        return data;
    } catch (error) {
        return error;
    }
}