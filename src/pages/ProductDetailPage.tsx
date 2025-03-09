
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { getProductById } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import useCartStore from '@/stores/cartStore';
import { ProductType } from '@/types';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const addToCart = useCartStore(state => state.addItem);
  
  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchedProduct = getProductById(id);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
      } else {
        navigate('/products', { replace: true });
        toast({
          title: "Product not found",
          description: "The product you're looking for doesn't exist.",
          variant: "destructive"
        });
      }
      setLoading(false);
    }
  }, [id, navigate, toast]);

  const handleAddToCart = () => {
    if (product) {
      // Make sure we pass the complete product object including all required properties
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        category: product.category,
        quantity
      });
      
      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name} added to your cart.`
      });
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="flex justify-center items-center h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) return null;

  return (
    <Layout>
      <div className="container py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto aspect-square object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-serif font-medium mb-2">{product.name}</h1>
            <p className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</p>
            
            <div className="text-muted-foreground text-lg mb-8">
              {product.description}
            </div>
            
            <div className="mb-8">
              <label className="font-medium mr-4">Quantity:</label>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  className="h-9 w-9 rounded-r-none"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <div className="flex items-center justify-center border-y border-input h-9 w-12">
                  {quantity}
                </div>
                <Button 
                  variant="outline" 
                  className="h-9 w-9 rounded-l-none"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="flex-1" 
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/products')}
              >
                Back to Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
