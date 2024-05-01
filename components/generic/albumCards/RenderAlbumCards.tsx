import React from 'react'
import dynamic from 'next/dynamic'
const AlbumCards = dynamic(() => import("./AlbumCards"))
const LoadingComponent = dynamic(() => import("@/components/shared/loader/LoadingComponent"))

export default function RenderAlbumCards(props: any) {
    return (
        <> {props?.data?.feed?.entry?.length ? props?.data?.feed?.entry?.map((item: any, i: number) => {
            return <React.Fragment key={i}><AlbumCards {...item} /></React.Fragment>
        }): <LoadingComponent />}</>
    )
}
