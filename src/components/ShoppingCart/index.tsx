import { useShoppingCart } from '../../context/shoppingCart';
import { Link } from 'react-router-dom';
import { currency } from '../../helpers/format';
import * as S from './styles';

export function ShoppingCart() {
    const {
        shoppingCart,
        removeComic,
        clearShoppingCart,
        getTotalValue,
        handleCartActive,
    } = useShoppingCart();

    return (
        <S.Wrapper>
            <S.WrapperCartTop>
                <p>Cart</p>
                <button onClick={() => clearShoppingCart()}>Clear</button>
            </S.WrapperCartTop>
            <S.WrapperCartList>
                {
                shoppingCart?.length == 0 ? (
                    <li>
                        <p>Empty shopping cart....</p>
                    </li>
                ) : (
                    shoppingCart?.map(cartItem => {
                        const { comic, quantity } = cartItem;
                        return (
                            <li key={comic.id} className="comic">
                                <div className="comicLogo">
                                    {
                                        <img
                                            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                        />
                                    }
                                </div>
                                <div className="comicInfoWrapper">
                                    <div className="comicTitle">
                                        {comic.title}
                                    </div>
                                    <span className="quantity">{quantity}</span>
                                    <span className="price">
                                        {currency(comic.price * quantity)}
                                    </span>
                                </div>
                                <button
                                    onClick={() => removeComic(comic)}
                                    title="Remove from cart"
                                >
                                    Remove
                                </button>
                            </li>
                        );
                    })
                )}
            </S.WrapperCartList>
            {shoppingCart?.length == 0 ? null : (
                <div className='bottom'>
                    <div className='total'>
                        <p>Total:</p>
                        <strong>{currency(getTotalValue())}</strong>
                    </div>
                    <Link to="/checkout">
                        <button
                            className='button'
                            style={{ fontSize: 18, height: 45 }}
                            onClick={() => handleCartActive(false)}
                        >
                            Checkout
                        </button>
                    </Link>
                </div>
            )}
        </S.Wrapper>
    );
}
