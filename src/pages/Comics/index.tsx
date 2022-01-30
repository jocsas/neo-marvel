import React, { useEffect, useState } from 'react';
import ComicItem from '../Comic-Item';
import api from '../../services/api';
import * as S from './styles';

const price = parseFloat(((Math.random() * (200 - 20)) + 20).toFixed(2));

export type Comic = {
    id: string;
    title: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    prices: {
        0: {
            price: number;
        };
    };
};

const Comics: React.FC = () => {
    const [comics, setComics] = useState<Comic[]>([]);
    useEffect(() => {
        api.get('/comics')
            .then(res => {
                setComics(res.data.data.results);
                console.log(res.data.data.results)
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <S.Wrapper>
            <S.WrapperList>
                {comics.map(comic => (
                    <ComicItem key={comic.id} comic={comic} />
                ))}
            </S.WrapperList>
        </S.Wrapper>
    );
};

export default Comics;
