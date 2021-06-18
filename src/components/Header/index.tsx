import logoImg from '../../assets/logo.svg'
import { Container, Content} from './Styles'
import Modal from 'react-modal'
import { useState } from 'react';


interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header ({onOpenNewTransactionModal}: HeaderProps){

    return(
        <Container>
            <Content>
        <img src={logoImg} alt="dt money" />

        <button type="button" onClick={onOpenNewTransactionModal}>
            Nova transação
        </button>
            </Content>
           
        </Container>
    )
}