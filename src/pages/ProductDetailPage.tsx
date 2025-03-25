
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Layout from '@/components/layout/Layout';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <Layout>
      <ProductDetail productId={id || ''} />
    </Layout>
  );
};

export default ProductDetailPage;
