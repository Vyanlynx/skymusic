import React from 'react';
import styled from "styled-components";
import Image from 'next/image';

// Styled components
const AuthorName = styled.div`
  font-size: 120%;
  font-weight: 700;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

interface Props {
  imgSrc: {
    label: string;
  };
  authorName: string;
}

const AuthorDetailsCard: React.FC<Props> = ({ imgSrc, authorName }) => {
  return (
    <Container>
      {/* Display author image */}
      <Image
        src={imgSrc?.label}
        width={30}
        height={30}
        alt={`${authorName} image`}
        style={{ borderRadius: "50%" }}
        priority={false}
      />
      {/* Display author name */}
      <AuthorName>{authorName}</AuthorName>
    </Container>
  );
};

export default AuthorDetailsCard;
