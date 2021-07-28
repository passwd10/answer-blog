import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  const data = useStaticQuery(graphql`
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
      />
      <Image fixed={data.avatar.childImageSharp.fixed}/>
    </Layout>
  );
};

export default HomePage;
