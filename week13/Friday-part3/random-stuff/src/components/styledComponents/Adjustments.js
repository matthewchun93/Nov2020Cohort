import React from "react";
import styled from 'styled-components';


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const StripedLi = styled.li`
  
  color: purple;

  /* ${props =>{
    if(props.even){
      return `
        color: white;
        background-color: black;
      `
    }
  }} */


  ${props =>props.even &&
  ` 
        color: white;
        background-color: black;   
  `
  }
  
`;

const Adjustments = (props) => {

  
  return <ul>
    {days.map((day, i) =>{
      return <StripedLi even={(i+1)%2 === 0 } >{day}</StripedLi>
    })}
  </ul>;
};

export default Adjustments;
