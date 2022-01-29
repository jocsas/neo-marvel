import React from 'react';
import * as S from './styles';

type Props = {
    title: string;
    description: string;
    thumb: string;
};

const ComicItem: React.FC<Props> = ({ title, description, thumb }) => {
    return (
        <S.Wrapper>
            <S.WrapperTitle>{title}</S.WrapperTitle>
            <S.WrapperDescription>{description}</S.WrapperDescription>
            <S.WrapperImg>{thumb}</S.WrapperImg>
        </S.Wrapper>
    );
};

export default ComicItem;
