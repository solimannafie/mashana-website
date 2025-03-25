
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import useCartStore from '@/stores/cartStore';
import { ShoppingCart, Trash2, ArrowRight, MapPin, Phone } from 'lucide-react';
import CartItem from '@/components/CartItem';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const Cart = () => {
  const { items, clearCart } = useCartStore();
  const navigate = useNavigate();
  
  // Customer information state
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('pickup');
  const [address, setAddress] = useState('');
  const [mapsLink, setMapsLink] = useState('');

  // Form validation
  const [errors, setErrors] = useState({
    name: false,
    phoneNumber: false,
    address: false,
  });

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = deliveryOption === 'delivery' && items.length > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  const validateForm = () => {
    const newErrors = {
      name: name.trim() === '',
      phoneNumber: phoneNumber.trim() === '',
      address: deliveryOption === 'delivery' && address.trim() === '',
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleCheckout = () => {
    if (!validateForm()) {
      toast.error("Please fill all required fields");
      return;
    }
    
    toast.success("Thank you for your order! We'll contact you shortly.");
    clearCart();
    navigate('/');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-serif font-medium mb-8">Your Cart</h1>
          
          {items.length === 0 ? (
            <div className="text-center py-16 max-w-md mx-auto">
              <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button asChild size="lg">
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button 
                    variant="outline" 
                    className="text-destructive"
                    onClick={() => {
                      clearCart();
                      toast.info("Cart has been cleared");
                    }}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear Cart
                  </Button>
                </div>
                
                {/* Customer Information Form */}
                <div className="mt-12 p-6 border rounded-lg">
                  <h2 className="text-xl font-medium mb-6">Customer Information</h2>
                  
                  <div className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <Label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">Name is required</p>
                      )}
                    </div>
                    
                    {/* Phone Number Field */}
                    <div>
                      <Label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number *
                      </Label>
                      <div className="flex">
                        <Input
                          id="phone"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="Your phone number"
                          className={errors.phoneNumber ? "border-destructive" : ""}
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="text-destructive text-sm mt-1">Phone number is required</p>
                      )}
                    </div>
                    
                    {/* Delivery Options */}
                    <div className="mt-6">
                      <Label className="block text-sm font-medium mb-3">
                        Delivery Options
                      </Label>
                      <RadioGroup 
                        value={deliveryOption} 
                        onValueChange={setDeliveryOption}
                        className="flex flex-col space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="pickup" id="pickup" />
                          <Label htmlFor="pickup">Pickup</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="delivery" id="delivery" />
                          <Label htmlFor="delivery">Delivery</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    {/* Pickup Location */}
                    {deliveryOption === 'pickup' && (
                      <div className="mt-4 p-4 bg-secondary/20 rounded-lg">
                        <p className="text-sm font-medium mb-2">Pickup Location:</p>
                        <a 
                          href="https://maps.app.goo.gl/6yvzFQwjBEvefX8u9" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary flex items-center hover:underline"
                        >
                          <MapPin className="h-4 w-4 mr-1" />
                          View on Google Maps
                        </a>
                      </div>
                    )}
                    
                    {/* Delivery Address */}
                    {deliveryOption === 'delivery' && (
                      <div className="space-y-4 mt-4">
                        <div>
                          <Label htmlFor="address" className="block text-sm font-medium mb-1">
                            Delivery Address *
                          </Label>
                          <Textarea
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter your full address"
                            className={errors.address ? "border-destructive" : ""}
                          />
                          {errors.address && (
                            <p className="text-destructive text-sm mt-1">Address is required</p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="maps-link" className="block text-sm font-medium mb-1">
                            Google Maps Link
                          </Label>
                          <Input
                            id="maps-link"
                            value={mapsLink}
                            onChange={(e) => setMapsLink(e.target.value)}
                            placeholder="Paste your Google Maps location link"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-secondary/10 rounded-lg p-6 sticky top-24">
                  <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between font-medium">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg" onClick={handleCheckout}>
                    Place Order
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <div className="mt-6 text-center">
                    <Button asChild variant="link">
                      <Link to="/products">Continue Shopping</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Cart;
