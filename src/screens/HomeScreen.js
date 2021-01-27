import React, { useEffect, useState } from 'react';
// import data from '../data';
import { Link} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen (props) {
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
        return () => {

        };
    }, [])                   

    return loading? <div>Loading...</div> :
    error? <div>Error</div> : 
    <ul className="products">
    {
       products.map(product => 
        <li key={product.id}>
          <div className="product">
              <Link to={'/products/'+product.id}>
                <img className="product-image" src={product.image} alt="product"/>
              </Link>
              <div className="product-name">
                  <Link to={'/products/'+product.id}>{product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">{product.price}</div>
              <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
          </div>
      </li>)
    }
      
  </ul>
}
export default HomeScreen;