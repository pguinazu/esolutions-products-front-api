import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home';
import Navbar from '../../components/Navbar';
import '../../App.css'
import { ShoppingCartContextProvider } from '../../context';
import CheckoutSideMenu from '../../components/CheckoutSideMenu';
import { Provider } from 'react-redux';
import { store } from '../../store';
import NewProduct from '../NewProduct';

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/new-product',
      element: <NewProduct />
    },
    // TODO: filter by category
    // {
    //   path: '/my-order',
    //   element: <MyOrder />
    // },
    // {
    //   path: '/clothes',
    //   element: <MyOrder />
    // },
    // {
    //   path: '/electronics',
    //   element: <MyOrder />
    // }
  ])
  return routes;
}

const App = () => {
  return (
    <Provider store={store}>
    <ShoppingCartContextProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartContextProvider>
    </Provider>
  )
}

export default App
