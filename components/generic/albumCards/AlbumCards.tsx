'use client'
import React from 'react'
import Image from 'next/image';
import style from './AlbumCards.module.scss'
import { wordSlicer } from '@/utils/genericFunctions';

export default function AlbumCards(props: any) {
    let artist: string = wordSlicer(props['im:artist']?.label)
    let title: string = wordSlicer(props['im:name']?.label?.split(' ')?.slice(0, 2))
    return (
        <div className={style.album_card}>
            <Image src={props['im:image'][2].label} width={120} height={150} alt={`${props['im:name']?.label} image`} style={{ borderRadius: "10%" }} />
            <div className={style.img_container}>
                <Image src={'/assests/whiteHeart.svg'} width={20} height={15} alt={`${props['im:name']?.label} image`} style={{ borderRadius: "10%" }} />
                <Image src={'/assests/addIcon.svg'} width={20} height={15} alt={`${props['im:name']?.label} image`} style={{ borderRadius: "10%" }} />
            </div>
            <div title={props['im:name']?.label}>{title ?? 'No title'}</div>
            <div title={props['im:artist']?.label}>{artist ?? 'unKnown'}</div>
        </div>
    )
}
