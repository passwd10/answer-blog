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
  },
  allMarkdownRemark: {
    edges: [{
      node: {
        id: string,
        excerpt: string,
        frontmatter: {
          category: string,
          date: string,
          title: string,
          thumbnail: string,
          description: string,
        }
      }
    }]
  }
}

type Props = {
  location: {
    search: string,
  }
}

const HomePage: React.FC<Props> = ({ location }) => {
  const data = useStaticQuery<QueryProps>(graphql`
    query {
      avatar: file(relativePath: {regex: "/profile.jpeg/"}) {
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
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt(pruneLength: 30, truncate: true)
            frontmatter {
              category
              date(formatString: "YYYY MM DD HH:mm")
              title
              thumbnail
              description
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title={'HOME | Park Answer'}
        description={data.site.siteMetadata.description}
      />
      <HomeContainer
        data={data}
        search={location.search}
      />
    </Layout>
  );
};

export default HomePage;
