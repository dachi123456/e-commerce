import logo from '../images/logo.svg'
import Menu from './menu'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {

    return(
        <div className="header-container">
            <Link to={'/'}><img src={logo} alt="" className='logo-img'/></Link>
            <Menu />
        </div>
    )
}

export default Header