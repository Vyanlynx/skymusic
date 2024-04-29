'use client'
import React, { useEffect, useMemo, useState } from "react";
import axiosInterceptorInstance from "@/utils/service";
import { sortAlbums } from "@/utils/sortMusic";
import Mockdata from '../../../cms/MockAPIdata.json'
import AlbumCards from "@/components/generic/albumCards/AlbumCards";
import style from './Explore.module.scss'
import ModalComponent from "@/components/shared/modal/Modal";
import CMSdata from '@/cms/Explore.json';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { explorePageSelector, fetchAlbums } from "@/redux/slice/ExploreStoreSlice";
import { AppDispatch } from "@/redux/store";
import PlayList from "@/components/generic/playListModal/PlayList";
const Container = styled.div`
  font-size:2vw;
  font-weight:700;
  `
export default function ExploreWrapper() {
    const data = sortAlbums(Mockdata);
    const [show, setShow] = useState(false);
    let dispatch:AppDispatch = useDispatch();
    // let  {apiResponse} = useSelector(explorePageSelector)
    let {apiResponse} = useSelector((state:any) => state.ExplorePageDetails)
    const RenderedAlbumCards = useMemo(() => apiResponse?.feed?.entry?.map((item: any, i: number) => {
        return <React.Fragment key={i}><AlbumCards {...item} /></React.Fragment>
    }), [apiResponse])

    useEffect(() => {
        dispatch(fetchAlbums());
    }, [])

    return (
        <div>
            <PlayList/>
            <Container>{CMSdata[0]?.MainHeader}</Container>
            <section className="d-flex align-items-center w-100 justify-content-between">
                <h6>{CMSdata[0]?.title1}</h6>
                <button type="button" className={style.showMorebtn} onClick={()=>setShow(!show)} >
                    {CMSdata[0]?.showMore}
                </button>
            </section>
            <div className={style.top_albums}>
                {RenderedAlbumCards}
            </div>
            <ModalComponent title={CMSdata[0]?.title1} show={show} setShow={setShow}>
                <div className={style.modalAlign}>{RenderedAlbumCards}</div>
            </ModalComponent>
        </div>
    )
}
