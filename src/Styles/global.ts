import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #F0F2F5;
        --red: #E52E40;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --shape: #FFFFFF;
        --green:#33CC95
    }

    *   {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
        }
    // standard font-size: 16 px (Desktop)
    html{
        @media (max-width: 1080px){ // @media é usado para determinar o tamanho máximo do display; nesse caso, caso o tamanho máximo for de 1080px, o tamanho da fonte é reajustado para:
            font-size: 93.75% // 15px
        }
        @media (max-width: 720px){
            font-size: 87.5% // 14px; always use percentage, this adjust the size for different kinds of user preferences 
        }
        }
        //REM = 1rem = 16px (standard metric for the application code)

    body {
        background: var(----background);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }
    
    [disabled]{
        cursor: not-allowed;
    }
    .react-modal-overlay{
        background: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter(0.2s);
        &.hover{
            filter: brightness(0.9);
        }
    }

`