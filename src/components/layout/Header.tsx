
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Header: React.FC = () => {
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

export default Header;
