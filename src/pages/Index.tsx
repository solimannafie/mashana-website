
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import { getPopularProducts, getNewProducts } from '@/data/products';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const popularProducts = getPopularProducts();
  const newProducts = getNewProducts();

  // Page transition effect
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
                Artisanal Baked Goods For Every Occasion
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

      {/* New Arrivals */}
      {newProducts.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="text-sm font-medium text-primary mb-2 block">FRESH FROM THE OVEN</span>
                <h2 className="text-3xl font-serif font-medium">New Arrivals</h2>
              </div>
              <Button asChild variant="ghost" className="group">
                <Link to="/products" className="flex items-center">
                  View All 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <ProductGrid products={newProducts} />
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 max-w-2xl mx-auto">
            Join our community of bread lovers
          </h2>
          <p className="mb-8 text-primary-foreground/80 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive recipes, special offers, and early access to seasonal specialties.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
            }}
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-md focus:outline-none bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 flex-1"
              required
            />
            <Button 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              type="submit"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
