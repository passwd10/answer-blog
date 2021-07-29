import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HomeContainer from '../components/HomeContainer';

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
      <HomeContainer data={data}/>
    </Layout>
  );
};

export default HomePage;
