import React from 'react';

import styled from '@emotion/styled';

import Categories from '../components/Categories';
import Thumbnails from './Thumbnails';

const HomeContainer: React.FC = () => {
  return (
    <Container>
      <Categories/>
      {typeof window !== 'undefined'
        ? window.location.search && <Thumbnails/>
        : null }
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HomeContainer;
