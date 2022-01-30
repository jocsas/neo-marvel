import React from 'react';
import * as S from './styles'

const Header: React.FC = () => {
    return(
        <header>
            <S.Wrapper>
                <h1>NEO MARVEL STORE</h1>
                <div>
                    <input type="text" placeholder="Type here a Comic to search..." />
                    <button type="submit" onClick={() => console.log('procura')}>SEARCH</button>
                </div>
                <h2>CART</h2>
            </S.Wrapper>
        </header>
    )
};

export default Header;