import React from 'react';
import MusicCard from '../musicCards/MusicCard';
import AuthorDetailsCard from '../authorCards/AuthorDetailsCard';


interface PropsTypes {
    data: any;
}

const AlbumTypeCards = ({ data }:PropsTypes):JSX.Element => {
    return (
        <div>
            {Object.keys(data).map((authorName: string, index: number) => (
                <React.Fragment key={index}>
                    {/* Display author details */}
                    <AuthorDetailsCard
                        authorName={authorName}
                        imgSrc={data?.[authorName]?.[0]?.['im:image']?.[2]}
                    />
                    {/* Display music cards */}
                    <section className='d-flex flex-wrap my-3 flex-grow-1'>
                        {data?.[authorName]?.length ? (
                            <>
                                {data?.[authorName]?.map((album: any,index:number) => (
                                    <MusicCard
                                        key={index}
                                        favourites={album}
                                    />
                                ))}
                            </>
                        ) : (
                            "No Albums found!"
                        )}
                    </section>
                </React.Fragment>
            ))}
        </div>
    );
};

export default AlbumTypeCards;

