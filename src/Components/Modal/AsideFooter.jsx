import React from 'react';
import styled from 'styled-components';

// ---------- CONTAINER
const FooterModalContainer = styled.section`
  overflow: hidden;
  margin: 60px 0 0px 0;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
`;

// ---------- WRAPPER : ANIMATION CSS
const FooterModalSlider = styled.article`
  display: flex;
  white-space: nowrap;
  animation: scroll 5s linear infinite;
`;

// ---------- LISTE DES IMAGES
const FooterModalItems = styled.img`
  width: auto;
  height: 48px;
  padding: 5px 25px;
  border-left: 1px solid #000000;
`;


export default function FooterCarousel({ thisData }) {
  return (
    <FooterModalContainer>
      <FooterModalSlider>
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
        <FooterModalItems src={thisData.image} alt={thisData.name} />
      </FooterModalSlider>
    </FooterModalContainer>
  )
}
