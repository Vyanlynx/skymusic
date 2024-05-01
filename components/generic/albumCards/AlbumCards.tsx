'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import style from './AlbumCards.module.scss'
import { wordSlicer, createKeyFromString } from '@/utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { addTofavourites, removeFromFavourites } from '@/redux/slice/ExploreStoreSlice'
import styled from 'styled-components';
import PopUpCard from '../popUpCards/PopUpCard';

/**
 * The AlbumCards component receives props from the parent component.
 * It displays an album card with an image, title, and artist information.
 * It also allows users to add or remove the album from their favourites.
 */
const PopMenu = styled.section`
background-color: white;
position:relative;
top:-5px;
border-radius:10px;
`;
const AlbumLabel = styled.section`
    padding-top: 1vh;
    font-size: 12px;
    font-weight: 600;
`;
const Artistname = styled.section`
font-size: 10px;
`;
export default function AlbumCards(props: any) {
    const [showPlayListbtn, setShowPlayListbtn] = useState<boolean>(false);
    /**
     * Extract the album label from the props.
     */
    let albumLabel: string|undefined = props?.['im:name']?.label;

    /**
     * Extract the artist name from the props and slice it to a shorter length.
     */
    let artist: string|undefined = wordSlicer(props['im:artist']?.label ?? '');

    /**
     * Extract the title from the album label and slice it to a shorter length.
     */
    // @ts-ignore: Unreachable code error
    let title: string|undefined = wordSlicer(props?.['im:name']?.label?.split(' ')?.slice(0, 2));

    /**
     * Get the favourites from the Redux store.
     */
    let { favourites, playlists } = useSelector((state: any) => state.ExplorePageDetails);

    /**
     * Get the dispatch function from Redux.
     */
    let dispatch: AppDispatch = useDispatch();

    /**
     * Add or remove an album from favourites based on its current state.
     * @param key The label of the album.
     */
    const addtoFavourites = (key: string) => {
        if (favourites?.includes(createKeyFromString(key))) {
            let removeOnDoubleClick: string[] = favourites?.filter((items: string) => items !== createKeyFromString(key))
            dispatch(removeFromFavourites(removeOnDoubleClick));
        } else {
            dispatch(addTofavourites(createKeyFromString(key)));
        }
    }

    /**
     * Check if an album is already in favourites.
     * @param key The label of the album.
     * @returns The path to the heart icon (red or white) based on the album's favourite state.
     */
    const isAlreadyAvailInFavourites = (key: string) => {
        return favourites?.includes(createKeyFromString(key)) ? '/assests/redHeart.svg' : '/assests/whiteHeart.svg';
    }

    return (
        <div className={style.album_card}>
            <Image
                className={style.albumImage}
                src={props?.['im:image']?.[2]?.label ?? '/assests/brokePic.svg'}
                width={120} height={150}
                alt={`${albumLabel} image`} style={{ borderRadius: "10%" }} priority={false}/>

            <div className={style.img_container}>
                <Image src={isAlreadyAvailInFavourites(albumLabel ?? '')}
                    width={20} height={15}
                    alt={`${albumLabel} image`}
                    onClick={() => addtoFavourites(albumLabel ?? '')}
                    style={{ borderRadius: "10%" }} priority={false}/>

                <Image src={'/assests/addIcon.svg'}
                    width={20} height={15}
                    alt={`${albumLabel} image`}
                    style={{ borderRadius: "10%" }}
                    priority={false}
                    onMouseEnter={() => setShowPlayListbtn(true)}
                    onMouseLeave={() => setShowPlayListbtn(false)}
                />
                {showPlayListbtn && <PopMenu>
                    <PopUpCard data={playlists} songDetails={props} setShowPlayListbtn={setShowPlayListbtn} />
                </PopMenu>}
            </div>
            <AlbumLabel title={albumLabel}>{title ?? 'No title'}</AlbumLabel>
            <Artistname title={props['im:artist']?.label}>{artist ?? 'unKnown'}</Artistname>
        </div>
    )
}

