import styled from 'styled-components';
import { useState } from 'react';

const ModalBackground = styled.div`
  display: none; 
  position: fixed;
  z-index: 1; 
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const ModelContaint = styled.div`
background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const Modal = ({children}) => {
    const [shouldOpen,setShouldOpen] = useState(false);

  return (
    <>
    <button onClick={()=> setShouldOpen(true)}>Open Modal</button>
    {
        shouldOpen && (
            <ModalBackground>
                <ModelContaint>
                    {children}
                </ModelContaint>
            </ModalBackground>
        )
    }
    </>
    
  )
}

export default Modal;