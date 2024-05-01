import React from 'react';
import Image from 'next/image';
import style from '../albumCards/AlbumCards.module.scss';

interface PlayListCardsProps {
    playlists: {
        [key: string]: {
            'im:image': { label: string }[];
        }[];
    };
    title: string;
    albumLabel?: string;
}

const PlayListCards: React.FC<PlayListCardsProps> = ({ playlists, title, albumLabel }) => {
    const songsCount: string = String(playlists?.[title]?.length ?? 0);

    return (
        <div className={style.playList_card}>
            {/* Use a default image if the image source is not available */}
            <Image
                src={playlists?.[title]?.[0]?.['im:image']?.[2]?.label ?? '/assests/brokePic.svg'}
                width={120}
                height={150}
                alt={`${albumLabel ?? title} image`}
                style={{ borderRadius: "10%" }}
                priority={false}
            />

            {/* Display playlist title */}
            <div title={albumLabel}>{title ?? 'No title'}</div>

            {/* Display number of songs */}
            <div title={albumLabel}>{songsCount ? songsCount : 'No Songs Found!'}</div>
        </div>
    );
}

export default PlayListCards;
