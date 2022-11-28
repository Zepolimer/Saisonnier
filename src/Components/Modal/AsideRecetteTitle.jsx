import React from 'react';
import styled from 'styled-components';

// ---------- CONTAINER
const AsideRecetteTitle = styled.section`
  width: 100%;
  margin: 80px 0 40px 0;
  padding: 0px 5%;
`;

// ---------- L'IDEE RECETTE
const RecetteIdea = styled.h4`
  width: fit-content;
  font-size: clamp(25px, 10.5vw, 55px);
  -webkit-text-stroke: 1px #000000;
  color: #FFFFFF;
  font-weight: 900;
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
    background-color: #3cde89;
    z-index: -1;
  }
`;

// ---------- NOM DE LA RECETTE
const RecetteName = styled.span`
  font-size: clamp(25px, 10.5vw, 55px);
  color: #000000;
  font-weight: 900;
`;

export default function RecetteTitle({ thisData }) {

  return (
    <AsideRecetteTitle>
      <RecetteIdea>* L'idée recette</RecetteIdea>
      <RecetteName>{thisData.nomRecette}</RecetteName>
    </AsideRecetteTitle>
  )
}
