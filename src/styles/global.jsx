import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: leelawadee;
        font-weight: 400;
        src: url(../assets/fonts/leelawadee/leelawadee.ttf);
    }

    @font-face {
        font-family: leelawadee;
        font-weight: bold;
        src: url(../assets/fonts/leelawadee/leelawadee-bold.ttf);
    }

    @font-face {
        font-family: leelawadee;
        font-weight: 200;
        src: url(../assets/fonts/leelawadee/leelawadee-light.ttf);
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: leelawadee, Arial, Helvetica, sans-serif;
    }

    html, body, #root, .container {
        min-height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
    }

    strong, b {
        font-weight: bold;
    }

    em, i {
        font-weight: 200;
    }

    .container {
        width: 100%;
        max-width: 62em;
        margin: 0 auto;
    }

    .row {
        display: flex;
    }
`;