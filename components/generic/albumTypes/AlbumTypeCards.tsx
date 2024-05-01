import React from 'react'
import MusicCard from '../musicCards/MusicCard'
import AuthorDetailsCard from '../authorCards/AuthorDetailsCard'

export default function AlbumTypeCards({ data }: any) {
    return (
        <div>
            {Object.keys(data).map((items: any, index: number) => {
                return <React.Fragment key={index}>
                    <AuthorDetailsCard authorName={items} imgSrc={data?.[items]?.[0]?.['im:image']?.[2]} />
                    <section className='d-flex flex-wrap my-3 flex-grow-1'>
                        {data[items]?.length ? <>{data[items]?.map((elements: any) => {
                            return <MusicCard key={elements?.['im:name']?.label} title={items} favourites={elements} />
                        })}</> : "No Albums found!"
                        }</section>
                </React.Fragment>
            })}
        </div>
    )
}
