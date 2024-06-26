'use client';
import React, { useState, useRef, ChangeEvent, SyntheticEvent } from 'react';
import Image from 'next/image';
import style from './HeaderWrapper.module.scss';
import dynamic from 'next/dynamic'
import styled from 'styled-components';
// import Mockdata from '@/cms/MockAPIdata.json';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenMenuBar, setsearchedAlbum } from '@/redux/slice/ExploreStoreSlice';
import { searchbarSuggesstionsFilter } from '@/utils/helpers';
import { AppDispatch } from '@/redux/store';
const UserProfile = dynamic(() => import("@/components/generic/userProfile/UserProfile"))
interface KeyboardEvent<T = Element> extends SyntheticEvent<T, KeyboardEvent> {
  altKey: boolean;
  charCode: number;
  ctrlKey: boolean;
  getModifierState(key: string): boolean;
  key: string;
  keyCode: number;
  locale: string;
  location: number;
  metaKey: boolean;
  repeat: boolean;
  shiftKey: boolean;
}
const Input = styled.input`
  color: black;
`;

const HeaderWrapper = (): JSX.Element => {
  const [search, setSearch] = useState<string[]>([]);
  const dispatch: AppDispatch = useDispatch();
  let inputRef = useRef<string[]>([]);//to store the selected album response
  const { isOpenMenu, apiResponse } = useSelector((state: any) => state.ExplorePageDetails);
  const triggerOnClickOfEnter = (e: any) => {
    if (e.keyCode === 13) {
      handleSearchSuggession()
    }
  }

  //onchange of input field
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    inputRef.current = search.filter((item: any) => item.displayTag === value);
    if (value?.length) {
      setSearch(searchbarSuggesstionsFilter(apiResponse, value));
    }
  };
  //onClick of Logo - show and hide menu bar
  const handleSideBarHandler = (): void => {
    dispatch(setOpenMenuBar());
  };
  //store the clicked Album in Redux Store
  const handleSearchSuggession = (): void => {
    dispatch(setsearchedAlbum(inputRef.current));
  };
  return (
    <div className={`${style.headercontainer} d-flex align-items-center py-3`}>
      <div className="d-flex">
        <Image
          src={'/skymusicLogo.png'}
          width={80}
          height={25}
          alt="skymusicLogo"
          onClick={handleSideBarHandler}
          title={isOpenMenu ? 'Close Menu Bar' : 'Open Menu Bar'}
        />
      </div>
      <div className={`${style.secondary} d-flex justify-content-around align-items-center`}>
        <div className="d-flex align-item-center">
          <Input
            onChange={handleChange}
            className={style.searchInput}
            placeholder="Search..."
            list="listSuggesstion"
            id="input-names"
            onKeyDown={triggerOnClickOfEnter}
          />
          {search?.length ? <datalist id="listSuggesstion">
            {search.map((item: any, index: number) => (
              <option key={index}>{item?.displayTag}</option>
            ))}
          </datalist> : ''}
          <button className="btn btn-primary" onClick={handleSearchSuggession} >
            <Image src={'/assests/searchIcon.svg'} alt="SearchIcon" height={16} width={16} priority={false} />
          </button>
        </div>
        <section className='userProfile'>
          <UserProfile />
        </section>
      </div>
    </div>
  );
};

export default HeaderWrapper;
