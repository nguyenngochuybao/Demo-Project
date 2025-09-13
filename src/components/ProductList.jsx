// src/components/ProductList.js
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const ProductList = ( { title } ) =>
{

    const [ products, setProducts ] = useState( [] );

    useEffect( () =>
    {
        const fetchProducts = async () =>
        {
            const response = await axios.get( "http://localhost:3000/products" );
            setProducts( response.data );
            console.log(response.data);
            
        }

        fetchProducts()
    },[])
    

    return (
        <section className="product-section">
            <h2 className="section-title">{ title }</h2>
            <div className="products-container">
                { products.map( product => (
                    <Link to={`/detail/${product.id}`} key={product.id} className="product-card">
                        <img src={ product.image } alt={ product.name } />
                        <div className="product-info">
                            <h3>{ product.name }</h3>
                            <div className="rating">
                                {/* Biểu tượng sao đánh giá */ }
                            </div>
                            <p className="price">{ product.price }</p>
                        </div>
                    </Link>
                ) ) }
            </div>
        </section>
    );
};

export default ProductList;