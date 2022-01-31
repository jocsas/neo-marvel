import React from 'react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../../context/shoppingCart';
import { ShoppingCart } from '../ShoppingCart';
import { BsSearch, BsFillCartFill } from 'react-icons/bs';
import * as S from './styles';

export function Header() {

    const { getNumberOfComics, cartActive, handleCartActive } = useShoppingCart();

    function handleShoppingCartDisplay(){
        handleCartActive(!cartActive);
     }
    return (
        <>
        <S.Wrapper>
            <S.WrapperNav>
            <Link to="/">
                <h2 className='logo'>NEO STORE</h2>
            </Link>

            <form
                  role='search'
                  className='searchBarWrapper'
               >
                  <input
                     type="text"
                     name="searchbar"
                     id="searchbar"
                     placeholder='Pesquisa'
                  />
                  <button
                    className='searchIcon' 
                     title='Pesquisar'
                     type='submit'
                  >
                     <BsSearch />
                  </button>
               </form>
               <div className='cart'>
                    <button title='Carrinho de compras'
                            className='cartIcon'
                     onClick={() => handleShoppingCartDisplay()}
                  >
                     <BsFillCartFill
                        size={24}
                     />
                     <span className='cartQuantity'>
                        {getNumberOfComics()}
                     </span>
                  </button>
                </div>
                </S.WrapperNav>
        </S.Wrapper>
        {cartActive ? <ShoppingCart /> : null}
        </>
    );
};
