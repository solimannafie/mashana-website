
import React from 'react';
import ProductCard from './ProductCard';
import { ProductType } from '@/types';
import { motion } from 'framer-motion';

interface ProductGridProps {
  products: ProductType[];
  loading?: boolean;
  className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  loading = false,
  className
}) => {
  if (loading) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-card overflow-hidden">
            <div className="aspect-square bg-secondary animate-pulse" />
            <div className="p-4 space-y-3">
              <div className="h-5 bg-secondary rounded animate-pulse w-2/3" />
              <div className="h-4 bg-secondary rounded animate-pulse w-full" />
              <div className="h-4 bg-secondary rounded animate-pulse w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <h3 className="text-lg font-medium">No products found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your filters or check back later.</p>
      </motion.div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
};

export default ProductGrid;
