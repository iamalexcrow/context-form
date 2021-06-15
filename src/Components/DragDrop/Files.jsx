import React from 'react';
//context
import { useGlobalContext } from '../../state/context';
//styled
import { device } from '../styledComponents';
import styled from 'styled-components';

const Files = ({name, index}) => {

    const {formData, toggleAmount, shortenName} = useGlobalContext();
    const amount = formData.Файлы[index].amount;
    return (
            <Wrapper>
                <i className="far fa-image"></i>
                <div className="info">
                    <p><b>{shortenName(name)}</b></p>
                    <p>20.0 x 20.0 x 40.0mm</p>
                    <div className="amount">
                        <button value="-" name={index} onClick={toggleAmount}>-</button>
                        <div className="window">{amount}</div>
                        <button value="+" name={index} onClick={toggleAmount}>+</button>
                    </div>
                </div>
            </Wrapper>
    )
}

export default Files;

const Wrapper = styled.div`
    height: 100%;
    flex-basis: 24.5%;
    margin-top: 8px;
    background-color: rgba(248, 248, 251, 1.00);
    border: 2px solid rgba(241, 242, 246, 1.00);
    display: flex;
    align-items: center;
    justify-content: space-around;
i {
    font-size: 1.2rem;
    flex-basis: 22%;
    display: flex;
    justify-content: center;
}
.info {
    flex-basis: 70%;
    margin: 10px;
}
.amount {
    display: flex;
    align-items: center;
    button {
        border: none;
        background-color: rgba(210, 212, 219, 1.00);
        height: 25px;
        width: 25px;
        border-radius: 50%;
        display: inline-block;
        font-weight: 900;
        cursor: pointer;
    }
    .window {
        text-align: center;
        width: 45px;
        margin: 0 10px;
        padding: 5px 13px;
        background-color: rgba(255, 255, 255, 1.00);
        border-radius: 10px;
        border: 1px solid rgba(210, 212, 219, 1.00);
    }
}
@media ${device.laptopS} {
    flex-basis: 32%
}
@media ${device.tabletL} {
    flex-basis: 49%
}
@media ${device.tabletS} {
    flex-basis: 100%
}
`