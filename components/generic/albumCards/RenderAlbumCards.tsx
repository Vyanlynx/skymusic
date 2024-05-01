import React from 'react'
import AlbumCards from './AlbumCards'
import LoadingComponent from '@/components/shared/loader/LoadingComponent'

export default function RenderAlbumCards(props: any) {
    return (
        <> {props?.data?.feed?.entry?.length ? props?.data?.feed?.entry?.map((item: any, i: number) => {
            return <React.Fragment key={i}><AlbumCards {...item} /></React.Fragment>
        }): <LoadingComponent />}</>
    )
}
