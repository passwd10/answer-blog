import React, { useState, useLayoutEffect } from 'react';

import styled from '@emotion/styled';

import Categories from '../components/Categories';
import Thumbnails from '../components/Posts';

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
    },
    allMarkdownRemark: {
      edges: [Post]
    }
  },
  search: string,
}

type Post = {
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
}

const HomeContainer: React.FC<Props> = ({ data, search }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [category, setCategory] = useState('');

  const [searchKey, searchValue] = search?.split('=');

  useLayoutEffect(() => {
    if (searchKey === '?category') {
      const filterdPosts = data
        .allMarkdownRemark
        .edges
        .filter(edge =>
          searchValue === 'all' ||
            edge.node.frontmatter.category === searchValue
        );

      setPosts(filterdPosts);
      setCategory(searchValue);
    }
  }, []);

  useLayoutEffect(() => {
    const filterdPosts = data
      .allMarkdownRemark
      .edges
      .filter(edge =>
        category === 'all' ||
        edge.node.frontmatter.category === category
      );

    setPosts(filterdPosts);
  }, [category]);

  return (
    <Container>
      <Categories
        setCategory={setCategory}
        searchValue={searchValue}
      />
      {window.location.search && <Thumbnails posts={posts}/> }
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HomeContainer;
