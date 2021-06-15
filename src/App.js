import React from 'react';
import './App.css';
import styled from 'styled-components'
//Components
import DragAndDrop from './Components/DragDrop/DragAndDrop';
import Modal from './Components/Modal/Modal';
import SettingsWrapper from './Components/Options/SettingsWrapper';
//state
import {useGlobalContext} from './state/context';

function App() {
  const {modal,formData} = useGlobalContext();

  return (
    <Wrapper>
      <DragAndDrop/>
      {formData.Файлы.length > 0 ? <SettingsWrapper/>  : null}
      {modal !== "" ? <Modal/> : null}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 70vw;
  margin: 0 auto;
`