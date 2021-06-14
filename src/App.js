import React from 'react';
import './App.css';
import styled from 'styled-components'
//Components
import DragAndDrop from './Components/DragDrop/DragAndDrop';
import Options from './Components/Options/Options';
import Price from './Components/Price/Price';
import Modal from './Components/Modal/Modal';
import {useGlobalContext} from './state/context';

function App() {
  const {modal} = useGlobalContext();
  return (
    <Wrapper>
      <DragAndDrop/>
      <Options/>
      <Price/>
      {modal !== "" ? <Modal/> : null}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 3fr;
  width: 70vw;
  margin: 0 auto;
  grid-gap: 15px
`
// links to о технологиях
//media queries for chevron-down
// new set for names for context
//  fix the price button
// create calculator for price - maybe later
// reset button - done

//use reducer 
// make two contexts 
//