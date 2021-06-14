import React from 'react';
import styled from 'styled-components'
import data from '../../data/data.json';
//components
import InputSelect from './InputSelect';
import InputButton from './InputButton';

const Settings = () => {
    const {settings} = data;
    return (
        <Wrapper onSubmit={e=>e.preventDefault()}>
            {settings.map((s)=> {
                if (s.type === 'dropdown') {
                    return <InputSelect 
                                key={s.name} 
                                // props={s}
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

export default Settings;

const Wrapper = styled.form`
margin-top: 10px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
grid-gap: 15px;
`
