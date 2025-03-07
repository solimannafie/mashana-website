
import React from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Layout } from '@/components/ui-components';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
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

export default ContactPage;
