import React, { useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

const baseURL = 'http://gateway.marvel.com/v1/public/comics?';
const publicKey = '2ffbbb3af3d4a03a41639c11e500f117';
const privateKey = '9a26d1234f1d440c17be011c5eed9f8124baa5cc';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const App: React.FC = () => {
    useEffect(() => {
        axios
            .get(`${baseURL}ts=${time}&apikey=${publicKey}&hash=${hash}`)
            .then(res => console.log(res.data.data))
            .catch(err => console.log(err));
    }, []);
    return <div>NEO-MARVEL STORE</div>;
};

export default App;
