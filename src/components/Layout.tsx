import React from 'react';

import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';
import { keyframes } from '@emotion/react';

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

const bounce = keyframes`
  0%{background-position:0% 100%}
  50%{background-position:100% 0%}
  100%{background-position:0% 100%}
`;

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(228deg, #e8e4e4,  #000);
  background-size: 400% 400%;
  animation: ${bounce} 8s ease infinite;
`;

export default Layout;
