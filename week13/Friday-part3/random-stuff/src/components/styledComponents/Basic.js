import React from "react";
import styled, {keyframes} from 'styled-components';


const move = keyframes`
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(100%);
  }
`;

const Heading1a = styled.h1`
    animation: ${move} 2s ease infinite;
    //text-align: center;
    color: fuchsia;
`

const Heading1b = styled.h1`

    text-align: center;
    color: green;
`

const Basic = () => {
  return <>

    <div>
      <Heading1a>Hello There</Heading1a>
      <Heading1b>Hello There</Heading1b>
    </div>
  </>;
};

export default Basic;
