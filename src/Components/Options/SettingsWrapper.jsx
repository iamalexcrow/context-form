import React from 'react';
//components
import Options from './Options';
import Price from '../Price/Price';
//styled
import styled from 'styled-components'
import {device} from '../styledComponents';

const SettingsWrapper = () => {
    return (
        <Wrapper>
            <Options/>
            <Price/>
        </Wrapper>
    )
}
export default SettingsWrapper;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 24.5%;
  grid-template-rows: 1fr;
  width: 70vw;
  margin: 0 auto;
  grid-gap: 15px;

  @media ${device.laptopS} {
    grid-template-columns: auto 32%;
}
@media ${device.tabletL} {
    display: flex;
    flex-direction: column;
}
`