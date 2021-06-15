import React from 'react';
import data from '../../data/data.json';
//styled
import {Title} from '../styledComponents';
import styled from 'styled-components';
//components
import DeliveryOption from './DeliveryOption';

const Price = () => {
    const {prices} = data;
    return (
        <Wrapper>
            <Title>Стоимость</Title>
            <div>
            {prices.map((p)=> {
                const {name} = p;
                return <DeliveryOption 
                            key={name} 
                            name={p.name}
                            available={p.available}
                            price={p.price}
                            time={p.time}/>
            })}
            </div>
        </Wrapper>
    )
}

export default Price;

const Wrapper = styled.div`
grid-column: 2 /3;
grid-row: 2 / 3;
`