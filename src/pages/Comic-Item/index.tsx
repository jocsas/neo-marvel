import React from 'react';
import * as S from './styles';
import { Comic } from '../Comics';

type Props = {
    comic: Comic;
};

const ComicItem: React.FC<Props> = ({ comic }) => {
    return (
        <S.Wrapper>
            <S.WrapperImg
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={`Image of ${comic.title}`}
            />
            <S.WrapperTitle>{comic.title}</S.WrapperTitle>
            {/* <S.WrapperDescription>{comic.description}</S.WrapperDescription> */}
        </S.Wrapper>
    );
};

export default ComicItem;
