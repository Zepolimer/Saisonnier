import React, { useEffect } from 'react';
import styled from 'styled-components';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ---------- CONTAINER
const FooterContainer = styled.footer`
  width: 100%;
  padding: 100px 5% 50px 5%;
  background-color: #3CDE89;
  background-color: #FFFFFF;
  transition: background-color 0.25s ease;

  #imageFooter {
    display: none;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 768px){
    display: flex;
    flex-direction: row;

    #imageFooter{
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
`;

// ---------- SECTIONS TO DISPLAY FLEX
const FooterSections = styled.section`
  width: 100%;
`;

// ---------- TEXT DU FOOTER
const FooterParagraph = styled.p`
  color: #195E3B;
  color: #FFFFFF;
  margin-top: 50px;
  transform: translateX(-100px) skewX(10deg);
  opacity: 0;
`;

// ---------- ANCRE DU FOOTER
const FooterAnchor = styled.a`
  text-decoration: none;
  width: fit-content;
  color: #195E3B;
  color: #FFFFFF;
  position: relative;
  transition: color 1.2s ease, transform 1.2s ease;
  z-index: 20;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -3px;
    left: 0;
    background-color: #3CDE89;
    transform-origin: bottom right;
    transition: height 0.8s cubic-bezier(0.86, 0, 0.07, 1), transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    z-index: -1;
  }
  &:hover::after {
    height: 22px;
    transform: skewX(5deg);
    transform-origin: bottom left;
  }
  &:hover { 
    color: #FFFFFF;
  }
`;

// ---------- IMAGE DU FOOTER
const FooterImage = styled.img`
  width: clamp(200px, 60%, 400px);
  transition: transform 1.2s ease-out;

  &:hover {
    transform: translateX(-15%) scale(1.1);
  }
`;


export default function Footer() {

  const footerFullDate = new Date();
  const footerDate = footerFullDate.getFullYear();

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "footer",
      start: () => "top 80%",
      end: () => "bottom 0%",
      onEnter: () => { 
        gsap
        .to("footer", { 
          duration: 0.65, 
          backgroundColor: "#000000",
          ease: "slowMo",
        })
      },
      onLeaveBack: () => { 
        gsap
        .to("footer", { 
          duration: 0.65, 
          backgroundColor: "#FFFFFF",
          ease: "slowMo",
        })
      },
      onComplete: () => ScrollTrigger.refresh()
    });

    ScrollTrigger.create({
      trigger: "footer",
      start: () => "top 80%",
      end: () => "bottom 0%",
      onEnter: () => { 
        gsap
        .to("#footerOne", { 
          duration: 1.5, 
          opacity: "1",
          transform: "translateX(0)",
          skewX: 0,
          ease: "slowMo",
        })
      },
      onLeaveBack: () => { 
        gsap
        .to("#footerOne", { 
          duration: 1.2, 
          opacity: "0",
          transform: "translateX(-100px)",
          skewX: 10,
          ease: "slowMo",
        })
      },
      onComplete: () => ScrollTrigger.refresh()
    });

    ScrollTrigger.create({
      trigger: "footer",
      start: () => "top 70%",
      end: () => "bottom 0%",
      onEnter: () => { 
        gsap
        .to("#footerTwo", { 
          duration: 1.5, 
          opacity: "1",
          transform: "translateX(0)",
          skewX: 0,
          ease: "slowMo",
        })
      },
      onLeaveBack: () => { 
        gsap
        .to("#footerTwo", { 
          duration: 1.2, 
          opacity: "0",
          transform: "translateX(-100px)",
          skewX: 10,
          ease: "slowMo",
        })
      },
      onComplete: () => ScrollTrigger.refresh()
    });

    ScrollTrigger.create({
      trigger: "footer",
      start: () => "top 60%",
      end: () => "bottom 0%",
      onEnter: () => { 
        gsap
        .to("#footerThree", { 
          duration: 1.5, 
          opacity: "1",
          transform: "translateX(0)",
          skewX: 0,
          ease: "slowMo",
        })
      },
      onLeaveBack: () => { 
        gsap
        .to("#footerThree", { 
          duration: 1.2, 
          opacity: "0",
          transform: "translateX(-100px)",
          skewX: 10,
          ease: "slowMo",
        })
      },
      onComplete: () => ScrollTrigger.refresh()
    });

    ScrollTrigger.create({
      trigger: "footer",
      start: () => "top 50%",
      end: () => "bottom 0%",
      onEnter: () => { 
        gsap
        .to("#footerFour", { 
          duration: 1.5, 
          opacity: "1",
          transform: "translateX(0)",
          skewX: 0,
          ease: "slowMo",
        })
      },
      onLeaveBack: () => { 
        gsap
        .to("#footerFour", { 
          duration: 1.2, 
          opacity: "0",
          transform: "translateX(-100px)",
          skewX: 10,
          ease: "slowMo",
        })
      },
      onComplete: () => ScrollTrigger.refresh()
    });
  }, [])

  return (
    <FooterContainer>
      <FooterSections>
        <FooterParagraph style={{ marginTop: "0px" }} id="footerOne">Ce site a pour objectif de recenser différents aliments (fruits, légumes, fruits à coque) en fonction de leur période optimale de consommation.</FooterParagraph>

        <FooterParagraph id="footerTwo">Après de longues recherches & comme personne n'est parfait, il est possible que des informations soient erronées. Si vous constatez une erreur de ma part vis à vis de leur période de consommation, ou de toute autre information, n'hésitez pas à me contacter à <FooterAnchor href={"mailto:remilopez.dev@gmail.com"}>cette adresse</FooterAnchor>.</FooterParagraph>

        <FooterParagraph id="footerThree">Crédits image & pictogrammes : <FooterAnchor href='https://www.freepik.com/photos/horticulture' target="_blank" rel="noreferrer">Prostooleh</FooterAnchor> & <FooterAnchor href="https://icons8.com" target="_blank" rel="noreferrer">Icons8</FooterAnchor></FooterParagraph>

        <FooterParagraph id="footerFour">{footerDate} - Site développé par <FooterAnchor href="https://remilopez.com" target="_blank" rel="noreferrer">Rémi Lopez</FooterAnchor></FooterParagraph>
      </FooterSections>

      <FooterSections id="imageFooter">
        <FooterImage src={process.env.PUBLIC_URL + 'images/footerImg.png'} alt="Développeur junior travaillant sur son ordinateur, une tasse de café à la main" />
      </FooterSections>
    </FooterContainer>
  )
}
