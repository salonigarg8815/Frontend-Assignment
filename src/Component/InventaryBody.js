import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const InventaryBody = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [orderType, setOrderType] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const product = { name, category, date, orderType, price, quantity };
        navigation('/inventary/NewInventaryPage', { state: { product } })

    }


    return (
        <>
            <div className="inven-body">
                <form action="" onSubmit={handleSubmit}>
                    <div className='body'>
                        <div className="invent-item">
                            <h4>Inventory Summary</h4>
                        </div>

                        <div className="add-btn">
                            <button className='black-btn' > Save as Draft  </button>
                            <button className='blue-btn mx-3' type='submit'>Save & Publish</button>
                        </div>
                    </div>

                    <div className="container-fluid product my-2 ">

                        <div className="row">
                            <div className="col-md-8 product-desc">
                                <div className="row">
                                    <div className="col-md-6">

                                        <div className="name ">
                                            <input type="text" placeholder='Product Name' className='w-75 my-2' value={name}
                                                onChange={(e) => setName(e.target.value)} /> <br />
                                        </div>

                                        <div className="category">
                                            <select name="category" id="" className='w-75 my-2' value={category}
                                                onChange={(e) => setCategory(e.target.value)}>
                                                <option value="disabled selected hidden"> Select Product Category</option>
                                                <option value="iPhone 13 Pro"> iPhone 13 Pro</option>
                                                <option value="iPhone 13 Pro"> iPhone 12 Pro</option>
                                                <option value="iPhone 13 Pro">iPhone 12 Pro</option>
                                            </select>
                                        </div>
                                        <div className="price d-flex  my-2">
                                            <input type="number" placeholder='Selling Price' className='w-25' value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                            />
                                            <input type="number" placeholder='Coast Price' className='w-25  mx-5' />
                                        </div>

                                        <div className="quantity ">
                                            <input type="number" placeholder='Quantity in stock' className='w-75 my-2'
                                                value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                        </div>

                                        <div className="order">
                                            <select name="order" id="" className='w-50 my-2' value={orderType}
                                                onChange={(e) => setOrderType(e.target.value)}>
                                                <option value="disabled selected hidden"> Order Type</option>
                                                <option value="Fashion"> Fashion</option>
                                                <option value="Gadgets">Gadgets</option>
                                                <option value="Gadgets"> Gadgets</option>
                                            </select>
                                        </div>

                                        <div className="discount my-3">
                                            <label htmlFor=""><h6>Add Discount</h6></label>
                                            <input type="checkbox" /><br />

                                            <label htmlFor="checkbox"><h6>Expiry Date</h6></label>
                                            <input type="checkbox" className='my-2' />
                                        </div>

                                    </div>

                                    <div className="col-md-6">
                                        <div className="short-des">
                                            <textarea name="" id="" placeholder='Short Description' rows='4' className='w-75 my-2'></textarea>
                                        </div>

                                        <div className="long-desc">
                                            <h6>Product Long Description</h6>
                                            <textarea name="" id="" placeholder='Your Text Goes Here...' rows='4' className='w-75 my-2'></textarea>
                                        </div>

                                        <div className="policy my-2">
                                            <label htmlFor=""><h6>Privacy Policy</h6></label>
                                            <input type="checkbox" />
                                        </div>

                                        <div className="time">
                                            <h6>Date Added</h6>
                                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                            <input type="time" className='mx-4' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 product-image">

                                <input type="file" name='image' accept='image/' />
                                <h6>Additional Images</h6>
                                <div className="box ">

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default InventaryBody;
