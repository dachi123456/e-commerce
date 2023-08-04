import { Link } from 'react-router-dom'
import CardList from './cardList'
import './topRatedCards.css'



const TopRatedCards = () => {
    
    return(
        <div className='rated-card-container'>
            <h2>TOP RATED</h2>
            <CardList />
            <Link to={'/shop'}><button className='more-btn'>MORE</button></Link>
        </div>
    )
}

export default TopRatedCards