'use client'
import Image from 'next/image';
import style from './UswerProfile.module.scss';
import { getLocalStorage } from '@/utils/webStorage';

export default function UserProfile() {
    return (
        <div className='d-flex align-items-center gap-2'>
            <Image className={style.dpPic} src={'/assests/dp.png'} width={30} height={30} alt="skymusicLogo" />
            <div>{
                typeof document !== undefined ? getLocalStorage('username') ? getLocalStorage('username') : 'GUEST' : 'Guest'
            }</div>
        </div>
    )
}
