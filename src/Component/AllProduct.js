import React from 'react'
import icon from '../images/icon.png'

const AllProduct = () => {
    return (
        <div className='AllProduct'>
            <img src={icon} alt="icon" />

            <div className="pro-con">
                <div className="allpro-con1">
                    <h6>All Products</h6>
                    <span> 350 </span>
                </div>

                <div className="allpro-con2">
                    <h6> Active</h6>
                    <span> 316 </span>
                </div>
            </div>
        </div>
    )
}

export default AllProduct
