import React from 'react'
import logo from '../images/phantasm_logo_icon_-01_480 1.png'
import active from '../images/active.png'
import bag from '../images/Bag.png'
import user from '../images/2 User.png'
import active2 from '../images/active2.png'
import active3 from '../images/active3.png'
import active4 from '../images/active4.png'
import frame from '../images/Frame 8.png'
import container from '../images/container.png'
import logout from '../images/Logout.png'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li><img src={logo} alt="logo" /></li>
            </ul>

            <ul>
                <li><img src={active} alt="active" /></li>
                <li><img src={bag} alt="bag" /></li>
                <li><img src={user} alt="user" /></li>
                <li><img src={active2} alt="active2" /></li>
                <li><img src={active3} alt="active3" /></li>
                <li><img src={active4} alt="active4" /></li>
            </ul>

            <ul>
                <li><img src={frame} alt="frame" /></li>
                <li><img src={container} alt="container" /></li>
                <li><img src={logout} alt="logout" /></li>
            </ul>
        </div>
    )
}

export default Sidebar
