import axios from 'axios';
import md5 from 'md5';

const baseURL = 'https://gateway.marvel.com/v1/public';
const publicKey = '2ffbbb3af3d4a03a41639c11e500f117';
const privateKey = '9a26d1234f1d440c17be011c5eed9f8124baa5cc';
const timestamp = Number(new Date());
const hash = md5(timestamp + privateKey + publicKey);

const api = axios.create({
    baseURL,
    params: {
        apikey: publicKey,
        ts: timestamp,
        hash,
    },
});

export default api;
