import { Link } from 'react-router-dom'
import './mainComponent.css'

const MainComponent = () => {

    return(
        <div className="main-component">
            <h1>Choose flowers for any occasion</h1>
            <p>Our goal is to provide the highest quality and fresh flower delivery in Los Angeles.</p>
            <Link to={'/shop'}><button>View now</button></Link>
        </div>
    )
}

export default MainComponent