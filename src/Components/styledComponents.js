import styled from "styled-components";

export const Title = styled.p`
    text-transform: uppercase;
    color: rgba(151, 157, 172, 1.00);
    font-size: 0.8rem;
    font-weight: 600;
    border-bottom: 2px solid rgba(141, 186, 255, 1.00);
    padding: 10px 0;
    margin: 10px 0;
`

const size = {
    mobile: '420px',
    tabletS: '603px',
    tabletM: '758px',
    tabletL: '924px',
    laptopXS: '1161px',
    laptopS: '1207px',
    laptopM: '1440px',
    laptopML: '1663px',
    laptopL: '1807px',
    desktop: '2560px'
  }

  export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptopXS: `(max-width: ${size.laptopXS})`,
    laptopS: `(max-width: ${size.laptopS})`,
    laptopM: `(max-width: ${size.laptopM})`,
    laptopML: `(max-width: ${size.laptopML})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`
  };