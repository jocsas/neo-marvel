import React, { useEffect, useState } from 'react';
import ComicItem from '../Comic-Item';
import * as S from './styles';
import Comic from '../../types/Comic';
import { getComics } from '../../helpers/api';

export function ComicList() {

    const [comicList, setComicList] = useState<Comic[]>([]);

    useEffect(() => {
        async function fetchData() {
           const fetchedComics = await getComics();
           setComicList(fetchedComics)
        }
        fetchData()
     }, []);

    return (
        <S.Wrapper>
            <S.WrapperList>
                {comicList?.map(comic => (
                    <ComicItem key={comic.id} {...comic}/>
                ))}
            </S.WrapperList>
        </S.Wrapper>
    );
};

export default ComicList;
