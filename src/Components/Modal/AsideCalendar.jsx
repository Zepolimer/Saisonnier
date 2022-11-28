import React from 'react';
import styled from 'styled-components';

// ---------- CONTAINER + SPAN POUR LES DIFFERENTS MOIS
const ArrayMonthWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;

  span {
    border: 1px solid #FFFFFF;
    width: 100%;
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
`;


export default function Calendar({ thisData }) {
  const thisSaison = thisData.saison;

  return (
    <ArrayMonthWrapper>
      <span style={{ backgroundColor: thisSaison.includes("janvier") ? "#3cde89" : "#E38B82"}}>J</span>
      <span style={{ backgroundColor: thisSaison.includes("février") ? "#3cde89" : "#E38B82"}}>F</span>
      <span style={{ backgroundColor: thisSaison.includes("mars") ? "#3cde89" : "#E38B82"}}>M</span>
      <span style={{ backgroundColor: thisSaison.includes("avril") ? "#3cde89" : "#E38B82"}}>A</span>
      <span style={{ backgroundColor: thisSaison.includes("mai") ? "#3cde89" : "#E38B82"}}>M</span>
      <span style={{ backgroundColor: thisSaison.includes("juin") ? "#3cde89" : "#E38B82"}}>J</span>
      <span style={{ backgroundColor: thisSaison.includes("juillet") ? "#3cde89" : "#E38B82"}}>J</span>
      <span style={{ backgroundColor: thisSaison.includes("aout") ? "#3cde89" : "#E38B82"}}>A</span>
      <span style={{ backgroundColor: thisSaison.includes("septembre") ? "#3cde89" : "#E38B82"}}>S</span>
      <span style={{ backgroundColor: thisSaison.includes("octobre") ? "#3cde89" : "#E38B82"}}>O</span>
      <span style={{ backgroundColor: thisSaison.includes("novembre") ? "#3cde89" : "#E38B82"}}>N</span>
      <span style={{ backgroundColor: thisSaison.includes("décembre") ? "#3cde89" : "#E38B82"}}>D</span>
  </ArrayMonthWrapper>
  )
}
