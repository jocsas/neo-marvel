import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getComic } from '../../helpers/api';
import Comic from '../../types/Comic';
import * as S from './styles';

export function ComicView() {
    const { id }: { id: string } = useParams();
    const [comic, setComic] = useState<Comic[]>([]);

    useEffect(() => {
        async function fetchData() {
            const fetchedComic = await getComic(id);
            setComic(fetchedComic);
        }
        fetchData();
    }, []);

    return (
        <S.Wrapper>
            {comic.map(comic => (
                <S.WrapperComic key={comic.id}>
                    <S.Img
                        data-cy='comicImgIndividual'
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt={`Picture of ${comic.title}`}
                    />
                    <S.WrapperInfo>
                        <S.Title data-cy='comicTitleIndividual'>{comic.title}</S.Title>
                        <S.Description data-cy='comicDescIndividual'>
                            {!comic.description || comic.description === '#N/A'
                                ? 'No description'
                                : comic.description}
                        </S.Description>
                        <Link to="/">
                            <S.Button data-cy='backButton'>BACK</S.Button>
                        </Link>
                    </S.WrapperInfo>
                </S.WrapperComic>
            ))}
        </S.Wrapper>
    );
}
