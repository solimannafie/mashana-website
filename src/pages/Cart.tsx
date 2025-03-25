import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CartItem from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import useCartStore from '@/stores/cartStore';
import { Separator } from '@/components/ui/separator';
import { Layout } from '@/components/layout/Layout';

const CartPage: React.FC = () => {
  const { items, clearCart } = useCartStore();
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  const handleClearCart = () => {
    clearCart();
  };

  if (items.length === 0) {
    return (
      <Layout className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24"
        >
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/products">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </motion.div>
      </Layout>
    );
  }

  return (
    <Layout className="container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="md:flex md:items-start md:justify-between">
          <div>
            <h1 className="text-2xl font-medium mb-4">Shopping Cart</h1>
            <p className="text-muted-foreground">
              You have {items.length} item(s) in your cart.
            </p>
          </div>
          
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={handleClearCart}
            className="mt-4 md:mt-0"
          >
            Clear Cart
          </Button>
        </div>

        <Separator className="my-6" />
        
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="text-xl font-medium">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <Link to="/checkout">
            <Button size="lg" className="mt-4 md:mt-0">
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </motion.div>
    </Layout>
  );
};

export default CartPage;
