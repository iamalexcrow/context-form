import React from 'react';
//components

import ResetBox from './ResetBox';
import SettingsSelect from './SettingsSelect';
//styled
import {Title, device} from '../styledComponents';
import styled from 'styled-components';

const Options = () => {
    return (
        <Wrapper>
            <Title>Параметры</Title>
            <ResetBox/>
            <SettingsSelect/>
        </Wrapper>
    )
}

export default Options;

const Wrapper = styled.div`
grid-column: 1/2;
grid-row: 2/3;
@media ${device.laptopM} {
    font-size: 0.8rem
}
`