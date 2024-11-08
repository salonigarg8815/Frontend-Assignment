import React from 'react'
import NewInventary from './NewInventary'
import Sidebar from './Sidebar'
import Header from './Header'

const NewInventaryPage = () => {
    return (
        <div>
            <div className='boxes'>
                <div className="box2">
                    <Sidebar />
                </div>
                <div className="box">
                    <Header />
                    <NewInventary />
                </div>

            </div>
        </div>
    )
}

export default NewInventaryPage
