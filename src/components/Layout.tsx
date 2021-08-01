import React from 'react';

import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <Global styles={reset}/>
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
  }
`;

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #cd9036;
`;

export default Layout;
