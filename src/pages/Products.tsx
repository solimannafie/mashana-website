
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import { CategoryType, ProductType } from '@/types';
import { getProductsByCategory } from '@/data/products';
import { motion } from 'framer-motion';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      const filteredProducts = getProductsByCategory(selectedCategory);
      setProducts(filteredProducts);
      setLoading(false);
    }, 500);
  }, [selectedCategory]);

  // Updated categories based on client requirements
  const categories: { value: CategoryType; label: string }[] = [
    { value: 'all', label: 'All Products' },
    { value: 'bread', label: 'Country Bread Loafs' },
    { value: 'brioche', label: 'Brioche' },
    { value: 'focaccia', label: 'Focaccia' },
    { value: 'desserts', label: 'Cookies and Cake' }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-serif font-medium mb-8">Our Products</h1>
          
          <div className="flex gap-2 pb-8 overflow-x-auto categories-scroll">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="whitespace-nowrap"
              >
                {category.label}
              </Button>
            ))}
          </div>
          
          <ProductGrid products={products} loading={loading} />
        </motion.div>
      </div>
    </Layout>
  );
};

export default Products;
