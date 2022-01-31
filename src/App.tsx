import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { Header } from './components/Header';
import { ShoppingCart } from './components/ShoppingCart';
import { ShoppingCartContextProvider } from './context/shoppingCart';
import NotFound from './pages/NotFound';
import GlobalStyle  from './styles/global';

function App()  {
    return (
        <>
            <Router>
        <ShoppingCartContextProvider>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/checkout">
                <ShoppingCart />
              </Route>
            </Switch>
        </ShoppingCartContextProvider>
    </Router>
            <GlobalStyle />
        </>
    );
};

export default App;
