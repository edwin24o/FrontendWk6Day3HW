import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetail from './ProductDetail';  // Import the ProductDetail component
import './App.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null); // Track selected product ID

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    setSelectedProductId(id); // Set the selected product ID when clicked
  };

  return (
    <div>
      <h1>Product List</h1>
      <div className="list">  
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px', cursor: 'pointer' }} onClick={() => handleProductClick(product.id)}>
            <img src={product.image} alt={product.title} style={{ width: '100%' }} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      {selectedProductId && <ProductDetail productId={selectedProductId} />}
    </div>
  );
};

export default ProductList;
