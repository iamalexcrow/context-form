import React from 'react';
//styled
import styled, {css} from 'styled-components';
//context
import { useGlobalContext } from '../../state/context';
//components
import Cost from './Cost';

const DeliveryOption = ({name, available, price, time}) => {
    const {formData, getDeliveryDate, handleDeliveryChange} = useGlobalContext();   
    return (
        <Option disabled={!available} value={name} onClick={handleDeliveryChange} active={formData.Стоимость === name}>
            <div className="leftSide">
                <p className="deliveryName"><b>{name}</b></p>
                <p>{available ? `Доставим ${getDeliveryDate(time)}` : "Недоступна"}</p>
            </div>
            <div >
                {available ? <Cost price={price}/> : '-'}
            </div>
        </Option>
    )
}

export default DeliveryOption;

const Option = styled.button`
    width: 100%;
    background-color: rgba(0,0,0,0);
    border: 2px solid rgba(241, 242, 246, 1.00);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:2px;
    padding: 0 8px;
    cursor: pointer;
${props => props.active && css`
    border: 2px solid rgba(26, 110, 203, 1.00);
`}

.leftSide {
    margin: 25px 5px;
    z-index: -1;
}
p {
    text-align: left;
    margin: 2px;
    z-index: -1;
}
.deliveryName {
    font-size: 1rem;
}
`