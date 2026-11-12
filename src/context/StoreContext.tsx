import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, Review, PRODUCTS, REVIEWS, STORE_PHONE_NUMBER, STORE_PHONE_DISPLAY } from '../data/storeData';

export type Currency = 'USD';
export type PageType = 'home' | 'shop' | 'product' | 'reviews' | 'lookbook';

export interface CartItem {
  id: string; // unique item id (product id + colorway)
  product: Product;
  colorway?: string;
  quantity: number;
}

interface StoreContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (priceUSD: number, priceNGN?: number) => string;
  activePage: PageType;
  setActivePage: (p: PageType) => void;
  selectedProductId: string;
  setSelectedProductId: (id: string) => void;
  navigateToProduct: (id: string) => void;
  cart: CartItem[];
  addToCart: (product: Product, colorway?: string, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartCount: number;
  cartTotalUSD: number;
  cartTotalNGN: number;
  reviews: Review[];
  addReview: (newReview: Omit<Review, 'id' | 'date' | 'helpfulCount'>) => void;
  isOrderModalOpen: boolean;
  setIsOrderModalOpen: (open: boolean) => void;
  orderDirectInfo: {
    productName: string;
    colorway?: string;
    price: string;
  } | null;
  openDirectOrder: (product: Product, colorway?: string) => void;
  phoneNumber: string;
  phoneDisplay: string;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [activePage, setActivePage] = useState<PageType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('poedagar-minimalist-black');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [orderDirectInfo, setOrderDirectInfo] = useState<{
    productName: string;
    colorway?: string;
    price: string;
  } | null>(null);

  const formatPrice = (priceUSD: number, _priceNGN?: number) => {
    return `$${priceUSD.toLocaleString()}`;
  };

  const navigateToProduct = (id: string) => {
    setSelectedProductId(id);
    setActivePage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product, colorway?: string, quantity = 1) => {
    const selectedColor = colorway || (product.colorways ? product.colorways[0].name : undefined);
    const cartItemId = `${product.id}-${selectedColor || 'default'}`;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === cartItemId);
      if (existing) {
        return prevCart.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { id: cartItemId, product, colorway: selectedColor, quantity }];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const cartTotalUSD = cart.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);
  const cartTotalNGN = cart.reduce((acc, item) => acc + item.product.priceNGN * item.quantity, 0);

  const addReview = (reviewData: Omit<Review, 'id' | 'date' | 'helpfulCount'>) => {
    const newRev: Review = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      date: 'Just now',
      helpfulCount: 0,
    };
    setReviews((prev) => [newRev, ...prev]);
  };

  const openDirectOrder = (product: Product, colorway?: string) => {
    const color = colorway || (product.colorways ? product.colorways[0].name : '');
    setOrderDirectInfo({
      productName: product.name,
      colorway: color,
      price: formatPrice(product.priceUSD, product.priceNGN),
    });
    setIsOrderModalOpen(true);
  };

  return (
    <StoreContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        activePage,
        setActivePage,
        selectedProductId,
        setSelectedProductId,
        navigateToProduct,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        isCartOpen,
        setIsCartOpen,
        cartCount,
        cartTotalUSD,
        cartTotalNGN,
        reviews,
        addReview,
        isOrderModalOpen,
        setIsOrderModalOpen,
        orderDirectInfo,
        openDirectOrder,
        phoneNumber: STORE_PHONE_NUMBER,
        phoneDisplay: STORE_PHONE_DISPLAY,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
