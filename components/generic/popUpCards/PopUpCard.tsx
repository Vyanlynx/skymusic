import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { setSongsIntoPlaylists } from '@/redux/slice/ExploreStoreSlice';

// Styled component for the pop-up container
const PopMenuContainer = styled.div`
  background-color: white;
  color: orangered;
  z-index: 9999;
  padding: 1px 5px;
  text-align: center;
  border-radius: 5px;
  &:hover {
    background-color: black;
    border-radius: none;
  }
`;

interface PopUpCardProps {
  data: { [key: string]: any };
  songDetails: { [key: string]: any };
  setShowPlayListbtn: (value: boolean) => void;
}

const PopUpCard: React.FC<PopUpCardProps> = ({ data, songDetails, setShowPlayListbtn }) => {
  const dispatch: AppDispatch = useDispatch();
  const { playlists } = useSelector((state: any) => state.ExplorePageDetails);

  // Function to add song into playlist
  const addSongIntoPlaylist = (playlistName: string, song: any) => {
    setShowPlayListbtn(false);
    const ifAlreadyExisting = playlists[playlistName].filter((item: any) => item['im:name']?.label === song['im:name']?.label);
    if (!ifAlreadyExisting.length) {
      dispatch(setSongsIntoPlaylists({ playListName: playlistName, song: song }));
    }
  };

  // Generate pop-up card items
  const CardValue = Object.keys(data).map((item) => (
    <PopMenuContainer
      key={item}
      onClick={() => addSongIntoPlaylist(item, songDetails)}
      onMouseEnter={() => setShowPlayListbtn(true)}
      onMouseLeave={() => setShowPlayListbtn(false)}
    >
      {item}
    </PopMenuContainer>
  ));

  return CardValue;
};

export default PopUpCard;
