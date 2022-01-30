import React from 'react';
import Header from './components/Header';
import Comics from './pages/Comics';
import GlobalStyle  from './styles/global';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Comics />
            <GlobalStyle />
        </>
    );
};

export default App;
