'use client'
import React from 'react'
import Image from 'next/image';
import style from '../albumCards/AlbumCards.module.scss'

export default function PlayListCards(props: any) {
    let songsCount: string = props?.playlists[props.title].length;
    console.log(props?.playlists?.[props.title]?.[0]?.['im:image']?.[2]?.label)
    return (
        <div className={style.playList_card}>
            <Image
                src={props?.playlists?.[props.title]?.[0]?.['im:image']?.[2]?.label??'/assests/brokePic.svg'}  // use the first image if no
                width={120} height={150}
                alt={`${props?.albumLabel} image`} style={{ borderRadius: "10%" }} />

            <div title={props?.albumLabel}>{props?.title ?? 'No title'}</div>
            <div title={props?.albumLabel}>{songsCount ? songsCount : 'No Songs Found!'}</div>
        </div>
    )
}