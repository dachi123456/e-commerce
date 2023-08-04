import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import GmailComponent from "../components/gmailComponent";
import MainComponent from "../components/mainComponent";
import TopRatedCards from "../components/topRatedCards";
import './mainpage.css';

const MainPage = () => {
    const cartItems = useSelector((state) => state.cart);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (cartItems.length > 0) {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 1500);
        }
    }, [cartItems])

    return (
        <div>
            <MainComponent />
            <TopRatedCards />
            <GmailComponent />
            {showAlert && <div className='alert-div'><p>Item added to the cart</p></div>}
        </div>
    );
};

export default MainPage;