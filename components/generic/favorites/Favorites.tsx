import React from 'react'
import { useSelector } from 'react-redux';
import MockData from '@/cms/MockAPIdata.json'
import { filterSongsFromKeys } from '@/utils/genericFunctions';
import MusicCard from '../musicCards/MusicCard';

export default function Favorites() {
    let { favourites, apiResponse } = useSelector((state: any) => state.ExplorePageDetails);
    let FilterdData = filterSongsFromKeys(MockData, favourites)

    return (
        <div className="d-flex align-items-center flex-wrap justify-content-center">
            {FilterdData?.length ? <>{FilterdData?.map((items: any) => {
                return <MusicCard favourites={items} />
            })}</> : <>No Items Found!</>}
        </div>
    )
}
