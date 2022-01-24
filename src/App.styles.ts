import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    *{
        box-sizing: border-bos;
        font-family: 'Catamaran', sant-serif;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff
    }

    .score {
        color: #fff;
        font-size;
        margin: 0
    }

    h1 {
        background-image: linear-gradient(180ddeg, #fff, #87f1ff);
        
    }
`