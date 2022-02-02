import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getComic } from '../../helpers/api';
import api from '../../services/api';
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
            {comic.map(hq => (
                <S.WrapperComic key={hq.id}>
                    <S.Img
                        src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`}
                        alt={`Picture of ${hq.title}`}
                    />
                    <S.WrapperInfo>
                        <S.Title>{hq.title}</S.Title>
                        <S.Description>
                            {!hq.description || hq.description === '#N/A' ? 'No description' : hq.description}
                        </S.Description>
                        <Link to='/'>
                            <S.Button>BACK</S.Button>
                        </Link>
                    </S.WrapperInfo>
                </S.WrapperComic>
            ))}
        </S.Wrapper>
    );
}
