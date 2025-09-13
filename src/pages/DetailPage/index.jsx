import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const DetailPage = () =>
{

    const { id } = useParams();

    const [ productDetail, setProductDetail ] = useState( [] );


    useEffect( () =>
    {
        const fetchProductDetails = async () =>
        {
            const response = axios.get( 'http://localhost:3000/products' );
            const dataParams = response.data
            const dataDetail = dataParams.find( ( item ) => item.id === Number( id ) )
            setProductDetail( dataDetail )
            console.log( dataDetail, "dataDetail" );
        }
        fetchProductDetails()
    }, [] );




    return (
        <div className="container">
            <div className="content-wrapper">
                <div className="breadcrumb">Home / T-Shirt</div>
                <div className="main-content">
                    <div className="image-section">
                        
                        {
                            productDetail?.map( ( productDetail ) => (
                                <>
                                    <img src={ productDetail.image } alt="Product" className="main-image" />
                                    <div className='thumbnail-container'>
                                        <img src="" className={ `thumbnail` } />
                                    </div>
                                </>
                            ) )
                        }
                    </div>
                    <div className="info-section">
                        <h1 className="product-name">Red Print T-Shirt by HRX</h1>
                        <div className="price">400.000Đ</div>
                        <div className="selector-container">
                            <select className="select">
                                <option value="">Select Size</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                        <div className="quantity-container">
                            <input
                                type="number"
                                className="quantity-input"
                                min="1"
                            />
                            <button className="add-to-cart-btn">Add To Cart</button>
                        </div>
                        <div className="product-details">
                            Products Details
                           
                        </div>
                        <div className="vietnamese-text">nếu rẻ</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;