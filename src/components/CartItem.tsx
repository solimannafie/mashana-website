
import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cartStore';
import { CartItemType } from '@/types';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
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

export default CartItem;
