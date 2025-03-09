
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProductType } from '@/types';

type CartItem = ProductType & {
  quantity: number;
};

interface CartStore {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
  
  // Actions
  addItem: (product: ProductType & { quantity?: number }) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  calculateTotals: () => void;
}

const SHIPPING_COST = 5.99;

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      itemCount: 0,
      subtotal: 0,
      shipping: 0,
      total: 0,
      
      addItem: (product) => {
        const { items } = get();
        const quantity = product.quantity || 1;
        
        const existingItem = items.find(item => item.id === product.id);
        
        if (existingItem) {
          // Update existing item
          const updatedItems = items.map(item => 
            item.id === product.id 
              ? { ...item, quantity: item.quantity + quantity } 
              : item
          );
          
          set({ items: updatedItems });
        } else {
          // Add new item
          const newItem = {
            ...product,
            quantity
          };
          
          set({ items: [...items, newItem] });
        }
        
        get().calculateTotals();
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        
        const { items } = get();
        const updatedItems = items.map(item => 
          item.id === id ? { ...item, quantity } : item
        );
        
        set({ items: updatedItems });
        get().calculateTotals();
      },
      
      removeItem: (id) => {
        const { items } = get();
        const updatedItems = items.filter(item => item.id !== id);
        
        set({ items: updatedItems });
        get().calculateTotals();
      },
      
      clearCart: () => {
        set({ items: [] });
        get().calculateTotals();
      },
      
      calculateTotals: () => {
        const { items } = get();
        
        const itemCount = items.reduce((total, item) => total + item.quantity, 0);
        const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
        const shipping = items.length > 0 ? SHIPPING_COST : 0;
        const total = subtotal + shipping;
        
        set({ itemCount, subtotal, shipping, total });
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);

export default useCartStore;
