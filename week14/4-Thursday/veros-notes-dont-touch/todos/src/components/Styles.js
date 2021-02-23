import styled from "styled-components";

export const DivSC = styled.div`
  background-color: ${props => props.bgc || "purple"};
  width: 400px;
  height: 400px;
  color: white;
`;

const Div1 = styled.div`

  color: ${({theme}) => theme.colors.primary};

  color: ${({ theme }) => theme.color.primary};

  background-color: ${props => props.bcc || 'orange'};
  
`;

export const H1S = styled.h1`
  text-align:center;
  color: purple;

`;

export const Paper = styled.div`

  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  background-color: ${props => props.bgc || "lightblue"};
  height: ${props => props.height || "300px"};
  width: ${props => props.width || "300px"};
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  
`;

export const ULHover = styled.ul`
  
  li:hover{
    background-color: #f1efef;
  }

  li:hover .button{
    display: inline-block;
    padding: 0px 3px 3px 3px;
    margin: 0px;
    
  }

`;

export const SpanBadge = styled.span`
  
  background-color: #f7f4f4;
  padding: 3px;
  margin: 2px;
  border-radius: 6px;

  :hover{
      background-color: yellow;
  }

`;

