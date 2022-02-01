import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getComic } from "../../helpers/api"
import api from "../../services/api";
import Comic from "../../types/Comic";
import * as S from './styles'

export function ComicView () {
    
    const { id }:{ id: string } = useParams();
    const [comic, setComic] = useState<Comic[]>([]);

    useEffect(() => {
        async function fetchData() {
           const fetchedComic = await getComic(id);
           setComic(fetchedComic)
           console.log(fetchedComic)
        }
        fetchData()
     }, []);
    return (
        <S.Wrapper>
                 {comic.map(hq =>(
        <S.WrapperComic>
                    <S.Img
                    src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`}
                    alt={`Picture of ${hq.title}`}
                    />
                    <S.Title>
                        {hq.title}
                    </S.Title>
                    <S.Description>
                        {hq.description}
                    </S.Description>
                    <S.Price>
                        {hq.price}
                    </S.Price>

                </S.WrapperComic>
                    ))}
            </S.Wrapper>
        
    )
}