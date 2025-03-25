
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Layout, ProductGrid, CartItem } from '@/components/ui-components';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CategoryType, ProductType } from '@/types';
import { getProductsByCategory, getPopularProducts, getProductById } from '@/data/products';
import cartStore from '@/stores/cartStore';
import { ArrowRight, ShoppingCart, Trash2, MapPin, Phone, Mail, Clock, Minus, Plus } from 'lucide-react';

// Home Page
export const HomePage = () => {
  const popularProducts = getPopularProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1523294587484-bae6cc870010?q=80&w=2064)', 
            filter: 'brightness(0.7)'
          }}
        />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block bg-primary/90 text-primary-foreground px-4 py-1.5 text-sm font-medium rounded-full mb-4">
                Handcrafted with passion
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-white mb-6">
                مشنة عيش - Artisanal Baked Goods
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Experience the difference of freshly baked goods made with traditional methods and premium ingredients.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="px-8">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white">
                <Link to="/about">Our Story</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-sm font-medium text-primary mb-2 block">FEATURED</span>
              <h2 className="text-3xl font-serif font-medium">Most Popular</h2>
            </div>
            <Button asChild variant="ghost" className="group">
              <Link to="/products" className="flex items-center">
                View All 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <ProductGrid products={popularProducts} />
        </div>
      </section>

      {/* About / Story Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-sm font-medium text-primary mb-2 block">OUR STORY</span>
              <h2 className="text-3xl font-serif font-medium mb-6">Baked With Tradition & Love</h2>
              <p className="text-muted-foreground mb-6">
                For over 25 years, we've been crafting artisanal baked goods using time-honored techniques and the finest ingredients. Our passion for quality and tradition is in every bite.
              </p>
              <p className="text-muted-foreground mb-8">
                Each day before dawn, our bakers begin their craft, ensuring that when our doors open, our shelves are filled with the freshest breads, pastries, and cakes.
              </p>
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1556711905-b3475aca4cdd" 
                alt="Baker kneading dough" 
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-10 text-center max-w-2xl mx-auto">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-primary-foreground/10 rounded-lg p-6 border border-primary-foreground/20">
              <h3 className="font-medium text-xl mb-2">What are your opening hours?</h3>
              <p className="text-primary-foreground/80">We're open from 7:00 AM to 7:00 PM Monday through Friday, and 8:00 AM to 6:00 PM on weekends.</p>
            </div>
            
            <div className="bg-primary-foreground/10 rounded-lg p-6 border border-primary-foreground/20">
              <h3 className="font-medium text-xl mb-2">Do you offer delivery?</h3>
              <p className="text-primary-foreground/80">Yes, we offer delivery within a 10-mile radius of our bakery for orders over $25. Please place your order at least 24 hours in advance.</p>
            </div>
            
            <div className="bg-primary-foreground/10 rounded-lg p-6 border border-primary-foreground/20">
              <h3 className="font-medium text-xl mb-2">Are your products suitable for people with allergies?</h3>
              <p className="text-primary-foreground/80">We clearly label all our products with allergen information. For specific dietary requirements, please contact us directly for more information.</p>
            </div>
            
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link to="/faqs">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Products Page
export const ProductsPage = () => {
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

// Product Detail Page
export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      if (id) {
        const productData = getProductById(id);
        if (productData) {
          setProduct(productData);
        } else {
          navigate('/not-found');
        }
      }
      setLoading(false);
    }, 500);
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (product) {
      addItem({
        ...product,
        quantity: quantity
      });
      toast.success(`${product.name} added to cart!`);
    }
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : product ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="bg-secondary/30 rounded-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-medium mb-2">{product.name}</h1>
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-medium">${product.price.toFixed(2)}</span>
                </div>
                
                <div className="mb-8 prose prose-sm">
                  <p className="text-muted-foreground text-lg">{product.description}</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium">Quantity</span>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={decrementQuantity}
                        className="h-9 w-9 rounded-r-none"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <div className="h-9 px-4 flex items-center justify-center border-y">
                        {quantity}
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={incrementQuantity}
                        className="h-9 w-9 rounded-l-none"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="sm:flex-1" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                  <Button asChild variant="outline" size="lg" className="sm:flex-1">
                    <Link to="/products">Back to Products</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium mb-4">Product not found</h2>
            <p className="text-muted-foreground mb-8">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

// Cart Page
export const CartPage = () => {
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

// About Page
export const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-serif font-medium mb-12 text-center">Our Story</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0" 
                alt="Bakery interior" 
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-medium mb-6">A Tradition of Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 1998, our bakery began as a small family operation with a simple mission: to create artisanal baked goods using traditional methods and the finest ingredients.
              </p>
              <p className="text-lg text-muted-foreground">
                What started as a passion project has grown into a beloved local institution, but our commitment to quality and craftsmanship remains unchanged.
              </p>
            </div>
          </div>
          
          <div className="bg-secondary/20 py-16 px-8 rounded-lg mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-medium mb-6">Our Philosophy</h2>
              <p className="text-xl italic text-muted-foreground">
                "We believe that great bread takes time. There are no shortcuts to quality, which is why we continue to use slow fermentation processes and traditional baking techniques."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-background p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-medium mb-4">Quality Ingredients</h3>
              <p className="text-muted-foreground">
                We source the finest organic flour, local dairy, and seasonal ingredients to ensure each product meets our high standards.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-medium mb-4">Traditional Methods</h3>
              <p className="text-muted-foreground">
                Our bakers use time-honored techniques, allowing doughs to develop naturally for superior flavor and texture.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-medium mb-4">Community Focus</h3>
              <p className="text-muted-foreground">
                We're proud to be part of the local community, supporting local farmers and participating in neighborhood events.
              </p>
            </div>
          </div>
          
          <div className="text-center mb-20">
            <h2 className="text-3xl font-serif font-medium mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1590286162261-2edf8c2a3ae5" 
                  alt="Baker portrait" 
                  className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-medium">Maria Johnson</h3>
                <p className="text-muted-foreground">Head Baker</p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548" 
                  alt="Baker portrait" 
                  className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-medium">David Chen</h3>
                <p className="text-muted-foreground">Pastry Chef</p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36" 
                  alt="Baker portrait" 
                  className="rounded-full w-48 h-48 object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-medium">James Wilson</h3>
                <p className="text-muted-foreground">Owner</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary text-primary-foreground p-16 rounded-lg text-center">
            <h2 className="text-3xl font-serif font-medium mb-6">Visit Us Today</h2>
            <p className="text-xl mb-8">
              Come experience the difference of truly artisanal baked goods.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

// Contact Page
export const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-serif font-medium mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-8">
                We'd love to hear from you! Whether you have a question about our products, want to place a special order, or are interested in our catering services, please get in touch.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Visit Us</h3>
                    <p className="text-muted-foreground">123 Bakery Street<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-muted-foreground">hello@artisanbakery.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 7am - 7pm<br />
                      Saturday: 8am - 6pm<br />
                      Sunday: 8am - 4pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" name="name" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" name="subject" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
                
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden h-96 bg-secondary/20">
            {/* This would be a map in a real application */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">Map would be displayed here</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

// FAQs Page
export const FAQsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-serif font-medium mb-12 text-center">Frequently Asked Questions</h1>
          
          <div className="max-w-3xl mx-auto mb-16">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">What are your opening hours?</AccordionTrigger>
                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                  We're open from 7:00 AM to 7:00 PM Monday through Friday, and 8:00 AM to 6:00 PM on weekends.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">Do you offer delivery?</AccordionTrigger>
                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                  Yes, we offer delivery within a 10-mile radius of our bakery for orders over $25. Please place your order at least 24 hours in advance.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">Can I order custom items?</AccordionTrigger>
                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                  Absolutely! We take custom orders for special occasions. Please contact us at least 48 hours in advance for custom cakes and 24 hours for other baked goods.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">Do you cater events?</AccordionTrigger>
                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                  Yes, we offer catering services for events of all sizes. Please contact us for a custom quote and menu options.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">Are your products suitable for people with allergies?</AccordionTrigger>
                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                  We clearly label all our products with allergen information. For specific dietary requirements, please contact us directly for more information.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">Can I reserve items for pickup?</AccordionTrigger>
                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                  Yes, you can reserve items for pickup. Please call us or use our online ordering system to place your reservation.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">Do you have gluten-free options?</AccordionTrigger>
                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                  We offer a limited selection of gluten-free items. These are prepared in a kitchen that also handles gluten, so they may not be suitable for people with severe gluten allergies or celiac disease.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">How long do your products stay fresh?</AccordionTrigger>
                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                  Our bread is best consumed within 2-3 days of purchase. Pastries are best enjoyed within 1-2 days. For optimal freshness, store bread in a paper bag at room temperature and pastries in an airtight container.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-9" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">What payment methods do you accept?</AccordionTrigger>
                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                  We accept cash, all major credit cards, and mobile payment methods like Apple Pay and Google Pay.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-10" className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium py-4">Do you offer wholesale pricing?</AccordionTrigger>
                <AccordionContent className="pb-4 pt-2 text-muted-foreground">
                  Yes, we offer wholesale pricing for restaurants, cafes, and other businesses. Please contact us directly to discuss wholesale options.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-medium mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-8">
              If you couldn't find the answer to your question, please don't hesitate to contact us directly.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

// Not Found Page
export const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-24 flex flex-col items-center">
        <h1 className="text-6xl font-serif font-medium mb-6">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you are looking for does not exist.
        </p>
        <Button asChild>
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </Layout>
  );
};
