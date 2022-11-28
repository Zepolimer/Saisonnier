import React, { useEffect } from 'react';
import styled from 'styled-components';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// ---------- CONTAINER
const EatSeasonContainer = styled.section`
  width: 100%;
  padding: 100px 5% 100px 5%;

  background-color: #3CDE89;
  box-shadow: inset 5px 5px 20px #00000050;
`;

// ---------- TITLE
const EatSeasonTitle = styled.h4`
  font-size: clamp(20px, 8vw, 40px);
  color: #96e7b4;
  color: #3CDE89;
  margin-bottom: 50px;
`;

// ---------- TEXT MAIN CONTAINER
const EatSeasonWrapper = styled.article`
  margin: 30px 0;
`;

// ---------- TEXT ITEMS CONTAINER
const EatSeasonItems = styled.section`
  color: #000000;
  ${'' /* opacity: 0; */}
  ${'' /* transform: translateY(100px) skewX(10deg); */}
  margin-bottom: 40px;
  text-align: justify;

  @media screen and (min-width: 820px){
    width: 50%;
    position: relative;
    left: 50%;
  }
`;

// ---------- TEXT + SPAN
const EatSeasonMainText = styled.p`
  width: fit-content;
  margin-bottom: 10px;
  padding: 2px 5px;
  font-size: clamp(18px, 6.5vw, 22px);
  font-weight: 600;
  color: #FFFFFF;
  position: relative;
  z-index: 99;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    transform: skewX(10deg);
    height: 100%;
    width: 100%;
    background-color: #3CDE89;
    z-index: -1;
  }
`;
const EatSeasonText = styled.p`
  font-size: clamp(15px, 5.5vw, 20px);
  font-weight: 300;

  span {
    font-weight: 400;
  }
`;

const PreFooterContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  display: flex; 
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 820px){
    padding: 0px 0;
    width: 50%;
    justify-content: flex-start;
  }
`;

const PreFooterImg = styled.img`
  width: 300px;
  transition: transform 1s ease-in;

  &:hover {
    transform: rotate(90deg);
  }
`;

const ScrollerWrapperFlex = styled.section`
  @media screen and (min-width: 860px){
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`


export default function AdvantagesEat() {

    useEffect(() => { 

      gsap.timeline({
        scrollTrigger: {
          trigger:"section.imgPinned",
          endTrigger: "footer",
          start: () => "top top",
          end: () => "top top",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        }
      })
      .from("section.reveal", {
        opacity:1,
      })

      ScrollTrigger.create({
        trigger: "section.eatSeason",
        start: () => "top 80%",
        end: () => "bottom 0%",
        onEnter: () => { 
          gsap
          .to("section.eatSeason", { 
            duration: 0.65, 
            backgroundColor: "#FFFFFF",
            ease: "slowMo",
          })
        },
        onLeaveBack: () => { 
          gsap
          .to("section.eatSeason", { 
            duration: 0.65, 
            backgroundColor: "#3CDE89",
            ease: "slowMo",
          })
        },
        onComplete: () => ScrollTrigger.refresh()
      });

    }, [])

  return (
    <EatSeasonContainer className="eatSeason">
      <EatSeasonTitle className="titleEat">Avantages de manger des produits de saison</EatSeasonTitle>

      <ScrollerWrapperFlex className="scrollerWrapEat">
      <PreFooterContainer className="imgPinned">
        <PreFooterImg src={process.env.PUBLIC_URL + '/images/cuisine.png'} alt="Une cusine de saison, pleine d'avantages !" />
      </PreFooterContainer>

      <EatSeasonWrapper className="revealWrapper">
        <EatSeasonItems className="reveal">
          <EatSeasonMainText>Une meilleure nutrition !</EatSeasonMainText>
          <EatSeasonText>Les aliments sont cultivés dans des conditions optimales jusqu'à maturité et sont ainsi <span>plus riches en nutriments</span>.</EatSeasonText>
        </EatSeasonItems>
        <EatSeasonItems className="reveal">
          <EatSeasonMainText>Ça a plus de goût !</EatSeasonMainText>
          <EatSeasonText>Cueillis à maturité, les aliments sont <span>très savoureux</span> par rapport à des aliments qui, par exemple, sont produits en hiver alors qu'ils devraient l'être en été.</EatSeasonText>
        </EatSeasonItems>
        <EatSeasonItems className="reveal">
          <EatSeasonMainText>Répondre à nos besoins !</EatSeasonMainText>
          <EatSeasonText><span>En hiver</span>, les aliments sont généralement sources de glucides, qui nous apportent de l'énergie ou encore riches en vitame C, qui stimule nos défenses immunitaires.</EatSeasonText>
          <EatSeasonText><span>En été</span>, les aliments sont naturellement riche en eau pour répondre au risque de déshydratation dû à une hausse de la température.</EatSeasonText>
        </EatSeasonItems>
        <EatSeasonItems className="reveal">
          <EatSeasonMainText>Prendre soin de la planète !</EatSeasonMainText>
          <EatSeasonText>Généralement, lorsque l'on consomme des produits de saison, on a tendancer à privilégier la consommation locale ou en circuit-court, ce qui a des <span>aspects positifs sur la planète</span>, notamment la réduction de transports et donc de pollution.</EatSeasonText>
        </EatSeasonItems>
        <EatSeasonItems className="reveal">
          <EatSeasonMainText>Ça ne coûte pas un bras !</EatSeasonMainText>
          <EatSeasonText>En plus de contribuer au bien-être de la planète, la <span>consommation locale et de saison</span> est plus facile à produire et donc généralement moins onéreuse.</EatSeasonText>
        </EatSeasonItems>
      </EatSeasonWrapper>
      </ScrollerWrapperFlex>
    </EatSeasonContainer>
  )
}