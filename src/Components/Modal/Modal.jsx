import React from 'react';
//context
import { useGlobalContext } from '../../state/context';
//styled
import {Title} from '../styledComponents';
import styled from 'styled-components';

const Modal = () => {
    const {modal,setModal} = useGlobalContext();
    console.log(modal);
    const {name, details} = modal;
    return <Wrapper>
        <div className="modalContainer">
            <Title>{name}</Title>
            <div>{details}</div>
            <i onClick={()=>setModal('')}className="fas fa-times"></i>
        </div>
    </Wrapper>
}

export default Modal;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: grid;
    place-items: center;
    visibility: visible;
    z-index: 10;

.modalContainer {
    padding: 20px;
    background: white; 
    border-radius: 15px;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    }
i {
    position: absolute;
    top: -1.5rem;
    right: -1.5rem;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    border: 5px solid red;
    padding: 10px 15px;
    background-color: red;
    border-radius: 50px;
    }
`

//   /* IMAGE */
//   .bigImg {
//     text-align: center;
//     align-items: center;
//   }
  
//   .bigImg img {
//     object-fit: cover;
//     max-height: auto;
//     max-width: 100%;
//     min-width: 300px;
//     border-radius: 15px;
//     border: 5px solid white;
//     align-items: center;
//   }
  
//   /* INFO */
  
//   .info {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     max-width: 100%;
//     min-width: 200px;
//     position: relative;
//     background-color: white;
//     padding: 30px;
//     border-radius: 25px;
//     margin: 50px;
//   }
  
//   /* CLOSE BUTTON */
//   .info i {
//     position: absolute;
//     top: -1.5rem;
//     right: -1.5rem;
//     font-size: 2rem;
//     color: white;
//     cursor: pointer;
//     border: 5px solid red;
//     padding: 10px 15px;
//     background-color: red;
//     border-radius: 50px;
//   }
  
//   .key {
//     background-color: orange;
//     padding: 10px 15px;
//     border-radius: 25px;
//   }