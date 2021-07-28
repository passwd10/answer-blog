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

`;

export default Layout;
