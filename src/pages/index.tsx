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
  },
  site: {
    siteMetadata: {
      title: string,
      description: string,
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
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title={`HOME | ${data.site.siteMetadata.title}`}
        description={data.site.siteMetadata.description}
      />
      <HomeContainer data={data}/>
    </Layout>
  );
};

export default HomePage;
