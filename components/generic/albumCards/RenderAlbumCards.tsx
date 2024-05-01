import React from 'react'
import AlbumCards from './AlbumCards'

export default function RenderAlbumCards(props: any) {
    return (
        <> {props?.data?.feed?.entry?.length && props?.data?.feed?.entry?.map((item: any, i: number) => {
            return <React.Fragment key={i}><AlbumCards {...item} /></React.Fragment>
        })
        }</>
    )
}
