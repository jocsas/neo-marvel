import * as S from './styles';
import Comic from '../../types/Comic';

import { useShoppingCart } from '../../context/shoppingCart';
import { currency } from '../../helpers/format';
import { Link } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';

export function ComicItem(comic: Comic) {
    const { addComic } = useShoppingCart();

    return (
        <S.Wrapper>
            <S.Img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={`Picture of ${comic.title}`}
            />
            <S.Title>
                <Link to={`/details/${comic.id}`}>{comic.title}</Link>
            </S.Title>
            <S.WrapperBuy>
                <S.Price>${comic.price.toFixed(2)}</S.Price>
                <S.Button 
                    className={`${(comic.rare === 0 ? 'rareItem' : '')}`}
                    onClick={() => addComic(comic, 1)}
                    >
                        BUY
                </S.Button>
            </S.WrapperBuy>
        </S.Wrapper>
    );
}

export default ComicItem;
