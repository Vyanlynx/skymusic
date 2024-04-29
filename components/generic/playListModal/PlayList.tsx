import React from 'react'
import Image from 'next/image'
import ModalComponent from '@/components/shared/modal/Modal'
export default function PlayList() {
    return (
        <React.Fragment>
            {/* <ModalComponent title={'Add to Playlist'} triggerId={'#Playlist'}> */}
                <section>
                    <button>
                        <Image src={'/assests/addPlaylist.svg'}
                            width={20} height={15}
                            alt={`playlist image`}
                            // onClick={() => addtoFavourites(albumLabel)}
                            style={{ borderRadius: "10%" }} />
                        <span></span>
                    </button>
                </section>
                {/* <section>
                    <h6></h6>
                </section> */}
            {/* </ModalComponent> */}
        </React.Fragment>
    )
}
