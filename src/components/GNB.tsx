import React from 'react';

import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { keyframes } from '@emotion/react';

const GNB: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <StyledGNB>
      <Ul>
        <a href='/' aria-label='home'>
          <Li>
            HOME
          </Li>
        </a>
        <a href='/about' aria-label='about'>
          <Li>
            ABOUT
          </Li>
        </a>
        <Li>
          CONTACT
        </Li>
      </Ul>
      <Title>
        {data.site.siteMetadata.description}
      </Title>
    </StyledGNB>
  );
};

const StyledGNB = styled.div`
  width: 100%;
  height: 160px;
  background: linear-gradient(to bottom, #61574f, #a68a64);
`;

const bounce = keyframes`
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 10px);
  }
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 60px;
  color: #003049;
  animation: ${bounce} 4s ease infinite;
`;

const Ul = styled.ul`
  position: absolute;
  top: 0;
  right: 260px;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

const Li = styled.li`
  margin: 20px;
  color: #e3e3e3;
`;

export default GNB;

