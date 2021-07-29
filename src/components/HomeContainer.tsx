import React from 'react';

import styled from '@emotion/styled';

const HomeContainer: React.FC = () => {
  return (
    <Container>
      Home
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default HomeContainer;
