
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Layout, ProductGrid } from '@/components/ui-components';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProductById, getProductsByCategory } from '@/data/products';
import { useCartStore } from '@/stores/cartStore';
import { ProductType } from '@/types';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([]);
  const { addItem } = useCartStore();

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (id) {
        const foundProduct = getProductById(id);
        setProduct(foundProduct || null);
        
        if (foundProduct) {
          // Get related products from same category
          const related = getProductsByCategory(foundProduct.category)
            .filter(p => p.id !== foundProduct.id)
            .slice(0, 4);
          setRelatedProducts(related);
        }
      }
      setLoading(false);
    }, 500);
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addItem({ ...product, quantity });
      toast.success(`Added ${quantity} × ${product.name} to cart`);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-secondary rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="aspect-square bg-secondary rounded-lg"></div>
              <div className="space-y-6">
                <div className="h-8 bg-secondary rounded w-3/4"></div>
                <div className="h-4 bg-secondary rounded w-full"></div>
                <div className="h-4 bg-secondary rounded w-full"></div>
                <div className="h-4 bg-secondary rounded w-2/3"></div>
                <div className="h-10 bg-secondary rounded w-1/3 mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-medium mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/products')}>View All Products</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <Button 
          variant="ghost" 
          className="mb-8 pl-0" 
          onClick={handleGoBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-lg overflow-hidden bg-secondary/10">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-cover"
              />
              
              {product.new && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  New
                </Badge>
              )}
              
              {product.popular && (
                <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                  Popular
                </Badge>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">{product.name}</h1>
            
            <div className="mb-6">
              <span className="text-2xl font-medium">${product.price.toFixed(2)}</span>
            </div>
            
            <p className="text-muted-foreground mb-8">{product.description}</p>
            
            <div className="flex items-center mb-8">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="mx-4 w-8 text-center">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= 10}
              >
                +
              </Button>
            </div>
            
            <Button 
              size="lg" 
              onClick={handleAddToCart}
              className="w-full sm:w-auto"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-sm font-medium mb-2">Category</h3>
              <p className="text-muted-foreground capitalize">{product.category}</p>
            </div>
          </motion.div>
        </div>
        
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-serif font-medium mb-8">You May Also Like</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
