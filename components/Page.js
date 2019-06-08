import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    height: 100%;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: sans-serif;
    background-image: linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('../static/la3.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
  }
`;

const theme = {
	primaryColor: '#f1c40f'
};

const Page = props => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyle />
			<Header />
			{props.children}
		</>
	</ThemeProvider>
);

export default Page;
