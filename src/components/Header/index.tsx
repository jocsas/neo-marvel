import { Link } from 'react-router-dom';
import { useShoppingCart } from '../../context/shoppingCart';
import { ShoppingCart } from '../ShoppingCart';
import { BsSearch, BsFillCartFill } from 'react-icons/bs';
import * as S from './styles';

export function Header() {
    const { getCartLenght, cartActive, handleCartActive } = useShoppingCart();

    function handleShoppingCartDisplay() {
        handleCartActive(!cartActive);
    }

    // Needs to implement search query
    
    return (
        <>
            <S.Wrapper>
                <S.WrapperNav>
                    <Link to='/'>
                        <h2 data-cy='logo' className='logo'>NEO STORE</h2>
                    </Link>

                    <form role='search' className='searchBarWrapper'>
                        <input
                            data-cy= 'searchbar'
                            type='text'
                            name='searchbar'
                            id='searchbar'
                            placeholder='Search'
                        />
                        <button
                            className='searchIcon'
                            title='Search'
                            type='submit'
                        >
                            <BsSearch />
                        </button>
                    </form>
                    <div className='cart'>
                        <button
                            data-cy='cartIcon'
                            title='shoppingCart'
                            className='cartIcon'
                            onClick={() => handleShoppingCartDisplay()}
                        >
                            <BsFillCartFill size={24} />
                            <span data-cy='quantityBadge' className='cartQuantity'>
                                {getCartLenght()}
                            </span>
                        </button>
                    </div>
                </S.WrapperNav>
            </S.Wrapper>
            {cartActive ? <ShoppingCart /> : null}
        </>
    );
}
