import React from 'react';

import Image from 'gatsby-image';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import GitHubIcon from './icons/GitHubIcon';
import MailIcon from './icons/MailIcon';

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
    }
  }
}

const HomeContainer: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          style={{ marginBottom: '-5px' }}
        />
      </ImageWrapper>
      <Spacer />
      <Socials>
        <li>
          <GitHubIcon/>
        </li>
        <li>
          <MailIcon />
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

const ImageWrapper = styled.span`
  animation: ${bounce} 3s ease infinite;
  box-shadow: 0px 3px 5px 3px gray;
`;

const Socials = styled.ul`
  display: flex;
  list-style: none;
`;

const Spacer = styled.div`
  margin: 1em;
`;

export default HomeContainer;
