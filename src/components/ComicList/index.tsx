import React, { useEffect, useState } from 'react';
import { getComics } from '../../helpers/api';
import ComicItem from '../Comic-Item';
import Comic from '../../types/Comic';
import { FaSpider } from 'react-icons/fa';
import * as S from './styles';
export function ComicList() {
    const [comicList, setComicList] = useState<Comic[]>([]);

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const fetchedComics = await getComics();
            setComicList(fetchedComics);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <S.Wrapper>
            <S.WrapperList>
                {!loading ? (
                    comicList?.map(comic => (
                        <ComicItem key={comic.id} {...comic} />
                    ))
                ) : (
                    <div className="loading">
                        <FaSpider size={50} />
                    </div>
                )}
            </S.WrapperList>
        </S.Wrapper>
    );
}

export default ComicList;
