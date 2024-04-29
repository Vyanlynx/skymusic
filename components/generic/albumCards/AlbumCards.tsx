'use client'
import React from 'react'
import Image from 'next/image';
import style from './AlbumCards.module.scss'
import { wordSlicer, createKeyFromString } from '@/utils/genericFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { addTofavourites, removeFromFavourites } from '@/redux/slice/ExploreStoreSlice'
import PlayList from '../playListModal/PlayList';

/**
 * The AlbumCards component receives props from the parent component.
 * It displays an album card with an image, title, and artist information.
 * It also allows users to add or remove the album from their favourites.
 */
export default function AlbumCards(props: any) {
    /**
     * Extract the album label from the props.
     */
    let albumLabel: string = props['im:name']?.label;
    
    /**
     * Extract the artist name from the props and slice it to a shorter length.
     */
    let artist: string = wordSlicer(props['im:artist']?.label);
    
    /**
     * Extract the title from the album label and slice it to a shorter length.
     */
    let title: string = wordSlicer(props['im:name']?.label?.split(' ')?.slice(0, 2));
    
    /**
     * Get the favourites from the Redux store.
     */
    let { favourites } = useSelector((state: any) => state.ExplorePageDetails);
    
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
            /**
             * If the album is already in favourites, remove it.
             */
            let removeOnDoubleClick: string[] = favourites?.filter((items: string) => items!== createKeyFromString(key))
            dispatch(removeFromFavourites(removeOnDoubleClick));
        } else {
            /**
             * If the album is not in favourites, add it.
             */
            dispatch(addTofavourites(createKeyFromString(key)));
        }
    }
    
    /**
     * Check if an album is already in favourites.
     * @param key The label of the album.
     * @returns The path to the heart icon (red or white) based on the album's favourite state.
     */
    const isAlreadyAvailInFavourites = (key: string) => {
        return favourites?.includes(createKeyFromString(key))? '/assests/redHeart.svg' : '/assests/whiteHeart.svg';
    }
    
    return (
        <div className={style.album_card}>
            <Image
                src={props['im:image'][2].label}
                width={120} height={150}
                alt={`${albumLabel} image`} style={{ borderRadius: "10%" }} />
            
            <div className={style.img_container}>
                <Image src={isAlreadyAvailInFavourites(albumLabel)}
                    width={20} height={15}
                    alt={`${albumLabel} image`}
                    onClick={() => addtoFavourites(albumLabel)}
                    style={{ borderRadius: "10%" }} />

                <Image src={'/assests/addIcon.svg'}
                    width={20} height={15}
                    alt={`${albumLabel} image`}
                    style={{ borderRadius: "10%" }} />
            </div>
            <div title={albumLabel}>{title?? 'No title'}</div>
            <div title={props['im:artist']?.label}>{artist?? 'unKnown'}</div>
        </div>
    )
}