'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './PlayList.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { setPlaylistDetails } from '@/redux/slice/ExploreStoreSlice';
import AccordionComponent from '@/components/shared/accordion/AccordionComponent';
import MusicCard from '../musicCards/MusicCard';

/**
 * The PlayList component is used to display a playlist.
 */
export default function PlayList() {
    let dispatch: AppDispatch = useDispatch();
    let { playlists } = useSelector((state: any) => state.ExplorePageDetails);
    const [newPlayListName, setnewPlayListName] = useState('');
    const [createNewPlaylist, setCreateNewPlaylist] = useState(false);
    const settingNewPlaylist = (e: any) => {
        setnewPlayListName(e.target.value)
    }
    const createPlaylist = () => {
        if (newPlayListName.length) {
            if (playlists[newPlayListName]) alert("This Playlist name already exists, Please choose new name!")
            dispatch(setPlaylistDetails(newPlayListName))
        }
    }

    return (
        <React.Fragment>
            <section>
                <button className='btn btn-warning' onClick={() => setCreateNewPlaylist(!createNewPlaylist)}>
                    <span>Create a New Playlist</span>
                </button>
                {createNewPlaylist && <div className='mt-2'>
                    <input className={styles.inputPlaylist} name="Playlist" value={newPlayListName} onChange={settingNewPlaylist} placeholder='Enter your playlist name...'/>
                    <button className={styles.createButton} disabled={!newPlayListName.length} onClick={createPlaylist}>Create</button>
                </div>}
            </section>
            <section className='mt-3'>
                <h6>Your Playlists</h6>
                <div>
                    {Object.keys(playlists).map((items: any) => {
                        return <AccordionComponent playlistName={items}>
                            {playlists?.[items]?.length ? <>{playlists?.[items]?.map((elements: any) => {
                                return <MusicCard key={items} title={items} favourites={elements} />
                            })}</> : "No Albums found!"}</AccordionComponent>
                    })}
                </div>
            </section>
        </React.Fragment>
    )
}