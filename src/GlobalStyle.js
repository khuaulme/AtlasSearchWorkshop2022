import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --maxWith:1280px;
    --green:#0ad05b;
    --white:#fff;
    --lightGray:#eee;
    --medGray:#353535;
    --darkGray:#061621;
    --fontSuperBig:2.5rem;
    --fontBig:1.5rem;
    --fontMed:1.2rem;
    --fontSmall:1rem;

}

* {
    box-sizing:border-box;
    font-family: 'Lexend Deca', sans-serif;
}

body {
    margin:0;
    padding:0;

    h1 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--white)
    }

    h3{
        font-size:1.1 rem;
        font-weight:600
    }

    p{
        font-size:1 rem;
        color: var(--white)
    }
}
`;
