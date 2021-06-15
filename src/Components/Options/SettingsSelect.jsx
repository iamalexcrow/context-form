import React from 'react';
import data from '../../data/data.json';
//components
import InputSelect from './InputSelect';
import InputButton from './InputButton';
//styled
import styled from 'styled-components'
import {device} from '../styledComponents';

const SettingsSelect = () => {
    const {settings} = data;
    return (
        <Wrapper onSubmit={e=>e.preventDefault()}>
            {settings.map((s)=> {
                if (s.type === 'dropdown') {
                    return <InputSelect 
                                key={s.name} 
                                name={s.name}
                                info={s.info}
                                options={s.options}/>
                } else {
                    return <InputButton       
                                key={s.name} 
                                name={s.name}/>
                }
            })}
        </Wrapper>
    )
}

export default SettingsSelect;

const Wrapper = styled.form`
margin-top: 10px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
grid-gap: 15px;
@media ${device.laptopM} {
    grid-template-columns: 1fr 1fr;
}
@media ${device.laptopS} {
    grid-template-columns: 1fr;
}
`
