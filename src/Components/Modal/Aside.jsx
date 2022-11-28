import React from 'react';
import styled from 'styled-components';

import Calendar from './AsideCalendar';
import AsideHeader from './AsideHeader';
import AsideNutriscore from './AsideNutriscore';
import AsideArrowDown from './AsideArrowDown';
import RecetteTitle from './AsideRecetteTitle';
import Ingredients from './AsideIngredients';
import Preparation from './AsidePreparation';
import FooterCarousel from './AsideFooter';


const AsideBg = styled.section`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;

  transition: opacity 0.75s ease;
  opacity: ${({ modalBg }) => (modalBg ? "1" : "0")};
  height: ${({ modalBg }) => (modalBg ? "100vh" : "0")};
  transform: ${({ modalBg }) => modalBg ? "translateY(0)" : "translateY(101%)"};

  background: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.3px);
  -webkit-backdrop-filter: blur(9.3px);

  z-index: 999;
`;

// ---------- MAIN CONTAINER
const AsideContainer = styled.aside`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 95%;
  max-width: 900px;
  height: 96vh;

  position: fixed;
  top: 2.2rem;
  left: 50%;
  bottom: ${({ modalAside }) => (modalAside ? "1.8rem" : "0%")};
  transform: ${({ modalAside }) => (modalAside ? "translate(-50%, -2%)" : "translate(-50%, 101%)")};
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0px 10px 20px #00000060;

  z-index: 1000 !important;

  transition-property: opacity, bottom, transform;
  transition-duration: 1.75s;
  transition-timing-function: ease;
  transition: transform 1.5s cubic-bezier(.11, .57, .55, .9);
`;

// ---------- HEADER PART
const AsideTop = styled.section`
  width: 100%;
  height: 60px;
  display: flex;
  position: relative;
`;
const CloseModal = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid #000;
  width: fit-content;
  padding: 10px 14px;
  border-radius: 50%;
  backgorund-color: #F2F2F2;
  color: #000;
  transition: transform 1s ease, background-color 1s ease, color 1s ease;
  cursor: pointer;

  &:focus, &:hover {
    background-color: #000000;
    color: #FFFFFF;
    border: 1px dotted #000;
    outline: transparent;
    transform: rotate(-180deg);
  }
`;

// ---------- TITRE FOND NOIR + TEXT
const TitleBlackBg = styled.p`
  margin: 0 5%;
  font-size: clamp(20px, 8vw, 35px);
  font-weight: 500;
  padding: 2px 5px;
  color: #FFFFFF;
  width: fit-content;
  position: relative;
  z-index: 99999;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    transform: skewX(10deg);
    height: 100%;
    width: 100%;
    background-color: #000000;
    z-index: -1;
  }
`;
const TextBlackBg = styled.p`
  margin: 30px 0 0 0;
  padding: 0 5% 120px 5%;
  font-size: clamp(15px, 5.5vw, 20px);
  font-weight: 300;
`;
const TextBlackBgOther = styled.p`
  margin: 10px 0 0 0;
  padding: 0 5% 120px 5%;
  font-size: clamp(15px, 5.5vw, 20px);
  font-weight: 300;

  span {
    font-weight: 500;
  }
`;


export default function Aside({ data, modalBg, modalAside, toggleModalAside }) {

  const thisData = data;

  return (
    <AsideBg modalBg={modalBg}>
      <AsideContainer modalAside={modalAside} toggleModalAside={toggleModalAside}>
        <AsideTop>
          <CloseModal onClick={toggleModalAside}>X</CloseModal>
        </AsideTop>

        <Calendar thisData={thisData} />

        <AsideHeader thisData={thisData} />

        <AsideNutriscore thisData={thisData} />

        <TitleBlackBg>Récolte</TitleBlackBg>
        <TextBlackBg>{thisData.recolte}</TextBlackBg>

        <TitleBlackBg>Comment choisir ?</TitleBlackBg>
        <TextBlackBg style={{ paddingBottom: "10px" }}>{thisData.bienChoisir}</TextBlackBg>
        <TextBlackBgOther><span>Conservation</span> : {thisData.conservation}</TextBlackBgOther>

        <TitleBlackBg>Moment culture</TitleBlackBg>
        <TextBlackBg>{thisData.funFact}</TextBlackBg>

        {thisData.nomRecette && <AsideArrowDown />}
        {thisData.nomRecette && <RecetteTitle thisData={thisData} />}

        {thisData.recette && <Ingredients thisData={thisData} />}

        {thisData.etapesRecette && <Preparation thisData={thisData} /> }

        <FooterCarousel thisData={thisData} />
      </AsideContainer>
    </AsideBg>
  )
}
