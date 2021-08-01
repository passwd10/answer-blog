import React from 'react';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import GitHubIcon from './icons/GitHubIcon';
import MailIcon from './icons/MailIcon';
import CVIcon from './icons/CVIcon';
import BlogIcon from './icons/BlogIcon';
import HamburgerIcon from './icons/HamburgerIcon';

type Props = {
  data: {
    avatar: {
      childImageSharp: {
        fixed: {
          base64: string,
          width: number,
          height: number,
          src: string,
          srcSet: string,
        }
      }
    },
    site: {
      siteMetadata: {
        title: string,
        description: string,
      }
    }
  }
}

const HomeContainer: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <ImageWrapper>
        <HamburgerIcon />
      </ImageWrapper>
      <Spacer />
      <Title>
        {data.site.siteMetadata.description}
      </Title>
      <Spacer />
      <Socials>
        <li>
          <a href='https://github.com/passwd10' aria-label='github'>
            <GitHubIcon/>
          </a>
        </li>
        <li>
          <a href='mailto:inseo9494@gmail.com' aria-label='mail'>
            <MailIcon />
          </a>
        </li>
        <li>
          <a href='/aboutme' aria-label='CV'>
            <CVIcon />
          </a>
        </li>
        <li>
          <a href='/blog' aria-label='blog'>
            <BlogIcon />
          </a>
        </li>
      </Socials>
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

const bounce = keyframes`
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 10px);
  }
`;

const ImageWrapper = styled.div`
  animation: ${bounce} 3s ease infinite;
`;

const Socials = styled.ul`
  width: 10em;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
`;

const Spacer = styled.div`
  margin-top: 1em;
`;

const Title = styled.h1`
  color: #e8e4e4;
  margin-top: 0.5em;
`;

export default HomeContainer;
