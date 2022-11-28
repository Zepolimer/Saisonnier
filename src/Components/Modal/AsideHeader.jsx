import React from 'react';
import styled from 'styled-components'


const AsideHeaderContainer = styled.section`
  width: 100%;
  padding: 80px 5%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px){
    flex-direction: row;
  }
`;

const AsideHeaderArticle = styled.article`
  margin: 0 0 80px 0;

  @media screen and (min-width: 768px){
    margin: 0 100px 0px 0;
  }
`;
const AsideTitle = styled.h3`
  font-size: clamp(45px, 12.3vw, 80px);
  -webkit-text-stroke: 1px black;
  color: transparent;
  font-weight: 900;
`;
const Apropos = styled.p`
  padding: 20px 0 0 0;
  font-size: clamp(15px, 5.5vw, 20px);
  font-weight: 300;
`;

const AsideImgArticle = styled.article`
  width: fit-content;
  justify-self: flex-end;
  align-self: flex-end;
`
const ImgRpz = styled.img`
  width: 250px;
  height: auto;
  margin-right: 20px;
  filter: drop-shadow(20px -20px 0px #000000);
`;


export default function AsideHeader({ thisData }) {

  const headerTitleData = thisData.name;
  const headerAproposData = thisData.aPropos;
  const headerImgBgData = thisData.mainImage;

  return (
    <AsideHeaderContainer>
      <AsideHeaderArticle>
        <AsideTitle>{headerTitleData}</AsideTitle>
        <Apropos>{headerAproposData}</Apropos>
      </AsideHeaderArticle>

      <AsideImgArticle>
        <ImgRpz src={headerImgBgData} alt={headerTitleData} />
      </AsideImgArticle>
    </AsideHeaderContainer>
  )
}
