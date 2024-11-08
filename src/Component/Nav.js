import { Link, useLocation } from 'react-router-dom'
import home from '../images/Home.png'

const Nav = () => {
    const location = useLocation()
    return (
        <div className='nav'>
            <Link to="/"> <img src={home} alt="home-image" style={{ color: location.pathname === '/' ? 'blue' : '' }} /></Link>
            <Link to="/inventary" > <h5 style={{ color: location.pathname === '/inventary' ? 'blue ' : '' }}> / Inventory</h5></Link>
        </div>
    )
}

export default Nav
