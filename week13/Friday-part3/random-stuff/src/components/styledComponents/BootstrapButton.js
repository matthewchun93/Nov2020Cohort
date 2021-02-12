import React from "react";
import {Button} from 'react-bootstrap';
import styled from 'styled-components';

const FullWidthButton = styled(Button)`

  width: 100%;
  height: 100px;
  color: white;
  font-size: 40px;

`

const BootstrapButton = () => {


  return <>
    <FullWidthButton variant="warning">Warning</FullWidthButton>
  </>;
};

export default BootstrapButton;
