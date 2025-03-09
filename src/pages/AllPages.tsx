
import { lazy } from "react";

// Import using lazy loading for better performance
const HomePage = lazy(() => import("./Index"));
const AboutPage = lazy(() => import("./About"));
const ProductsPage = lazy(() => import("./Products"));
const ProductDetailPage = lazy(() => import("./ProductDetailPage"));
const CartPage = lazy(() => import("./Cart"));
const ContactPage = lazy(() => import("./Contact"));
const FAQsPage = lazy(() => import("./FAQs"));
const NotFound = lazy(() => import("./NotFound"));

// Export all page components
export {
  HomePage,
  AboutPage,
  ProductsPage,
  ProductDetailPage,
  CartPage,
  ContactPage,
  FAQsPage,
  NotFound
};
