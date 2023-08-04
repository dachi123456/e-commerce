import { useDispatch, useSelector } from "react-redux";
import './cartpage.css'
import { useState } from "react";
import { deleteItemFromCart } from "../store/slices/cart.slice";

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [counters, setCounters] = useState(cartItems.map(() => 1));

    const increaseAmount = (index) => {
        setCounters((prevCounters) => {
            const newCounters = [...prevCounters];
            newCounters[index] += 1;
            return newCounters
        });
    };

    const decreaseAmount = (index) => {
        if (counters[index] !== 1) {
            setCounters((prevCounters) => {
                const newCounters = [...prevCounters];
                newCounters[index] -= 1;
                return newCounters;
            })
        }
    };

    const handleDeleteClick = (index) => {
        dispatch(deleteItemFromCart(index)); 
    };

    const totalPrice = cartItems.reduce((total, item, index) => {
        return total + item.price * counters[index];
    }, 0)

    return (
        <div className="cart-container">
            <h3>full price : {totalPrice}</h3>
            {cartItems.map((item, index) => (
                <div key={item.id} className="card-box">
                    <img src={item.img} alt={item.name} />
                    <div className="price-name">
                        <p>{item.name}</p>
                        <h6>{`$ ${item.price}`}</h6>
                    </div>
                    <div className="amount">
                        <h5>amount : {counters[index]}</h5>
                        <div className="buttons">
                            <button onClick={() => increaseAmount(index)}>+</button>
                            <button onClick={() => decreaseAmount(index)}>-</button>
                           
                        </div>
                        
                    </div>
                    <button className="delete-btn" onClick={() => handleDeleteClick(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default CartPage;