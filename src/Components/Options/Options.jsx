import React from 'react';
import styled from 'styled-components';
//components
import {Title} from '../styledComponents'
import ResetBox from './ResetBox';
import Settings from './Settings';

const Options = () => {
    return (
        <Wrapper>
            <Title>Параметры</Title>
            <ResetBox/>
            <Settings/>
        </Wrapper>
    )
}

export default Options;

const Wrapper = styled.div`
grid-column: 1/2;
grid-row: 2/3;
`