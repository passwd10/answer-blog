import React from 'react';

import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';

import Merienda from '../fonts/Merienda.ttf';
import NotoSansKR from '../fonts/NotoSansKR.otf';
import Hahmlet from '../fonts/Hahmlet.ttf';
import DancingScript from '../fonts/DancingScript.ttf';

import GNB from './GNB';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <Global styles={reset}/>
      <GNB />
      {children}
    </StyledLayout>
  );
};

const reset = css`
  @font-face {
    font-family: 'Merienda';
    src: url('${Merienda}') format('truetype');
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url('${NotoSansKR}') format('opentype');
  }

  @font-face {
    font-family: 'Hahmlet';
    src: url('${Hahmlet}') format('truetype');
  }

  @font-face {
    font-family: 'DancingScript';
    src: url('${DancingScript}') format('truetype')
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
    color: #000000;
  }

  body {
    font-family: 'NotoSansKR';
  }

  a {
    text-decoration: none;
  }

  a:link {
    text-decoration: none;
  }
`;

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default Layout;
