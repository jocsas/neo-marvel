import { useShoppingCart } from '../../context/shoppingCart';
import { Link } from 'react-router-dom';
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
                <button data-cy='clearCart' onClick={() => clearShoppingCart()}>Clear</button>
            </S.WrapperCartTop>
            <S.WrapperCartList>
                {shoppingCart?.length == 0 ? (
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
                                    <div
                                        className={`${'comicTitle'} ${
                                            comic.rare === 0 ? 'rareItem' : ''
                                        }`}
                                    >
                                        {comic.title}
                                    </div>
                                    <span className="quantity">{quantity}</span>
                                    <span className="price">
                                        $ {(comic.price * quantity).toFixed(2)}
                                    </span>
                                </div>
                                <button
                                    data-cy= 'removeIndividual'
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
                <div className="bottom">
                    <div className="total">
                        <p>Total:</p>
                        <strong>$ {getTotalValue().toFixed(2)}</strong>
                    </div>
                    <Link to="/checkout">
                        <button
                            data-cy='checkoutButton'
                            className="button"
                            style={{ fontSize: 18, height: 45 }}
                            onClick={() => {
                                window.scrollTo(0,0)
                                handleCartActive(false)
                            }}
                        >
                            Checkout
                        </button>
                    </Link>
                </div>
            )}
        </S.Wrapper>
    );
}
