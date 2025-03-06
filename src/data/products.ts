
import { ProductType } from '@/types';

export const products: ProductType[] = [
  {
    id: '1',
    name: 'Sourdough Bread',
    description: 'Artisanal sourdough bread with a crispy crust and soft interior. Made with our 100-year-old starter.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec',
    category: 'bread',
    popular: true
  },
  {
    id: '2',
    name: 'Baguette',
    description: 'Traditional French baguette with a crispy crust and light, airy interior. Perfect for sandwiches or as a side.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1568471173242-461f0a730452',
    category: 'bread'
  },
  {
    id: '3',
    name: 'Croissant',
    description: 'Buttery, flaky French pastry that melts in your mouth. Made with premium European butter.',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
    category: 'pastries',
    popular: true
  },
  {
    id: '4',
    name: 'Pain au Chocolat',
    description: 'Chocolate-filled croissant pastry with a buttery, flaky texture and rich chocolate center.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1623483857548-d1b04c56ddc2',
    category: 'pastries'
  },
  {
    id: '5',
    name: 'Chocolate Cake',
    description: 'Decadent triple-layer chocolate cake with rich ganache frosting and chocolate shavings.',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62',
    category: 'cakes',
    popular: true
  },
  {
    id: '6',
    name: 'Cinnamon Roll',
    description: 'Soft, fluffy roll filled with cinnamon sugar and topped with cream cheese frosting.',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812',
    category: 'pastries'
  },
  {
    id: '7',
    name: 'Multigrain Bread',
    description: 'Hearty bread made with seven different grains and seeds for nutritional value and flavor.',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    category: 'bread'
  },
  {
    id: '8',
    name: 'French Macarons (Box of 6)',
    description: 'Delicate almond meringue cookies with various ganache fillings. A colorful assortment of flavors.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557',
    category: 'pastries',
    new: true
  },
  {
    id: '9',
    name: 'Vanilla Bean Cheesecake',
    description: 'Creamy cheesecake infused with real vanilla beans on a graham cracker crust.',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad',
    category: 'cakes'
  },
  {
    id: '10',
    name: 'Artisan Focaccia',
    description: 'Italian flatbread topped with rosemary, sea salt, and extra virgin olive oil.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df',
    category: 'bread',
    new: true
  },
  {
    id: '11',
    name: 'Fruit Tart',
    description: 'Buttery shortbread crust filled with vanilla custard and topped with fresh seasonal fruits.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1464195244916-405fa0a81871',
    category: 'cakes'
  },
  {
    id: '12',
    name: 'Chocolate Chip Cookies',
    description: 'Classic cookies made with premium chocolate chips and a hint of sea salt.',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
    category: 'pastries',
    popular: true
  },
  {
    id: '13',
    name: 'Rye Bread',
    description: 'Traditional rye bread with caraway seeds. Perfect for deli sandwiches or toasting.',
    price: 6.49,
    image: 'https://images.unsplash.com/photo-1486887396153-fa416526c108',
    category: 'bread'
  },
  {
    id: '14',
    name: 'Red Velvet Cake',
    description: 'Moist red velvet cake layers with cream cheese frosting. A southern classic.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324626f4c',
    category: 'cakes',
    new: true
  },
  {
    id: '15',
    name: 'Blueberry Muffin',
    description: 'Light, fluffy muffin filled with juicy blueberries and topped with a streusel crumb.',
    price: 3.29,
    image: 'https://images.unsplash.com/photo-1599411226587-6bc02afd55ee',
    category: 'pastries'
  },
  {
    id: '16',
    name: 'Gluten-Free Bread',
    description: 'Soft sandwich bread made with a special blend of gluten-free flours.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2a',
    category: 'specialty'
  }
];

export const getProductById = (id: string): ProductType | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string = 'all'): ProductType[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getPopularProducts = (): ProductType[] => {
  return products.filter(product => product.popular);
};

export const getNewProducts = (): ProductType[] => {
  return products.filter(product => product.new);
};
