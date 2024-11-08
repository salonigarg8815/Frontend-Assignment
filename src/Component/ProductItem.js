import React from 'react'
import { useState } from 'react';
import productData from '../utils/ProductData';

const ProductItem = () => {
    const [products, setProducts] = useState(productData);

    return (
        <div className="productItem">
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
                        <th></th>
                        <th></th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Unit Price</th>
                        <th>In Stock</th>
                        <th>Discount (%)</th>
                        <th>Total Value</th>
                        <th>Active</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td><input type="checkbox" /></td>
                            <td><img src={product.Img} alt="product" /></td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.inStock ? 'Yes' : 'No'}</td>
                            <td>{product.discount}</td>
                            <td>{product.totalValue}</td>
                            <td>{product.active ? 'Yes' : 'No'}</td>
                            <td>{product.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductItem
