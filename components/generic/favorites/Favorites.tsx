import React from 'react';
import { useSelector } from 'react-redux';
import { filterSongsFromKeys } from '@/utils/helpers';
import dynamic from 'next/dynamic'
const MusicCard = dynamic(() => import("../musicCards/MusicCard"))

const Favorites: React.FC = () => {
  // Redux state
  const { favourites,apiResponse } = useSelector((state: any) => state.ExplorePageDetails);

  // Filter songs based on favorite keys
  const filteredData = filterSongsFromKeys(apiResponse, favourites);

  return (
    <div className="d-flex align-items-center flex-wrap justify-content-center">
      {filteredData?.length ? (
        // Render music cards for each filtered item
        <>
          {filteredData?.map((item: any, index: number) => (
            <MusicCard key={index} favourites={item} />
          ))}
        </>
      ) : (
        // Render message if no items found
        <>No Items Found!</>
      )}
    </div>
  );
};

export default Favorites;
