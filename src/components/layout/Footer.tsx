
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Smartphone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium">مشنة<span className="text-primary">عيش</span></h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Handcrafted baked goods made with quality ingredients and attention to detail. From our kitchen to your table.
            </p>
          </div>
          
          {/* Product Categories */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link to="/products?category=bread" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Country Bread Loafs</Link></li>
              <li><Link to="/products?category=brioche" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Brioche</Link></li>
              <li><Link to="/products?category=focaccia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Focaccia</Link></li>
              <li><Link to="/products?category=desserts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookies and Cake</Link></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="/faqs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQs</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom Section with Social Links */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} مشنة عيش. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Instagram Link */}
            <a 
              href="https://www.instagram.com/mashanet3eish_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors" 
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            
            {/* WhatsApp Link (Replacing Twitter) */}
            <a 
              href="https://wa.me/c/201111254358" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors" 
              aria-label="WhatsApp"
            >
              <Smartphone className="h-5 w-5" />
            </a>
            
            {/* Facebook Link */}
            <a 
              href="https://web.facebook.com/profile.php?id=100054446772497" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors" 
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
