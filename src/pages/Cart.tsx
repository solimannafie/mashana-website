
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import CartItem from '@/components/CartItem';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const { items, clearCart, getTotal } = useCartStore();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const total = getTotal();
  const hasItems = items.length > 0;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      clearCart();
      toast.success('Order placed successfully!');
      navigate('/');
      setIsCheckingOut(false);
    }, 1500);
  };

  return (
    <Layout className="pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-medium flex items-center gap-3 mb-4">
            <ShoppingCart className="h-8 w-8" /> Your Cart
          </h1>
          <p className="text-muted-foreground">
            {hasItems 
              ? `You have ${items.length} ${items.length === 1 ? 'item' : 'items'} in your cart.`
              : 'Your cart is empty.'
            }
          </p>
        </motion.div>

        {hasItems ? (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-card rounded-lg border divide-y">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              
              <div className="mt-6 flex justify-between">
                <Button 
                  variant="outline" 
                  asChild
                >
                  <Link to="/products">Continue Shopping</Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => {
                    clearCart();
                    toast.success('Cart cleared');
                  }}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
            
            <div>
              <div className="bg-card rounded-lg border p-6 sticky top-24">
                <h3 className="text-lg font-medium mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${(total * 0.08).toFixed(2)}</span>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${(total + 5 + total * 0.08).toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full"
                  size="lg"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? "Processing..." : "Checkout"}
                  {!isCheckingOut && <ChevronRight className="ml-1 h-4 w-4" />}
                </Button>
                
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  By checking out, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 max-w-md mx-auto">
            <div className="bg-secondary rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button asChild size="lg">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
