
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Render the actual product detail component
  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductDetailPage;
