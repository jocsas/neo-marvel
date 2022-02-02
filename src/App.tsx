import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './components/Header';
import { ShoppingCartContextProvider } from './context/shoppingCart';
import NotFound from './pages/NotFound';
import GlobalStyle  from './styles/global';
import { ComicView } from './components/ComicView';
import { Checkout } from './pages/Checkout';

function App()  {
    return (
        <>
            <Router>
        <ShoppingCartContextProvider>
            <Header />
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/details/:id' exact>
                <ComicView />
              </Route>
              <Route path='/checkout'>
                <Checkout />
              </Route>
            </Switch>
        </ShoppingCartContextProvider>
    </Router>
            <GlobalStyle />
        </>
    );
};

export default App;
