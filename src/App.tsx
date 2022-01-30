import React from 'react';
import { BrowserRouter,  Route, Routes, Navigate } from 'react-router-dom'
import Cart from './components/Cart';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import GlobalStyle  from './styles/global';

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/not-found" />} />
                </Routes>
            </BrowserRouter>
            <GlobalStyle />
        </>
    );
};

export default App;
