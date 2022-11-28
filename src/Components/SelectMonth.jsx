import React, { useEffect } from 'react';
import styled from 'styled-components';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// ---------- CONTAINER
const SelectMonthContainer = styled.section`
  width: 100%;
  background-color: #FFFFFF;
  color: #000000;
  padding: 180px 5% 0 5%;
  margin-bottom: 100px;
  box-shadow: inset 0px -10px 10px #00000050;
  transition: background-color 0.3s ease;

  @media screen and (min-width: 768px){
    padding: 180px 10% 0 10%;
  }
`;

const SelectMonthTitle = styled.h3`
  font-size: clamp(20px, 8vw, 35px);
  font-weight: 500;
  padding: 2px 5px;
  margin: 0 0 50px 0;
  color: #3CDE89;
  width: fit-content;
  position: relative;
  z-index: 99999;
  opacity: 0;
  transform: translateY(100px) skewX(10deg);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    transform: skewX(10deg);
    height: 100%;
    width: 100%;
    background-color: #FFFFFF;
    z-index: -1;
  }
`;

// ---------- SECTION PARAGRAPHE : TEXT
const SelectMonthParagraph = styled.p`
  max-width: 1000px;
  font-size: clamp(15px, 5.5vw, 20px);
  font-weight: 300;
  color: #FFFFFF;
  opacity: 0;
  transform: translateY(100px) skewX(10deg);

  span { font-weight: 400; }
`;

// ---------- SECTION FORMULAIRE : TOGGLE LES MOIS
const FormContainer = styled.form`
  width: 70%;
  max-width: 400px;
  margin: 0 auto;
  transform: translateY(25px);
`;
const FormSelect = styled.select`
  width: 100%;
  padding: 15px 10px;
  border-radius: 5px;
  border: 2px solid #FFFFFF;
  background-color: #3CDF89;
  font-size: clamp(15px, 5.5vw, 18px);
  font-weight: 300;
  color: #FFFFFF;
  text-transform: uppercase;
  -webkit-appearance: button;
     -moz-appearance: button;
  transition: background-color 1s ease-in-out, border 1s ease-out;
  cursor: pointer;

  &:focus, &:hover {
    background-color: #020202;
    border: 2px dashed #FFFFFF;
    outline: transparent;
  }

  option {
    background-color: #FFFFFF;
    color: #760000;
    -webkit-appearance: button;
       -moz-appearance: button;
  }
`;

export default function SelectMonth({ monthSaison, thisChange }) {

  useEffect(() => { 
    ScrollTrigger.create({
      trigger: "section#monthReveal",
      start: "top 60%",
      end: "bottom 0%",
      onEnter: () => { 
        gsap.to("h3", { 
          duration: 1.5, 
          opacity: "1",
          transform: "translateY(0)",
          skewX: 0,
          ease: "slowMo",
        }); 
      },
      onLeaveBack: () => { 
        gsap.to("h3", { 
          duration: 1.2, 
          opacity: "0",
          transform: "translateY(100px)",
          skewX: 10,
          ease: "slowMo",
        }); 
      },
    });

    ScrollTrigger.create({
      trigger: "section#monthReveal",
      start: "top 50%",
      end: "bottom 0%",
      onEnter: () => { 
        gsap.to("p#textReveal", { 
          duration: 1.5, 
          opacity: "1",
          transform: "translateY(0)",
          skewX: 0,
          ease: "slowMo",
        }); 
      },
      onLeaveBack: () => { 
        gsap.to("p#textReveal", { 
          duration: 1.2, 
          opacity: "0",
          transform: "translateY(100px)",
          skewX: 10,
          ease: "slowMo",
        }); 
      },
    });

    ScrollTrigger.create({
      trigger: "section#monthReveal",
      start: "top 40%",
      end: "bottom 0%",
      onEnter: () => { 
        gsap.to("p#textReveal1", { 
          duration: 1.5, 
          opacity: "1",
          transform: "translateY(0)",
          skewX: 0,
          ease: "slowMo",
        }); 
      },
      onLeaveBack: () => { 
        gsap.to("p#textReveal1", { 
          duration: 1.2, 
          opacity: "0",
          transform: "translateY(100px)",
          skewX: 10,
          ease: "slowMo",
        }); 
      },
    });

    ScrollTrigger.create({
      trigger: "section#monthReveal",
      start: "top 30%",
      end: "bottom 0%",
      onEnter: () => { 
        gsap.to("p#textReveal2", { 
          duration: 1.5, 
          opacity: "1",
          transform: "translateY(0)",
          skewX: 0,
          ease: "slowMo",
        }); 
      },
      onLeaveBack: () => { 
        gsap.to("p#textReveal2", { 
          duration: 1.2, 
          opacity: "0",
          transform: "translateY(100px)",
          skewX: 10,
          ease: "slowMo",
        }); 
      },
    });

    ScrollTrigger.create({
      trigger: "section#monthReveal",
      start: "top 15%",
      end: "bottom 0%",
      onEnter: () => { 
        gsap.to("p#textReveal3", { 
          duration: 1.5, 
          opacity: "1",
          transform: "translateY(0)",
          skewX: 0,
          ease: "slowMo",
        }); 
      },
      onLeaveBack: () => { 
        gsap.to("p#textReveal3", { 
          duration: 1.2, 
          opacity: "0",
          transform: "translateY(100px)",
          skewX: 10,
          ease: "slowMo",
        }); 
      },
    });

    ScrollTrigger.create({
      trigger: "section#monthReveal",
      start: () => "top 80%",
      end: () => "bottom 0%",
      onEnter: () => { 
        gsap
        .to("section#monthReveal", { 
          duration: 0.65, 
          backgroundColor: "#3CDE89",
          ease: "slowMo",
        })
      },
      onLeaveBack: () => { 
        gsap
        .to("section#monthReveal", { 
          duration: 0.65, 
          backgroundColor: "#FFFFFF",
          ease: "slowMo",
        })
      },
      onComplete: () => ScrollTrigger.refresh()
    });
  }, [])

  return (
    <SelectMonthContainer id="monthReveal">
      <SelectMonthTitle id="monthTitle">Présentation</SelectMonthTitle>
      <SelectMonthParagraph style={{ marginBottom: "20px" }} id="textReveal">Découvrez chaque mois les fruits & légumes à consommer ! Une fiche personnalisée par aliment est disponible et contient diverses informations à son sujet.</SelectMonthParagraph>
      <SelectMonthParagraph style={{ marginBottom: "20px" }} id="textReveal1">Ici, on parle <span>d'alimentation saine</span>, notamment de fruits et légumes de saison. Mais alors, pourquoi manger un produit de saison ?</SelectMonthParagraph>
      
      <SelectMonthParagraph style={{ marginBottom: "80px" }} id="textReveal2">Pour répondre assez simplement, il est recommandé d'adapter sa consommation aux produits dont <span>leur croissance respecte leur cycle naturel</span> selon leur zone de production, <span>sans que l'homme n'intervienne</span> pour accélerer leur maturité.</SelectMonthParagraph>

      <SelectMonthParagraph style={{ marginBottom: "50px" }} id="textReveal3">Vous pouvez consulter les différents produits de saison en sélectionnant le mois ci-dessous :</SelectMonthParagraph>

      <FormContainer>
        <FormSelect onChange={thisChange}>
          <option value={""}>Actuel : {monthSaison}</option>
          <option value={"janvier"}>Janvier</option>
          <option value={"février"}>Février</option>
          <option value={"mars"}>Mars</option>
          <option value={"avril"}>Avril</option>
          <option value={"mai"}>Mai</option>
          <option value={"juin"}>Juin</option>
          <option value={"juillet"}>Juillet</option>
          <option value={"aout"}>Aout</option>
          <option value={"septembre"}>Septembre</option>
          <option value={"octobre"}>Octobre</option>
          <option value={"novembre"}>Novembre</option>
          <option value={"décembre"}>Décembre</option>
        </FormSelect>
      </FormContainer>
    </SelectMonthContainer>
  )
}
