import Modal from 'react-modal';
import { GlobalStyle } from './Styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';
import { NewTransactionModal } from './NewTransactionModal';
import {TransactionsProvider } from './Hooks/useTransactions';

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
    <TransactionsProvider>
      <Header 
      onOpenNewTransactionModal = {handleOpenNewTransactionModal} 
      />
      <Dashboard />
      <NewTransactionModal
      isOpen = {isNewTransactionModalOpen} 
      onRequestClose = {handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
// <GlobalStyle/> is a self-closing tag