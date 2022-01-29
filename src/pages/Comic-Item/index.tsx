import React from 'react';
import * as S from './styles';
import { Comic } from '../Comics';

type Props = {
    comic: Comic;
};



const noPrice = () => (Math.random() * 10).toFixed(2);
console.log(noPrice())

const ComicItem: React.FC<Props> = ({ comic }) => {
    return (
        <S.Wrapper>
            <S.WrapperImg
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={`Image of ${comic.title}`}
            />
            <S.WrapperTitle>{Number(comic.id) < 300 ? `${comic.title} (RARO)` : comic.title}</S.WrapperTitle>
            <S.WrapperPrice>R$ {comic.prices[0].price === 0  ? noPrice() : comic.prices[0].price}</S.WrapperPrice>
        </S.Wrapper>
    );
};

export default ComicItem;
