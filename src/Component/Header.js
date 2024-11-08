import React from 'react'
import img from '../images/profile 1.png'
import Nav from './Nav'

const Header = () => {
    return (
        <div className='head-nav'>
            <div className='header'>
                <div className="inventory">
                    <h4>Inventory</h4>
                </div>

                <div className="profile">
                    <div className="dropdown">
                        <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Nanny's Shop
                        </a>

                        <ul class="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Item 1</a></li>
                            <li><a className="dropdown-item" href="#">Item 2</a></li>
                            <li><a className="dropdown-item" href="#">Item 3</a></li>
                        </ul>
                    </div>

                    <div className="icons">
                        <i className="fa-solid fa-bell"></i>
                        <img src={img} alt="profile-image" />
                    </div>
                </div>

            </div>
            <Nav />
        </div>
    )
}

export default Header
