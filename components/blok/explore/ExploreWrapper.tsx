'use client'
import React, { useEffect,useState } from "react";
import dynamic from 'next/dynamic'

import { sortAlbums } from "@/utils/sortMusic";
import style from './Explore.module.scss'
import CMSdata from '@/cms/Explore.json';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, setIsErrorHappened, setShowPlayListPopUp } from "@/redux/slice/ExploreStoreSlice";
import { AppDispatch } from "@/redux/store";
import { ARTIST, FAVOURITES, GENRE, YOURPLAYLISTS } from "@/utils/constants";

const ModalComponent = dynamic(() => import("@/components/shared/modal/Modal"))
const PlayList = dynamic(() => import("@/components/generic/playListModal/PlayList"))
const MusicCard = dynamic(() => import("@/components/generic/musicCards/MusicCard"))
const Favorites = dynamic(() => import("@/components/generic/favorites/Favorites"))
const AlbumTypeCards = dynamic(() => import("@/components/generic/albumTypes/AlbumTypeCards"))
const RenderAlbumCards = dynamic(() => import("@/components/generic/albumCards/RenderAlbumCards"))
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
    let { apiResponse, showPlayListPopUp, searchedAlbum,isErrorHappened } = useSelector((state: any) => state.ExplorePageDetails)
    const data: MyObject = sortAlbums(apiResponse);

    useEffect(() => {
        dispatch(fetchAlbums());//API call to get 100 albums
    }, [])

    const closeModal = (): void => {
        dispatch(setShowPlayListPopUp('')) //to close the popup
    }
    const closeErrorModal = (): void => {
        dispatch(setIsErrorHappened({status:false})) //to close the popup
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
            <ModalComponent title={'Error'} show={isErrorHappened?.status} setShow={closeErrorModal}>
                {isErrorHappened?.message}
            </ModalComponent>
        </div>
    )
}
