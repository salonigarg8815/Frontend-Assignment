import React from 'react'
import Body from './Body';
import Header from './Header';
import Sidebar from './Sidebar'


const Home = () => {
    return (
        <div>
            <div className='boxes'>
                <div className="box2">
                    <Sidebar />
                </div>
                <div className="box">
                    <Header />
                    <Body />
                </div>

            </div>
        </div>
    )
}

export default Home;
