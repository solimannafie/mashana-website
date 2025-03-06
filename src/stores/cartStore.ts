
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItemType, ProductType } from '@/types';

interface CartStore {
  items: CartItemType[];
  addItem: (product: ProductType) => void;
  removeItem: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.id === product.id);
        
        if (existingItem) {
          return set({
            items: currentItems.map(item => 
              item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            )
          });
        }
        
        return set({
          items: [...currentItems, { ...product, quantity: 1 }]
        });
      },
      
      removeItem: (id) => {
        set({
          items: get().items.filter(item => item.id !== id)
        });
      },
      
      updateItemQuantity: (id, quantity) => {
        set({
          items: get().items.map(item => 
            item.id === id ? { ...item, quantity } : item
          )
        });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getTotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity, 
          0
        );
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);
