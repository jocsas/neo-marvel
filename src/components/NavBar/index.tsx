import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const NavBar: React.FC = () => {
    return (
        <S.Wrapper>
            <Link to="/">
                <h1>NEO MARVEL STORE</h1>
            </Link>

            <div>
                <input
                    type="text"
                    placeholder="Type here a Comic to search..."
                />
                <button type="submit" onClick={() => console.log('procura')}>
                    SEARCH
                </button>
            </div>
            <Link to="/cart">
                <div className='nav-bag'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="white"
                        className="bi bi-cart-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <span className="cartQuantity">
                        <span>3</span>
                    </span>
                </div>
            </Link>
        </S.Wrapper>
    );
};

export default NavBar;
