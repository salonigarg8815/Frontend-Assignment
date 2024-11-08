import React from 'react'
import AllProduct from './AllProduct'
import ProductRating from './ProductRating'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

const Body = () => {
    return (
        <div className="body-container">
            <div className='body'>
                <div className="invent-item">
                    <h4>Inventory Summary</h4>
                </div>

                <div className="add-btn">
                    <Link to="inventary"> <button className='blue-btn'> + Add a New Product</button></Link>
                </div>
            </div>

            <div className="sub-body">
                <AllProduct />
                <ProductRating />
            </div>

            <div className="main-body">
                <ProductItem />
            </div>
        </div>
    )
}

export default Body
