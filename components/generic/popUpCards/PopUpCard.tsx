import styled from 'styled-components';
import { AppDispatch } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSongsIntoPlaylists } from '@/redux/slice/ExploreStoreSlice'

const PopMenuContainer = styled.div`
     background-color: white;
     color: orangered;
     z-index: 9999;
     padding: 1px 5px;
     text-align: center;
     border-radius:5px;
     &:hover{
       background-color:black;
       border-radius:none;
       }
`;
const PopUpCard: any = (props: any): any => {
    let dispatch: AppDispatch = useDispatch();
    let { playlists } = useSelector((state: any) => state.ExplorePageDetails);


    const addSongIntoPlaylist = (playlistName: string, song: any) => {
        props.setShowPlayListbtn(false)
        let ifAlreadyExisting = playlists[playlistName].filter((item: any) => {
            return item['im:name']?.label === song['im:name']?.label
        })
        if (!ifAlreadyExisting.length) {
            dispatch(setSongsIntoPlaylists({ playListName: playlistName, song: song }))
        }
    };

    let CardValue = Object.keys(props.data).map((item) => {
        return <PopMenuContainer key={item}
            onClick={(() => addSongIntoPlaylist(item, props.songDetails))}
            onMouseEnter={() => props.setShowPlayListbtn(true)}
            onMouseLeave={() => props.setShowPlayListbtn(false)}>
            {item}
        </PopMenuContainer>
    })
    return CardValue
}

export default PopUpCard;