import React from 'react';
import styled from 'styled-components';

const AsideNutriscoreContainer = styled.section`
  width: 100%;
  padding: 100px 5%;
`;

const NutriscoreTitle = styled.h4`
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
const NutriscoreText = styled.p`
  margin: 30px 0 0 0;
  font-size: clamp(15px, 5.5vw, 20px);
  font-weight: 300;
`;


const ArrayNutriscoreWrapper = styled.div`
  width: fit-content;
  height: auto;
  margin: 40px auto;
  display: flex;
  align-items: center;

  span {
    border: 1px solid #FFFFFF;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }
`;

export default function AsideNutriscore({ thisData }) {
  
  const thisBienfaits = thisData.bienfaits;
  const thisNutriscore = thisData.nutriscore;

  return (
    <AsideNutriscoreContainer>
      <NutriscoreTitle>Bienfaits</NutriscoreTitle>
      <NutriscoreText>{thisBienfaits}</NutriscoreText>

      <ArrayNutriscoreWrapper>
        <span 
        style={{ 
          backgroundColor: "#3CDE89", 
          padding: thisNutriscore.includes("A") ? "10px 20px" : "5px 15px", 
          color: thisNutriscore.includes("A") ? "#FFFFFF" : "#00000080"  
        }}>A</span>

        <span 
        style={{ 
          backgroundColor: "#74FAB5", 
          padding: thisNutriscore.includes("B") ? "10px 20px" : "5px 15px", 
          color: thisNutriscore.includes("B") ? "#FFFFFF" : "#00000080" 
        }}>B</span>

        <span 
        style={{ 
          backgroundColor: "#F1BB57", 
          padding: thisNutriscore.includes("C") ? "10px 20px" : "5px 15px", 
          color: thisNutriscore.includes("C") ? "#FFFFFF" : "#00000080" 
        }}>C</span>

        <span 
        style={{ 
          backgroundColor: "#F19C57", 
          padding: thisNutriscore.includes("D") ? "10px 20px" : "5px 15px", 
          color: thisNutriscore.includes("D") ? "#FFFFFF" : "#00000080" 
        }}>D</span>

        <span 
        style={{ 
          backgroundColor: "#E38B82", 
          padding: thisNutriscore.includes("E") ? "10px 20px" : "5px 15px", 
          color: thisNutriscore.includes("E") ? "#FFFFFF" : "#00000080" 
        }}>E</span>
      </ArrayNutriscoreWrapper>
    </AsideNutriscoreContainer>
  )
}
