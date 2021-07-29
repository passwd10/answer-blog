import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

type QueryProps = {
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

const HomePage: React.FC = () => {
  const data = useStaticQuery<QueryProps>(graphql`
    query {
      avatar: file(relativePath: {regex: "/dog.jpeg/"}) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title={'HOME | Answer\'s blog'}
        description={'개발 흔적을 남기는 블로그'}
        image={data.avatar.childImageSharp.fixed.src}
      />
      <HomeContainer>
        <ImageWrapper>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            style={{ marginBottom: '-5px' }}
          />
        </ImageWrapper>
      </HomeContainer>
    </Layout>
  );
};

export default HomePage;

const HomeContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
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
