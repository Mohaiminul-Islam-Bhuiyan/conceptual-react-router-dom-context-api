import { createBrowserRouter } from 'react-router-dom'
import Root from '../components/Root';
import Home from '../components/Home'
import About from "../components/About"
import ErrorPage from "../components/ErrorPage"
import Shop from '../components/Shop';
import { productAndCartData } from '../loaders/getCart&ProductsData';
import Cart from '../components/Cart';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: productAndCartData,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },

        ]
    },

])


export default router;