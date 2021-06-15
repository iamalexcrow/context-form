import React from 'react';
//styled
import styled from 'styled-components';
//context
import { useGlobalContext } from '../../state/context';

const InputSelect = ({name,info,options}) => {
    const {formData, handleSettingsChange, setModal} = useGlobalContext();
    return (
        <InputWrapper>
                <div>
                    <label htmlFor={name} className="title">{name}</label>
                    {info && <span><button onClick={()=>setModal(info)}>{info.name}</button></span>}
                </div>
                <select value={formData[name]} name={name} onChange={handleSettingsChange}>
                    {options && options.map((o)=> {
                        return (
                            <option key={o} value={o}>{o}</option>
                        )
                    })}
                </select>
            </InputWrapper>
    )
}

export default InputSelect;

const InputWrapper = styled.div`
position: relative;
    ::after{
        content: '\f078';
        font: normal normal normal 17px/1 FontAwesome;
        color: rgba(26, 110, 203, 1.00);
        right: 11px;
        top: 10px;
        height: 34px;
        padding: 28px 0px 0px 8px;
        position: absolute;
        pointer-events: none;
    }
.title {
    font-size: 0.9rem;
}
button {
    border: none;
    background-color: rgba(0,0,0,0);
    text-decoration: underline;
    color: rgba(40, 119, 207, 1.00);
    cursor: pointer;
}
select {
    border: 2px solid rgba(241, 242, 246, 1.00);
    width: 100%;
    padding: 10px;
    margin-top: 8px;
    appearance: none;
    outline: none;    
}`