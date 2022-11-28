import React from 'react';
import styled from 'styled-components';

// ---------- CONTAINER
const PreparationContainer = styled.section`
  width: 100%;
  padding: 0 5%;
`;

// ---------- TITRE : PREPARATION
const PreparationTitle = styled.p`
  margin: 60px 0 10px 0;
  text-transform: uppercase;
  font-weight: 500;
  padding: 2px 5px;
  color: #FFFFFF;
  font-size: clamp(18px, 5.5vw, 24px);
  width: fit-content;
  position: relative;
  z-index: 99999;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    transform: skewX(-10deg);
    height: 100%;
    width: 100%;
    background-color: #000000;
    z-index: -1;
  }
`;

// ---------- LISTE DE LA PREPARATION
const PreparationList = styled.ol`
  padding: 0 5%;
  font-weight: 300;
`;
const PreparationItems = styled.li`
  margin-bottom: 15px;
  font-size: clamp(15px, 5.5vw, 20px);
`;


export default function Preparation({ thisData }) {
  return (
    <PreparationContainer>
      <PreparationTitle>Préparation : </PreparationTitle>
      <PreparationList>
        {thisData.etapesRecette.map((etape, index) => {
          return(         
            <PreparationItems key={index}>{etape}</PreparationItems>   
          )
        })}
      </PreparationList>
    </PreparationContainer>
  )
}
