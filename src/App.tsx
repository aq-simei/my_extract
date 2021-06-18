import Modal from 'react-modal';
import styled from 'styled-components';
import { GlobalStyle } from './Styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';
import { NewTransactionModal } from './NewTransactionModal';

Modal.setAppElement('#root');


export function App() {
  
  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
          setIsNewTransactionModalOpen(false);
      }

  return (
    <>
      <Header 
      onOpenNewTransactionModal = {handleOpenNewTransactionModal} 
      />
      <NewTransactionModal 
      isOpen = {isNewTransactionModalOpen} 
      onRequestClose = {handleCloseNewTransactionModal}
      />
      <Dashboard />

      <GlobalStyle />
    </>
  );
}
// <GlobalStyle/> is a self-closing tag