import * as S from './styles';
import Comic from '../../types/Comic';

import { useShoppingCart } from '../../context/shoppingCart';
import { currency } from '../../helpers/format';
import { Link } from 'react-router-dom';



export function ComicItem ( comic: Comic) {

    const { addComic } = useShoppingCart();

    return (
        <S.Wrapper>
            <S.Img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={`Picture of ${comic.title}`}
            />
            <S.Title>
                <Link to={`/details/${comic.id}`}>
                    {comic.title}
            </Link>
            </S.Title>
            <S.Price>
                {currency(comic.price)}
            </S.Price>
            <S.Button onClick={() => addComic(comic, 1)}>ADICIONAR</S.Button>
        </S.Wrapper>
    );
};

export default ComicItem;
