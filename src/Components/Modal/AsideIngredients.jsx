import React from 'react';
import styled from 'styled-components';

// ---------- CONTAINER
const IngredientsContainer = styled.section`
  width: 100%;
  padding: 0 5%;
`;

// ---------- TITRE : INGREDIENTS
const IngredientTitle = styled.p`
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

// ---------- LISTE DES INGREDIENTS
const IngredientList = styled.ul`
  padding: 0 5%;
  font-weight: 300;
`;
const IngredientItems = styled.li`
  margin-bottom: 5px;
  font-size: clamp(15px, 5.5vw, 20px);
`;


export default function Ingredients({ thisData }) {
  return (
    <IngredientsContainer>
      <IngredientTitle>Ingrédients : </IngredientTitle>
      <IngredientList>
        {thisData.recette.map((ingredient, index) => {
          return(
            <IngredientItems key={index}>{ingredient}</IngredientItems>       
          )
        })}
      </IngredientList> 
    </IngredientsContainer>
  )
}
