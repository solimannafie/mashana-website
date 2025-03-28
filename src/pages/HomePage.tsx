
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout, ProductGrid } from '@/components/ui-components';
import { Button } from '@/components/ui/button';
import { getPopularProducts } from '@/data/products';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  const popularProducts = getPopularProducts();

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

export default HomePage;
