//Layout.js - layout component that wraps every other component - includes Header
//and a stylesheet necessary for semantic-ui components

import React from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
export default props => {
  return(
    <Container>
      <Head>
        <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
      <Header />
      {props.children}
    </Container>
  )
}
