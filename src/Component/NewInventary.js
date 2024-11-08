import React from 'react'
import { useLocation } from 'react-router-dom'

const NewInventary = () => {
    const location = useLocation();
    const product = location.state.product;

    return (
        <div>
            <div className='body'>
                <div className="invent-item">
                    <h4> Date Added</h4>
                </div>

                <div className="add-btn">
                    <button className='black-btn' > Edit Product </button>
                    <button className='blue-btn mx-3' type='submit'>Upublish Product</button>
                </div>
            </div>

            <div className="container-fluid new-inven">
                <div className="row mb-2">
                    <div className="col-md-2 pro-box">
                        <h6>Image</h6>
                    </div>

                    <div className="col-md-3 pro-box d-flex justify-content-around align-items-center">
                        <div className="date">
                            <span>Last Date</span>
                            <h6>Price</h6>
                        </div>
                        <div className="price">
                            <span>3000</span>
                            <h6>Price</h6>
                        </div>
                    </div>

                    <div className="col-md-3 pro-box">
                        <h6>Total Orders</h6>
                        <span>50,000,00</span>
                    </div>

                    <div className="col-md-3 pro-box d-flex justify-content-around align-items-center">
                        <div className="date">
                            <h6>Last Date</h6>
                            <span>2</span>
                        </div>
                        <div className="price">
                            <h6>Price</h6>
                            <span>3000</span>
                        </div>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-md-6 pro-box d-flex justify-content-around align-items-center">
                        <div className="all-order">
                            <h6>All Orders</h6>
                            <span>10</span>
                        </div>
                        <div className="pending">
                            <h6>Pending</h6>
                            <span>2</span>
                        </div>
                        <div className="compl">
                            <h6>Completed</h6>
                            <span>10</span>
                        </div>
                    </div>

                    <div className="col-md-5 pro-box d-flex justify-content-around align-items-center">
                        <div className="all-order">
                            <h6>All Orders</h6>
                            <span>10</span>
                        </div>
                        <div className="pending">
                            <h6>Pending</h6>
                            <span>2</span>
                        </div>
                        <div className="compl">
                            <h6>Completed</h6>
                            <span>10</span>
                        </div>
                    </div>
                </div>

                <div className="row productItem mx-1">
                    <div className="col-11 pro-box">
                        <div className="product-head">
                            <div className="items">
                                <h4>Inventory Items</h4>
                            </div>

                            <div className='item-input-filed'>
                                <input type="search" placeholder='search' className='search' />
                                <input type="search" placeholder='filter' />
                                <input type="search" placeholder='filter' />
                                <input type="search" placeholder='share' />
                                <input type="search" placeholder='Bulk Action' />
                            </div>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th> Category</th>
                                    <th>Order Date</th>
                                    <th>Order Type</th>
                                    <th>Unit Price</th>
                                    <th>Qty</th>
                                    <th>Discount (%)</th>
                                    <th>Order Total</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.date}</td>
                                <td>{product.orderType}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>1</td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewInventary
