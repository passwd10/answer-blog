import React from 'react';

import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

import HamburgerMenu from './HamburgerMenu';

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
      <HamburgerMenu />
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
  width: 100vw;
  height: 200px;

  @media (max-width: 750px) {
    height: 140px;
  }
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 40px;
  color: #003049;
  font-family: 'DancingScript';
  font-size: 40px;
`;

const Ul = styled.ul`
  padding-left: 37%;
  z-index: 10;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;

  @media (max-width: 750px) {
    display: none;
  }
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

