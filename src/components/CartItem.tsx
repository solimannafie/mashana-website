
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cartStore';
import { CartItemType } from '@/types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateItemQuantity, removeItem } = useCartStore();
  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="flex items-start space-x-4 py-4 border-b last:border-0 animate-fade-in">
      <div className="h-20 w-20 rounded-md overflow-hidden bg-secondary/30 flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <Link 
            to={`/products/${item.id}`}
            className="font-medium hover:text-primary transition-colors text-base"
          >
            {item.name}
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 text-muted-foreground hover:text-destructive -mt-1 -mr-1"
            onClick={() => removeItem(item.id)}
            aria-label="Remove item"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={() => updateItemQuantity(item.id, Math.max(1, item.quantity - 1))}
              disabled={item.quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="w-8 text-center text-sm">{item.quantity}</span>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <span className="font-medium">${subtotal}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
