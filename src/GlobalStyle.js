import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --maxWith: 1280px;
    --green: #0ad05b;
    --white: #fff;
    --lightGray: #eee;
    --medGray: #353535;
    --darkGray: #282c34;
    --bgColor: #061621;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;

}

* {
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-weight: inherit;
	font-style: inherit;
	font-size: 100%;
	vertical-align: baseline;
}

:focus {
	outline: 0;
}
body {
	line-height: 1;
	color: black;
	background: var(--bgColor, white);
}
ol, ul {
	list-style: none;
}

table {
	border-collapse: separate;
	border-spacing: 0;
}
caption, th, td {
	text-align: left;
	font-weight: normal;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: "";
}
blockquote, q {
	quotes: "" "";
}


h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--white)
}

h3{
    font-size: 1.1rem;
    font-weight: 600
}

p{
    font-size: 1rem;
    color: var(--white)
}
`;
