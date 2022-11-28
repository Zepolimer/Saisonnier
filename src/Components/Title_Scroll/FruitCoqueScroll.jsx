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
    text-transform: capitalize;
  }
`;


export default function FruitCoqueScroll({ thisTitle, monthSaison }) {

  const fruitCoqueScrollRef = useRef(null);
  
  useEffect(() => {
    if(fruitCoqueScrollRef) {
      gsap
      .timeline()
      .from(fruitCoqueScrollRef.current, { x: -550, opacity: 0, ease: "slowMo" })
      .to(fruitCoqueScrollRef.current, {
        scrollTrigger: {
          trigger: fruitCoqueScrollRef.current,
          scrub: 0.5,
          start: () => "top 100%",
          end: () => "bottom -275px",
          ease: "slowMo",
        }, x: 0, onComplete: () => ScrollTrigger.refresh()
      })
    }
  }, [])
  
  return (
    <TitleScrollContainer>
      <ThisTitleScroll ref={fruitCoqueScrollRef}>
        <span>* {thisTitle} *</span>
        <span> {monthSaison} </span>
        <span>* {thisTitle} *</span>
        <span> {monthSaison} </span>
        <span>* {thisTitle} *</span>
        <span> {monthSaison} </span>
        <span>* {thisTitle} *</span>
      </ThisTitleScroll>
    </TitleScrollContainer>
  )
}