import React from 'react';

import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default Layout;
