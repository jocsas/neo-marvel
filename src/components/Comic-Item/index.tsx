import * as S from './styles';
import Comic from '../../types/Comic';

import { useShoppingCart } from '../../context/shoppingCart';
import { currency } from '../../helpers/format';



export function ComicItem ( comic: Comic) {

    const { addComic } = useShoppingCart();

    return (
        <S.Wrapper>
            <S.WrapperImg
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={`Picture of ${comic.title}`}
            />
            <S.WrapperTitle>
                {comic.title}
            </S.WrapperTitle>
            <S.WrapperPrice>
                {currency(comic.price)}
            </S.WrapperPrice>
            <S.WrapperButton onClick={() => addComic(comic, 1)}>ADICIONAR</S.WrapperButton>
        </S.Wrapper>
    );
};

export default ComicItem;
