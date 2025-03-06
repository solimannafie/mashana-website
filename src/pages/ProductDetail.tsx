
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Minus, Plus, ShoppingCart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { getProductById, getProductsByCategory } from '@/data/products';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import ProductGrid from '@/components/ProductGrid';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(id ? getProductById(id) : null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addItem } = useCartStore();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!product) {
      if (id) {
        const foundProduct = getProductById(id);
        if (foundProduct) {
          setProduct(foundProduct);
          // Get related products
          const related = getProductsByCategory(foundProduct.category)
            .filter(p => p.id !== id)
            .slice(0, 4);
          setRelatedProducts(related);
        } else {
          // Product not found, redirect to products page
          navigate('/products', { replace: true });
        }
      } else {
        navigate('/products', { replace: true });
      }
    }
  }, [id, navigate, product]);

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addItem(product);
      }
      toast.success(`Added ${quantity} ${quantity > 1 ? 'items' : 'item'} to cart`);
    }
  };

  if (!product) {
    return (
      <Layout className="pt-32">
        <div className="container mx-auto px-4 md:px-6 py-12 text-center">
          <h1 className="text-2xl font-medium mb-4">Loading product...</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout className="pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/products" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-secondary/30 rounded-lg overflow-hidden aspect-square"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary mb-2 block">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">{product.name}</h1>
            <p className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</p>
            
            <p className="text-muted-foreground mb-8">
              {product.description}
            </p>
            
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-none"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                
                <span className="w-12 text-center">{quantity}</span>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-none"
                  onClick={() => handleQuantityChange(1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="flex-1 h-10"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
            
            <div className="space-y-4 border-t pt-6">
              <div className="flex">
                <span className="text-sm font-medium w-32">Freshness:</span>
                <span className="text-sm text-muted-foreground">Baked fresh daily</span>
              </div>
              <div className="flex">
                <span className="text-sm font-medium w-32">Storage:</span>
                <span className="text-sm text-muted-foreground">Best consumed within 2-3 days</span>
              </div>
              <div className="flex">
                <span className="text-sm font-medium w-32">Category:</span>
                <span className="text-sm text-muted-foreground">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-medium mb-8">You might also like</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
