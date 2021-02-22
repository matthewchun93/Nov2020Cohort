import React from "react";
import styled from 'styled-components';

const HoverButton = styled.button`
  padding: 8px 12px;
  border: 0px;
  background: fuchsia;
  transition: all 300ms ease;
  border-radius: 6px;

  :hover{
    background-color: pink;
    color: fuchsia;
  }

`;

const PseudoSelectors = () => {
  return <>
  
    <HoverButton>Click Me</HoverButton>
  </>;
};

export default PseudoSelectors;
