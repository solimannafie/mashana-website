
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import { getProductsByCategory } from '@/data/products';
import { CategoryType } from '@/types';
import { cn } from '@/lib/utils';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as CategoryType || 'all';
  const [category, setCategory] = useState<CategoryType>(categoryParam);
  const [products, setProducts] = useState(getProductsByCategory(category));
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'bread', name: 'Bread' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'cakes', name: 'Cakes' },
    { id: 'specialty', name: 'Specialty' },
  ];

  useEffect(() => {
    // Simulate loading state for better UX
    setLoading(true);
    const timer = setTimeout(() => {
      setProducts(getProductsByCategory(category));
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [category]);

  useEffect(() => {
    // Update URL when category changes
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
    
    // Scroll to top when changing categories
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category, searchParams, setSearchParams]);

  const handleCategoryChange = (newCategory: CategoryType) => {
    setCategory(newCategory);
  };

  return (
    <Layout className="pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">Our Products</h1>
          <p className="text-muted-foreground max-w-3xl">
            Browse our selection of freshly baked goods, made daily with premium ingredients and traditional methods.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={category === cat.id ? "default" : "outline"}
                className={cn(
                  "whitespace-nowrap",
                  category === cat.id ? "" : "text-muted-foreground"
                )}
                onClick={() => handleCategoryChange(cat.id as CategoryType)}
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products */}
        <ProductGrid products={products} loading={loading} />
      </div>
    </Layout>
  );
};

export default Products;
