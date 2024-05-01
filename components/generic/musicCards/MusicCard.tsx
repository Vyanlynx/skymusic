import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 400px;
  border: 3px solid #ffce93;
  align-items: center;
  border-radius: 10px;
  margin: 5px;
  gap: 10px;
  padding: 0.5em 1em;
  &:hover {
    background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  }
`;

const ImageContainer = styled.div``;

const TextContainer = styled.div`
  width: 100%;
`;

const Text = styled.div`
  text-align: start;
`;

const AlbumName = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 2px;
`;

const ArtistName = styled.div`
  font-size: 12px;
  margin-bottom: 2px;
`;

const SVGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface MusicCardProps {
  favourites: {
    'im:image': { label: string }[];
    'im:name': { label: string };
    'im:artist': { label: string };
  };
}

const MusicCard: React.FC<MusicCardProps> = ({ favourites }) => {
  return (
    <Container>
      <ImageContainer>
        {/* Use a default image if the image source is not available */}
        <Image
          src={favourites?.['im:image']?.[2]?.label ?? '/assests/brokePic.svg'}
          width={70}
          height={80}
          alt={`album image`}
          style={{ borderRadius: "10%" }}
          priority={false}
        />
      </ImageContainer>
      <TextContainer>
        <Text>
          {/* Display album name and artist */}
          <AlbumName>{favourites?.['im:name']?.label}</AlbumName>
          <ArtistName>{favourites?.['im:artist']?.label}</ArtistName>
        </Text>
      </TextContainer>
      <SVGContainer>
        {/* Use a default play icon if the icon source is not available */}
        <Image
          src={'/assests/playIcon.svg'}
          width={30}
          height={35}
          alt={`play icon`}
          style={{ borderRadius: "10%" }}
          priority={false}
        />
      </SVGContainer>
    </Container>
  );
}

export default MusicCard;
