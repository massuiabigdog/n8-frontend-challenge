import React, { createContext, useState } from 'react';
import { PropertyItem } from '../types';


export type FavContextType = {
  favItems: PropertyItem[];
  toggleFavItem: (item: PropertyItem) => void;
};

export const FavContext = createContext<FavContextType | undefined>(undefined);

export const FavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favItems, setFavItems] = useState<PropertyItem[]>([]);

  const toggleFavItem = (item: PropertyItem) => {
    const isAlreadyFav = favItems.some((favItem) => favItem.Id === item.Id);
    let updatedFavItems: PropertyItem[];

    if (isAlreadyFav) {
      updatedFavItems = favItems.filter((favItem) => favItem.Id !== item.Id);
    } else {
      updatedFavItems = [...favItems, item];
    }

    setFavItems(updatedFavItems);
    localStorage.setItem('favItems', JSON.stringify(updatedFavItems));
  };

  return (
    <FavContext.Provider value={{ favItems, toggleFavItem }}>
      {children}
    </FavContext.Provider>
  );
};