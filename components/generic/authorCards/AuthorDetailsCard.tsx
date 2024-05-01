import React from 'react'
import styled from "styled-components";
import Image from 'next/image';
const AuthorName = styled.div`
  font-size:120%;
  font-weight:700;
  `
const Container = styled.div`
  display: flex;
  align-items: center;
  gap:0.5em;
  `
export default function AuthorDetailsCard(props: any) {
    console.log(props)
    return (<Container>
        <Image src={props?.imgSrc?.label}
            width={30} height={30}
            alt={`${props.authorName} image`}
            style={{ borderRadius: "50%" }} />
        <AuthorName>{props.authorName}</AuthorName>
    </Container>
    )
}
