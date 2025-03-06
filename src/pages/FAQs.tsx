
import React from 'react';
import Layout from '@/components/layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-medium mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-lg">
              Find answers to commonly asked questions about our products and services.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="item-1" className="border rounded-lg p-1">
              <AccordionTrigger className="text-lg font-medium px-4">
                What are your opening hours?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                We're open from 7:00 AM to 7:00 PM Monday through Friday, and 8:00 AM to 6:00 PM on weekends.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border rounded-lg p-1">
              <AccordionTrigger className="text-lg font-medium px-4">
                Do you offer delivery?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                Yes, we offer delivery within a 10-mile radius of our bakery for orders over $25. Please place your order at least 24 hours in advance.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border rounded-lg p-1">
              <AccordionTrigger className="text-lg font-medium px-4">
                Are your products suitable for people with allergies?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                We clearly label all our products with allergen information. For specific dietary requirements, please contact us directly for more information.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border rounded-lg p-1">
              <AccordionTrigger className="text-lg font-medium px-4">
                How do I place a special order?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                For special orders such as custom cakes or large quantities, please contact us at least 48 hours in advance. You can call us or use the contact form on our website.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border rounded-lg p-1">
              <AccordionTrigger className="text-lg font-medium px-4">
                Do you cater for events?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                Yes, we offer catering services for events of all sizes. We can create custom menus tailored to your specific needs. Please contact us at least one week in advance for catering inquiries.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border rounded-lg p-1">
              <AccordionTrigger className="text-lg font-medium px-4">
                Are your ingredients organic?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                We use organic ingredients whenever possible and source locally when available. We prioritize high-quality ingredients for all our products.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border rounded-lg p-1">
              <AccordionTrigger className="text-lg font-medium px-4">
                Do you have gluten-free options?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                Yes, we offer a selection of gluten-free products. However, please note that they are prepared in the same kitchen as our regular products, so there may be traces of gluten.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8" className="border rounded-lg p-1">
              <AccordionTrigger className="text-lg font-medium px-4">
                Can I freeze your bread?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-muted-foreground">
                Yes, our bread freezes well. For best results, slice the bread before freezing and thaw at room temperature or toast from frozen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Layout>
  );
};

export default FAQs;
