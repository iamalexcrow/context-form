import React, {useState} from 'react';
//styled
import styled from 'styled-components';

const Cost = ({price}) => {

    const [isPriceVisible, setIsPriceVisible] = useState(false);

    const togglePriceVisible = (e) => {
        e.stopPropagation();
        if(isPriceVisible) {
            setIsPriceVisible(false)
        } else (
            setIsPriceVisible(true)
        )
    }
    return (
        <Wrapper onClick={togglePriceVisible}>
            {isPriceVisible ? <b>{price}</b> : <i className="fas fa-eye-slash"></i>}{' '}
            <i className="fas fa-ruble-sign"></i>
        </Wrapper>
    )
}

export default Cost;

const Wrapper = styled.div`
.fas{
    margin: 4px;
    font-size: 1rem;
}
.fa-eye-slash {
    color: grey
}`
