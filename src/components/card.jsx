import { useDispatch } from 'react-redux';
import './card.css'
import { addItemToCart } from '../store/slices/cart.slice';



const Card = ({img,name,price}) => {
    const dispatch = useDispatch();
    
    const handleOrderClick = () => {
      const newItem = { img, name, price, quantity: 1 };
      dispatch(addItemToCart(newItem));
      
    };
    
    return(
        <div className='card-container'>
            <img src={img} alt="" />
            <p>{name}</p>
            <h6>{`$ ${price}`}</h6>
            <button onClick={handleOrderClick}>order</button>
            
        </div>
    )
}

export default Card