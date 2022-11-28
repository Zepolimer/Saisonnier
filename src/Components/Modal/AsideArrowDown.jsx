import React from 'react';
import styled from 'styled-components';

const ArrowDownContainer = styled.section`
  width: 100%;
  height: auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowDownImg = styled.img`
  width: 60%;
  max-width: 250px;
  height: auto;
`;

export default function AsideArrowDown() {
  return (
    <ArrowDownContainer>
      <ArrowDownImg src={process.env.PUBLIC_URL + 'images/arrowDown.png'} alt="Scrollez pour voir l'idée recette" />
    </ArrowDownContainer>
  )
}
