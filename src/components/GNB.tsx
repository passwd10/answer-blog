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
        <Li>
          <Link href='/' aria-label='home' >
            HOME
          </Link>
        </Li>
        <Li>
          <Link href='/about' aria-label='about' >
            ABOUT
          </Link>
        </Li>
        <Li>
          <Link href='mailto:inseo9494@gmail.com' aria-label='mail' >
            CONTACT
          </Link>
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
  height: 200px;
  background: #FFF;
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
  z-index: 10;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

const Li = styled.li`
  margin: 20px;
  color: #e3e3e3;
`;

const Link = styled.a`
  color: #003049;

  :hover {
    color: #ff6200;
  }
`;

export default GNB;

