import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { setShowPlayListPopUp } from '@/redux/slice/ExploreStoreSlice';
import style from './MenuLists.module.scss';

export interface MenuListProps {
  list: string[];
  header: string;
}

const MenuLists: React.FC<MenuListProps> = ({ header, list }: MenuListProps) => {
  const dispatch: AppDispatch = useDispatch();

  // Handler for clicking on menu items
  const handleClick = (item: string) => {
    dispatch(setShowPlayListPopUp(item));
  };

  return (
    <section className={style.menu_list}>
      {/* Display menu header */}
      <div className={style.title}>{header}</div>
      
      {/* Render menu items */}
      {list.map((item: string) => (
        <button
          className={`${style.item} secondaryButton`}
          onClick={() => handleClick(item)}
          key={item}
        >
          {item}
        </button>
      ))}
    </section>
  );
};

export default MenuLists;
