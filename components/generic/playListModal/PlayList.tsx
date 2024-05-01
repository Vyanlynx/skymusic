import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { setPlaylistDetails } from '@/redux/slice/ExploreStoreSlice';
import AccordionComponent from '@/components/shared/accordion/AccordionComponent';
import MusicCard from '../musicCards/MusicCard';
import styles from './PlayList.module.scss';

interface PlayListProps {}

/**
 * The PlayList component is used to display a playlist.
 */
const PlayList: React.FC<PlayListProps> = () => {
  const dispatch: AppDispatch = useDispatch();
  const { playlists } = useSelector((state: any) => state.ExplorePageDetails);
  const [newPlayListName, setNewPlayListName] = useState<string>('');
  const [createNewPlaylist, setCreateNewPlaylist] = useState<boolean>(false);

  // Function to set new playlist name
  const setNewPlaylistName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlayListName(e.target.value);
  };

  // Function to create a new playlist
  const createPlaylist = () => {
    if (newPlayListName.length) {
      if (playlists[newPlayListName]) {
        alert("This Playlist name already exists, Please choose a new name!");
      } else {
        dispatch(setPlaylistDetails(newPlayListName));
      }
    }
  };

  return (
    <React.Fragment>
      {/* Section for creating a new playlist */}
      <section>
        <button className='btn btn-warning' onClick={() => setCreateNewPlaylist(!createNewPlaylist)}>
          <span>Create a New Playlist</span>
        </button>
        {createNewPlaylist && (
          <div className='mt-2'>
            <input
              className={styles.inputPlaylist}
              name="Playlist"
              value={newPlayListName}
              onChange={setNewPlaylistName}
              placeholder='Enter your playlist name...'
            />
            <button
              className={styles.createButton}
              disabled={!newPlayListName.length}
              onClick={createPlaylist}
            >
              Create
            </button>
          </div>
        )}
      </section>

      {/* Section for displaying existing playlists */}
      <section className='mt-3'>
        <h6>Your Playlists</h6>
        <div>
          {/* Render each playlist using AccordionComponent */}
          {Object.keys(playlists).map((playlistName: string) => (
            <AccordionComponent key={playlistName} playlistName={playlistName}>
              {playlists?.[playlistName]?.length ? (
                // Render music cards for each song in the playlist
                <>
                  {playlists?.[playlistName]?.map((song: any) => (
                    <MusicCard key={song?.['im:name']?.label} favourites={song} />
                  ))}
                </>
              ) : (
                "No Albums found!"
              )}
            </AccordionComponent>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default PlayList;
