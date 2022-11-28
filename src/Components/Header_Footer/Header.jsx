import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import {gsap} from 'gsap';

// ---------- CONTAINER
const AppContainer = styled.header`
  width: 100%;
  height: 100vh;
  background-image: url(${process.env.PUBLIC_URL}'/images/course.png');
  background-size: clamp(250px, 80%, 700px);
  background-repeat: no-repeat;
  background-position: bottom 10% right 20%;
  background-color: #FFFFFF;
  position: relative;
  transition: background-position 0.8s ease-in-out;

  @media screen and (min-width: 768px){
    background-position: bottom 50% right 15%;
  }
`;

const AppTextSection = styled.section`
  width: 100%;
  max-width: 850px;
  height: 50%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px){
    height: 100%;
  }
`;

// ---------- TITRE DE LA SECTION
const AppTitle = styled.h1`
  font-size: clamp(45px, 16vw, 140px);
  line-height: clamp(50px, 17vw, 145px);
  -webkit-text-stroke: 2px #FFFFFF;
  -webkit-text-stroke: 2px #000000;
  color: transparent;
  font-weight: 900;
  margin-bottom: 20px;
`;

// ---------- SOUS-TITRE DE LA SECTION
const AppSubTitle = styled.h2`
  margin: 0;
  font-size: clamp(35px, 10vw, 70px);
  line-height: clamp(40px, 10.5vw, 75px);
  color: #FFFFFF;
  color: #000000;
  font-weight: 600;

  #mois { text-transform: capitalize; }
`;


export default function Header({ thisMonth }) {

  const headerRef = useRef(null);
  const headerTitleRef= useRef(null);
  const headerSubtitleRef = useRef(null);

  useEffect(() => {
    if(headerRef !== null) {
      if(headerTitleRef !== null && headerSubtitleRef !== null) {
        gsap.timeline()
        .from(headerTitleRef.current, { y: 50, skewX: 10, opacity:0, duration: 1.5})
        .from(headerSubtitleRef.current, { y: 50, skewX: 10, opacity:0, duration: 0.75}, ">")
      }
    }
  }, [])

  return (
    <AppContainer ref={headerRef}>
      <AppTextSection>
        <AppTitle ref={headerTitleRef}>Saisonnier,</AppTitle>
        <AppSubTitle ref={headerSubtitleRef}>une consommation saine en <span id="mois">{thisMonth}</span></AppSubTitle>
      </AppTextSection>
    </AppContainer>
  )
}
