import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ---------- CONTAINER
const TitleScrollContainer = styled.section`
  padding: 140px 0 0px 0;
`;

// ---------- WRAPPER GSAP SCROLL + TEXT (SPAN)
const ThisTitleScroll = styled.article`
  display: flex-wrap;
  white-space: nowrap;
  padding: 10px 0;

  span {
    font-size: clamp(45px, 12.3vw, 140px);
    -webkit-text-stroke: 1px #000000;
    color: transparent;
    font-weight: 900;
  }

  span:nth-child(2n+2) {
    color: #000000;
    -webkit-text-stroke: 0px #000000;
  }
`;


export default function AsideRecolteScroll() {

  const recolteScrollRef = useRef(null);
  const asideScroller = document.getElementById('asideScroller');
  
  useEffect(() => {
    if(recolteScrollRef) {
      console.log('ok')
      gsap
      .timeline()
      .from(recolteScrollRef.current, { x: 0, opacity: 0, ease: "slowMo" })
      .to(recolteScrollRef.current, {
        scrollTrigger: {
          trigger: asideScroller,
          scrub: 0.6,
          start: "top 100%",
          end: "bottom -200px",
          ease: "slowMo",
        }, x: -450,
      })
    }
  }, [])
  
  return (
    <TitleScrollContainer>
      <ThisTitleScroll ref={recolteScrollRef}>
        <span>* récolte *</span>
        <span> récolte </span>
        <span>* récolte *</span>
        <span> récolte </span>
        <span>* récolte *</span>
        <span> récolte </span>
        <span>* récolte *</span>
      </ThisTitleScroll>
    </TitleScrollContainer>
  )
}
