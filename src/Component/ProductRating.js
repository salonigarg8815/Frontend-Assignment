import React from 'react'
import iconUser from '../images/icon2.png'

const ProductRating = () => {
    return (
        <div className='ProductRating'>
            <img src={iconUser} alt="iconUser" />

            <div className="prorate-con">
                <div className="Prorate-con1">
                    <h6>Low Stock Alert</h6>
                    <span> 23 </span>
                </div>

                <div className="Prorate-con2">
                    <h6>Experied</h6>
                    <span> 3 </span>
                </div>

                <div className="Prorate-con3">
                    <h6>1 Start Rating</h6>
                    <span> 2 </span>
                </div>
            </div>
        </div>
    )
}

export default ProductRating;
