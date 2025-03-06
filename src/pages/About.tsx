
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-8">Our Story</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Welcome to our bakery, where passion for traditional baking methods meets modern culinary innovation.
            </p>
            
            <div className="mb-10">
              <img 
                src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086"
                alt="Our bakery team"
                className="w-full h-auto rounded-lg shadow-md mb-6"
              />
            </div>
            
            <h2 className="text-2xl font-serif font-medium mb-4">Our Beginnings</h2>
            <p className="mb-6">
              Our bakery was founded in 1995 by the Johnson family with a simple mission: to create authentic, handcrafted baked goods using traditional methods and the finest ingredients. What began as a small storefront with just three signature breads has grown into a beloved community institution offering a wide variety of artisanal breads, pastries, and cakes.
            </p>
            
            <h2 className="text-2xl font-serif font-medium mb-4">Our Philosophy</h2>
            <p className="mb-6">
              At the heart of our bakery is a commitment to quality and tradition. We believe that the best baked goods take time – there are no shortcuts when it comes to developing flavor and texture. Our sourdough starter has been nurtured for over 25 years, and our bakers arrive in the pre-dawn hours each day to ensure everything is freshly baked for our customers.
            </p>
            
            <p className="mb-6">
              We source local, organic ingredients whenever possible and have built strong relationships with farmers and suppliers who share our values. From the heritage wheat in our artisan breads to the seasonal fruits in our pastries, every ingredient is carefully selected.
            </p>
            
            <h2 className="text-2xl font-serif font-medium mb-4">Our Community</h2>
            <p className="mb-10">
              We're more than just a bakery – we're a gathering place for the community. Our café space was designed to be a welcoming environment where people can connect, share ideas, or simply enjoy a moment of peace with a coffee and pastry. We regularly host baking workshops, donate to local schools and food banks, and participate in community events.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <img 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a" 
                alt="Fresh pastries"
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff" 
                alt="Artisan bread"
                className="rounded-lg shadow-md"
              />
            </div>
            
            <h2 className="text-2xl font-serif font-medium mb-4">Visit Us</h2>
            <p>
              We invite you to visit our bakery, breathe in the irresistible aroma of fresh bread, and taste the difference that passion and tradition make. Whether you're a long-time customer or discovering us for the first time, we look forward to serving you.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default About;
