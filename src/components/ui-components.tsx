
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, Menu, X, ArrowRight, ArrowLeft, 
  MapPin, Phone, Mail, Clock, Minus, Plus, Trash2,
  Instagram, Facebook, Smartphone 
} from 'lucide-react';
import useCartStore from '@/stores/cartStore';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ProductType, CartItemType } from '@/types';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

// ===== Header Component =====
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCartStore();
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        isScrolled ? 'blur-backdrop border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="relative animate-fade-in"
          onClick={() => setIsMenuOpen(false)}
        >
          <img 
            src="/lovable-uploads/9e142c0f-13d8-4600-a857-ebff59bff6cb.png" 
            alt="مشنة عيش" 
            className="h-10 md:h-12" 
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks className="text-sm tracking-wide" />
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative" aria-label="Shopping Cart">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs font-medium rounded-full"
              >
                {totalItems}
              </Badge>
            )}
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/98 backdrop-blur-lg z-40 pt-20 px-6 transition-transform duration-300 ease-in-out transform md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 items-center text-center">
          <NavLinks 
            className="text-lg" 
            onClick={() => setIsMenuOpen(false)}
          />
        </nav>
      </div>
    </header>
  );
};

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ className, onClick }) => {
  return (
    <>
      <Link 
        to="/" 
        className={cn("hover-slide transition-colors hover:text-primary", className)} 
        onClick={onClick}
      >
        Home
      </Link>
      <Link 
        to="/products" 
        className={cn("hover-slide transition-colors hover:text-primary", className)} 
        onClick={onClick}
      >
        Products
      </Link>
      <Link 
        to="/about" 
        className={cn("hover-slide transition-colors hover:text-primary", className)} 
        onClick={onClick}
      >
        About
      </Link>
      <Link 
        to="/contact" 
        className={cn("hover-slide transition-colors hover:text-primary", className)} 
        onClick={onClick}
      >
        Contact
      </Link>
    </>
  );
};

// ===== Footer Component =====
export const Footer = () => {
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
            
            {/* WhatsApp Link */}
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

// ===== Layout Component =====
export const Layout = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={cn("flex-1 pt-20", className)}>
        {children}
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
};

// ===== Product Components =====
export const ProductCard = ({ product, index }: { product: ProductType; index: number }) => {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem(product);
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg border bg-card"
    >
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-secondary/30">
          <img 
            src={product.image} 
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {product.new && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            New
          </Badge>
        )}
        
        <div className="p-4">
          <h3 className="font-medium text-foreground line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mt-3">
            <div>
              <span className="font-medium">${product.price.toFixed(2)}</span>
            </div>
            
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const ProductGrid = ({ 
  products, 
  loading = false,
  className
}: {
  products: ProductType[];
  loading?: boolean;
  className?: string;
}) => {
  if (loading) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-lg border bg-card overflow-hidden">
            <div className="aspect-square bg-secondary animate-pulse" />
            <div className="p-4 space-y-3">
              <div className="h-5 bg-secondary rounded animate-pulse w-2/3" />
              <div className="h-4 bg-secondary rounded animate-pulse w-full" />
              <div className="h-4 bg-secondary rounded animate-pulse w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <h3 className="text-lg font-medium">No products found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your filters or check back later.</p>
      </motion.div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
};

// ===== Cart Components =====
export const CartItem = ({ item }: { item: CartItemType }) => {
  const { updateQuantity, removeItem } = useCartStore();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border rounded-lg">
      <div className="sm:w-24 h-24 rounded overflow-hidden bg-secondary/20">
        <Link to={`/products/${item.id}`}>
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      
      <div className="flex-1">
        <Link to={`/products/${item.id}`} className="hover:underline">
          <h3 className="font-medium">{item.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center mt-2 sm:mt-0">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8"
          onClick={() => handleQuantityChange(item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          <Minus className="h-3 w-3" />
        </Button>
        
        <span className="w-10 text-center">{item.quantity}</span>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8"
          onClick={() => handleQuantityChange(item.quantity + 1)}
          disabled={item.quantity >= 10}
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>
      
      <div className="text-right min-w-[80px] mt-2 sm:mt-0">
        <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 px-2 text-destructive hover:text-destructive mt-1"
          onClick={handleRemove}
        >
          <Trash2 className="h-4 w-4 mr-1" />
          Remove
        </Button>
      </div>
    </div>
  );
};
