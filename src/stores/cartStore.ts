
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItemType, ProductType } from '@/types';

interface CartStore {
  items: CartItemType[];
  addItem: (product: ProductType & { quantity?: number }) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      
      addItem: (product) => set((state) => {
        const quantity = product.quantity || 1;
        const existingItem = state.items.find(item => item.id === product.id);
        
        if (existingItem) {
          return {
            items: state.items.map(item => 
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          };
        }
        
        return {
          items: [...state.items, { ...product, quantity }]
        };
      }),
      
      removeItem: (productId) => set((state) => ({
        items: state.items.filter(item => item.id !== productId)
      })),
      
      updateQuantity: (productId, quantity) => set((state) => ({
        items: state.items.map(item =>
          item.id === productId
            ? { ...item, quantity }
            : item
        )
      })),
      
      clearCart: () => set({ items: [] })
    }),
    {
      name: 'cart-storage',
    }
  )
);
