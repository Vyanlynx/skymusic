'use client'
import React, { useEffect, useMemo, useState } from "react";
import { sortAlbums } from "@/utils/sortMusic";
import Mockdata from '../../../cms/MockAPIdata.json'
import style from './Explore.module.scss'
import ModalComponent from "@/components/shared/modal/Modal";
import CMSdata from '@/cms/Explore.json';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, setShowPlayListPopUp } from "@/redux/slice/ExploreStoreSlice";
import { AppDispatch } from "@/redux/store";
import PlayList from "@/components/generic/playListModal/PlayList";
import MusicCard from "@/components/generic/musicCards/MusicCard";
import Favorites from "@/components/generic/favorites/Favorites";
import { ARTIST, FAVOURITES, GENRE, YOURPLAYLISTS } from "@/utils/constants";
import AlbumTypeCards from "@/components/generic/albumTypes/AlbumTypeCards";
import RenderAlbumCards from "@/components/generic/albumCards/RenderAlbumCards";
// import { ApiResponseType } from "@/type-checking/apiResponseType";
const Container = styled.div`
  font-size:100%;
  font-weight:500;
  `
interface MyObject {
    [key: string]: any;
}
export default function ExploreWrapper() {
    const [show, setShow] = useState<boolean>(false);
    let dispatch: AppDispatch = useDispatch();
    let { apiResponse, showPlayListPopUp, searchedAlbum } = useSelector((state: any) => state.ExplorePageDetails)
    const data: MyObject = sortAlbums(apiResponse);

    useEffect(() => {
        dispatch(fetchAlbums());//API call to get 100 albums
    }, [])

    const closeModal = (): void => {
        dispatch(setShowPlayListPopUp('')) //to close the popup
    }

    return (
        <div className="mx-3">
             {/* Display searched album */}
            {searchedAlbum?.[0]?.displayTag && <div>
                <Container>YOUR Search result</Container>
                <MusicCard favourites={searchedAlbum[0]} />
            </div>}
             {/* Section for top albums */}
            <section className="d-flex align-items-center w-100 justify-content-between">
                <h6>{CMSdata[0]?.title1}</h6>
                <button type="button" className={style.showMorebtn} onClick={() => setShow(!show)} >
                    {CMSdata[0]?.showMore}
                </button>
            </section>
            <div className={style.top_albums}>
                <RenderAlbumCards data={apiResponse} />
            </div>
            <ModalComponent title={'Albums based on Artists'} show={showPlayListPopUp === ARTIST} setShow={closeModal}>
                <AlbumTypeCards data={data?.artistWise} />
            </ModalComponent>
            <ModalComponent title={'Albums based on genre'} show={showPlayListPopUp === GENRE} setShow={closeModal}>
                <AlbumTypeCards data={data?.genreWise} />
            </ModalComponent>
            <ModalComponent title={CMSdata[0]?.title1} show={show} setShow={setShow}>
                <div className={style.modalAlign}><RenderAlbumCards data={apiResponse} /></div>
            </ModalComponent>
            <ModalComponent title={'Playlist'} show={showPlayListPopUp === YOURPLAYLISTS} setShow={closeModal}>
                <PlayList />
            </ModalComponent>
            <ModalComponent title={'Your Favourite Albums'} show={showPlayListPopUp === FAVOURITES} setShow={closeModal}>
                <Favorites />
            </ModalComponent>
        </div>
    )
}
