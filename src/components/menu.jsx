import { useState } from "react"
import menuIcon from '../icons/menus.png'
import './menu.css'
import closeIcon from '../icons/close.png'
import { Link } from "react-router-dom"

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const onMenuClick = () => {
        setIsOpen(!isOpen)
    }

    const onLinkClick = () => {
        setIsOpen(false)
    }
    return (
        <div className="menu-container">
            <button onClick={onMenuClick}>
                <img src={isOpen ? closeIcon : menuIcon} alt="menu" className="menu-icon" />
            </button>

            <div className="menu-list-container" style={isOpen ? { display: 'flex', position: 'absolute' } : { display: 'none' }} >
                <ul className="list" >
                    <li onClick={onLinkClick}><Link to={'/'}>main page</Link></li>
                    <li onClick={onLinkClick}><Link to={'/shop'}>shop page</Link></li>
                    <li onClick={onLinkClick}><Link to={'/cart'}>cart</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;