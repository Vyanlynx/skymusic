import React from 'react';
import Image from 'next/image';
import style from './HeaderWrapper.module.scss'
import UserProfile from '@/components/generic/userProfile/UserProfile';

const HeaderWrapper = (): JSX.Element => {
    return (
        <div className={`${style.headercontainer} d-flex align-items-center py-3`}>
            <div className='d-flex'>
                <Image src={'/skymusicLogo.png'} width={80} height={25} alt="skymusicLogo" />
            </div>
            <div className={`${style.secondary} d-flex justify-content-around align-items-center`}>
                <div>
                    <button className={style.searchButton}><Image src={'/assests/searchIcon.svg'} alt='SearchIcon' height={16} width={16} /></button>
                    <input className={style.searchInput} placeholder='Search...' />
                </div>
                <div className={style.offer}>1 Month Free Trial</div>
                <UserProfile />
            </div>
        </div >
    )
}

export default HeaderWrapper;