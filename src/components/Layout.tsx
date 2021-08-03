import React from 'react';

import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';

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
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Apple SD Gothic Neo;
    outline: none;
    color: #000000;
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
  background: #FFF;
`;

export default Layout;
