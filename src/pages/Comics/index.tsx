import React, { useEffect, useState } from 'react';
import ComicItem from '../Comic-Item';
import api from '../../services/api';
import * as S from './styles';

interface Comic {
    id: string;
    title: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    prices: {
        price: number;
    };
}

const Comics: React.FC = () => {
    const [comics, setComics] = useState<Comic[]>([]);
    useEffect(() => {
        api.get('/comics')
            .then(res => {
                setComics(res.data.data.results);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <S.Wrapper>
            <S.WrapperList>
                {comics.map(comic => (
                    <ComicItem
                        key={comic.id}
                        title={comic.title}
                        description={comic.description}
                        thumb={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    />
                ))}
            </S.WrapperList>
        </S.Wrapper>
    );
};

export default Comics;
