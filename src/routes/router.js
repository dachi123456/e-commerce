import { Outlet } from "react-router-dom"
import Header from "../components/header"
import MainPage from "../pages/MainPage"
import ShopPage from "../pages/shopPage"
import CartPage from "../pages/cartPage"

const router = [
    {
        element: <div>
            <Header />
            <Outlet />
        </div>,
        path:'/',
        children: [
            {
                element: <MainPage />,
                index: true
            },
            {
                element: <ShopPage />,
                path: 'shop'
            },
            {
                element: <CartPage />,
                path: 'cart'
            }
        ]
    }
]

export default router;