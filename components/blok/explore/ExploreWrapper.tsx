'use client'
import React, { useEffect, useMemo } from "react";
import axiosInterceptorInstance from "@/utils/service";
import { sortAlbums } from "@/utils/sortMusic";
import Mockdata from '../../../cms/MockAPIdata.json'
import AlbumCards from "@/components/generic/albumCards/AlbumCards";
import style from './Explore.module.scss'
import ModalComponent from "@/components/shared/modal/Modal";
import CMSdata from '@/cms/Explore.json';
import styled from "styled-components";
const Container = styled.div`
  font-size:2vw;
  font-weight:700;
  `
export default function ExploreWrapper() {
    const data = sortAlbums(Mockdata);
    // useEffect(() => {
    //     getData()
    // }, [])
    // const getData = async () => {
    //     try {
    //         const response = await axiosInterceptorInstance.get('1'); // Replace with your API endpoint
    //         // Handle the response data here
    //         console.log(response.data);
    //     } catch (error) {
    //         // Handle the error here
    //         console.log(error);
    //     }
    // };
    const RenderedAlbumCards = useMemo(() => Mockdata?.feed?.entry?.map((item: any, i: number) => {
        return <React.Fragment key={i}><AlbumCards {...item} /></React.Fragment>
    }), [Mockdata])
    return (
        <div>
            <Container>{CMSdata[0]?.MainHeader}</Container>
            <section className="d-flex align-items-center w-100 justify-content-between">
                <h6>{CMSdata[0]?.title1}</h6>
                <button type="button" className={style.showMorebtn} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {CMSdata[0]?.showMore}
                </button>
            </section>
            <div className={style.top_albums}>
                {RenderedAlbumCards}
            </div>
            <ModalComponent title={CMSdata[0]?.title1}>
                <div className={style.modalAlign}>{RenderedAlbumCards}</div>
            </ModalComponent>
        </div>
    )
}
