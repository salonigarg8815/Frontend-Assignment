import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import InventaryBody from './InventaryBody'

const InventaryPage = () => {
    return (
        <div>
            <div className='boxes'>
                <div className="box2">
                    <Sidebar />
                </div>
                <div className="box">
                    <Header />
                    <InventaryBody />
                </div>

            </div>
        </div>
    )
}

export default InventaryPage
