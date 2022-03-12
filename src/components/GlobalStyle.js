import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0%auto;
    box-sizing: border-box;
}


h1,h2,h3 {
    font-family: 'Montserrat', sans-serif;
}


html {
    background: linear-gradient(
319deg
, rgb(51 142 255 / 8%) 10%, rgb(171 171 171 / 15%) 50%), linear-gradient(
20deg
, rgb(51 142 255 / 13%) 5%, rgb(51 142 255 / 0%) 40%);
    box-sizing: border-box;
    width: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    position: relative;
    z-index: 1;
    min-height: 0;
    display: flex;
    flex: 1 0 auto;
    height: 100%;
}

body {
    box-sizing: border-box;    
    min-height: 692px;
    background: var(--bg2);
    font-family: "DM Sans", sans-serif;
    overflow-x: hidden;
    margin: 0 auto;
}

a {
    color: #94c1f2;
    text-decoration: none;
}

.yellow {
    color:#ebda69;
}

.blue {
    background-color: #94c1f2;
}

.red {
    color:#db626f;
}

.green {
    color: #74c26a;
}

`;

export default GlobalStyle;
