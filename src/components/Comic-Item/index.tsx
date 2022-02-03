import { Link } from 'react-router-dom';
import Comic from '../../types/Comic';
import { useShoppingCart } from '../../context/shoppingCart';
import * as S from './styles';

export function ComicItem(comic: Comic) {
    const { addComic } = useShoppingCart();

    return (
        <S.Wrapper data-cy='comic'>
            <S.Img
                data-cy='comicImg'
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={`Picture of ${comic.title}`}
            />
            <S.Title data-cy='comicTitle'>
                <Link to={`/details/${comic.id}`}>{comic.title}</Link>
            </S.Title>
            <S.WrapperBuy>
                <S.Price data-cy='comicPrice'>${comic.price.toFixed(2)}</S.Price>
                <S.Button
                    data-cy='comicBuy'
                    className={`${comic.rare === 0 ? 'rareItem' : ''}`}
                    onClick={() => addComic(comic, 1)}
                >
                    BUY
                </S.Button>
            </S.WrapperBuy>
        </S.Wrapper>
    );
}

export default ComicItem;
