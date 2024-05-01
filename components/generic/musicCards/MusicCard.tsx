import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  width: 400px;
  border: 3px solid #ffce93;
  align-items:center;
  border-radius:10px;
  margin:5px;
  gap:10px;
  padding:0.5em 1em;
  &:hover{
    background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  }
`;

const ImageContainer = styled.div`
  /* flex: 1; */
`;

const TextContainer = styled.div`
width:100%
 
`;

const Text = styled.div`
text-align:start;
`;
const AlbumName = styled.div`
font-size:13px;
font-weight:500;
margin-bottom:2px;
`;
const ArtistName = styled.div`
font-size:12px;
margin-bottom:2px;
`;

const SVGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MusicCard = ({ favourites }: any) => {
  
  return (
    <Container>
      <ImageContainer>
        <Image src={favourites?.['im:image']?.[2]?.label ?? '/assests/brokePic.svg'}
          width={70} height={80}
          alt={`playlist image`}
          style={{ borderRadius: "10%" }} />
      </ImageContainer>
      <TextContainer>
        <Text>
          <AlbumName>{favourites?.['im:name']?.label}</AlbumName>
          <ArtistName>{favourites?.['im:artist']?.label}</ArtistName>
        </Text>
      </TextContainer>
      <SVGContainer>
        <Image src={'/assests/playIcon.svg'}
          width={30} height={35}
          alt={`playlist image`}
          style={{ borderRadius: "10%" }} />
      </SVGContainer>
    </Container>
  );
}

export default MusicCard;
