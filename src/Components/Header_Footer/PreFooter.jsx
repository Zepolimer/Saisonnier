import React from 'react';
import styled from 'styled-components';

const PreFooterContainer = styled.section`
  width: 100%;
  padding: 50px 0;
  display: flex; 
  align-items: center;
  justify-content: center;
`;

const PreFooterImg = styled.img`
  width: 300px;
  transition: transform 1s ease-in;

  &:hover {
    transform: rotate(90deg);
  }
`

export default function PreFooter() {
  return (
    <PreFooterContainer>
      <PreFooterImg src={process.env.PUBLIC_URL + '/images/cuisine.png'} alt="Une cusine de saison, pleine d'avantages !" />
    </PreFooterContainer>
  )
}
