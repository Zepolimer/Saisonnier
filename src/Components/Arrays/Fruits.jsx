import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {FruitData} from '../../Data/FruitsData';
import Aside from '../Modal/Aside';

// ---------- CONTAINER
const FruitContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 850px){
    justify-content: flex-start;
  }
`;

// ---------- LISTE SOUS FORME DE CARD
const FruitMapped = styled.button`
  border: 1px solid #3cde89;
  border-radius: 5px;
  width: clamp(140px, 40vw, 160px);
  height: clamp(150px, 12vh, 170px);
  margin: 0 10px 10px 0;
  background-color: #FFFFFF;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 20;

  transition: color 0.4s ease-in-out, border 0.4s ease-in-out;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 100%;
    bottom: 0;
    left: 0;
    background-color: rgb(178, 231, 157);
    background-color: #82E3B1;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    z-index: -1;
    border-radius: 5px;
  }
  &:hover::after, &:focus::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &:hover, &:focus { 
    color: #FFFFFF;
    outline: 1px dashed #3cde89;
    outline: transparent;
    border: 3px dashed #3cde89;
  }
`;

// ---------- NOM DU FRUIT
const FruitName = styled.span`
  text-transform: uppercase;
  margin-top: 10px;
  font-family: "Oswald", sans-serif;
  font-size: clamp(14px, 7vw, 16px);
  font-weight: 300;
`;


export default function Fruits({ monthSaison }) {

  const [modalBg, setmodalBg] = useState(true);
  const [modalAside, setmodalAside] = useState(false);

  const [thisIndex, setThisIndex] = useState(null);
  const body = document.querySelector("body");

  const toggleModalAside = () => {
    setmodalAside(!modalAside);
  }

  useEffect(() => {
    if(modalAside === true) {
      body.style.overflow = "hidden";
      setmodalBg(true)
    } else {
      body.style.overflow = "auto";
      setmodalBg(false)
    }
  }, [modalAside])

  return (
    <FruitContainer>
      {FruitData.map((item, index) => {
        let itemSaison = item.saison;

        if(itemSaison && itemSaison.includes(monthSaison)){
          return (
            <FruitMapped key={index} onClick={() => {
              setmodalAside(true); 
              setThisIndex(item);
            }}>
              <img src={item.image} alt={item.name} />
              <FruitName>{item.name}</FruitName>
            </FruitMapped>
          )
        }
      })}

      {thisIndex && 
        <Aside 
          data={thisIndex} 
          modalBg={modalBg} 
          modalAside={modalAside} 
          toggleModalAside={toggleModalAside}
        />
      }
    </FruitContainer>
  )
}
