
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const About = () => {
  return (
    <Layout className="pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">Our Story</h1>
          <p className="text-muted-foreground text-lg">
            Crafting artisanal baked goods with passion and tradition since 1998.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086" 
              alt="Baker with bread"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-serif font-medium mb-4">From humble beginnings</h2>
            <p className="text-muted-foreground mb-4">
              ArtisanBake began with a simple passion for creating authentic, handcrafted breads and pastries. What started as a small neighborhood bakery has grown into a beloved institution, known for quality and tradition.
            </p>
            <p className="text-muted-foreground">
              Our founder, Claire Thompson, learned the art of baking from her grandmother, who passed down recipes that had been in the family for generations. Today, we continue to honor those traditions while innovating and expanding our offerings.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-serif font-medium mb-6"
          >
            Our Philosophy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mb-4"
          >
            We believe that the best baked goods come from simple, quality ingredients, time-honored techniques, and a genuine passion for the craft. Every loaf of bread, every pastry, and every cake is made with attention to detail and a commitment to excellence.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground"
          >
            Our team of talented bakers rises before dawn each day to ensure that our products are fresh, delicious, and ready to delight our customers. We take pride in being a part of your daily routines and special celebrations.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg p-6 border text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Quality Ingredients</h3>
            <p className="text-muted-foreground">
              We source the finest organic flours, premium European butter, and local ingredients whenever possible.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-lg p-6 border text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Traditional Methods</h3>
            <p className="text-muted-foreground">
              We honor time-tested techniques like slow fermentation that develop complex flavors and textures.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-lg p-6 border text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Community Focus</h3>
            <p className="text-muted-foreground">
              We're proud to be a gathering place and to support local events, charities, and initiatives.
            </p>
          </motion.div>
        </div>
        
        <div className="bg-secondary rounded-lg p-8 md:p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-serif font-medium mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground mb-12"
            >
              Our talented bakers bring decades of experience and a passion for their craft to every creation.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e" 
                  alt="Claire Thompson - Founder" 
                  className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
                />
                <h3 className="font-medium">Claire Thompson</h3>
                <p className="text-sm text-muted-foreground">Founder & Head Baker</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Michael Chen - Pastry Chef" 
                  className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
                />
                <h3 className="font-medium">Michael Chen</h3>
                <p className="text-sm text-muted-foreground">Head Pastry Chef</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956" 
                  alt="Sophia Garcia - Bread Specialist" 
                  className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
                />
                <h3 className="font-medium">Sophia Garcia</h3>
                <p className="text-sm text-muted-foreground">Artisan Bread Specialist</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
