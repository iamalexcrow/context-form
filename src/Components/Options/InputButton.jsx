import React from 'react';
//styled
import styled from 'styled-components';
//context
import { useGlobalContext } from '../../state/context';

const InputButton = ({name}) => {
    const {formData, handleSettingsChange} = useGlobalContext();
    return (
        <ButtonWrapper>
                <div>
                    <label htmlFor={name} className="title">{name} </label>
                </div>
                <div className="buttonsWrapper">
                    <button value="-" name={name} onClick={handleSettingsChange}>-</button>
                    <div className='result'>{formData[name]}{name === "Заполнение" ? "%" : null}</div>
                    <button value="+" name={name} onClick={handleSettingsChange}>+</button>
                </div>
        </ButtonWrapper>
    )
}

export default InputButton;

const ButtonWrapper = styled.div`
.title {
    font-size: 0.9rem;
}
.buttonsWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
}
button {
    border: 2px solid rgba(241, 242, 246, 1.00);
    background-color:rgba(241, 242, 246, 1.00);
    width: 50px;
    padding: 10px;
    cursor: pointer;
}
.result {
    border: 2px solid rgba(241, 242, 246, 1.00);
    width: 100%;
    padding: 8.5px;
    margin: 0 7px;
    text-align: center;
}
`