import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  // Show a loading message while fetching the product details
  if (!product) {
    return <p>Loading product details...</p>; 
  }

  return (
    <div class="container">
      <div className='details'>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width= '200' />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Rating:</strong> {product.rating.rate} / 5 (Based on {product.rating.count} reviews)</p>
      </div>
    </div>
  );
};

export default ProductDetail;
