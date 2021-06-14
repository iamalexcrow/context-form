import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../state/context';

const ResetBox = () => {
const {reset} = useGlobalContext();
    
    return (
        <Wrapper>
            <div className="messageGroup">
                <p>
                    <b>Параметры подобраны автоматически</b>
                </p>
                <p>
                    Мы уже подобрали для Вас самый недорогой вариант. Вы можете оформить заказ, выбрав параметры самостоятельно
                </p>
            </div>
            <div className="buttonArea">
                <button onClick = {reset}>Сбросить параметры</button>
            </div>
        </Wrapper>
    )
}

export default ResetBox;

const Wrapper = styled.div`
background-color: rgba(241, 247, 255, 1.00);
display: flex;
justify-content: space-between;
align-items: space-around;
padding: 15px;

p {
    margin: 6px;
}
.buttonArea {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 30%;
}
button {
    font-size: 1rem;
    font-weight: 700;
    color: rgba(26, 110, 203, 1.00);
    background-color: rgba(26, 110, 203, 0);
    border: 1px solid rgba(26, 110, 203, 1.00);
    padding: 15px;
    :active {
        background-color: rgba(26, 110, 203, 0.3);
    }
}`