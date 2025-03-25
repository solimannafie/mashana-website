
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {id && (
          <div>
            {/* ProductDetail component is moved inline */}
            <div className="product-detail-content">
              {/* Product detail content will be rendered here */}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
