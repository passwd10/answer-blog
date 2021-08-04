import React, { useState, useLayoutEffect } from 'react';

import styled from '@emotion/styled';

import Categories from '../components/Categories';
import Thumbnails from './Thumbnails';

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
  const [selectedCategory, setSelectedCategory] = useState('');

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
      setSelectedCategory(searchValue);
    }
  }, []);

  useLayoutEffect(() => {
    const filterdPosts = data
      .allMarkdownRemark
      .edges
      .filter(edge =>
        selectedCategory === 'all' ||
        edge.node.frontmatter.category === selectedCategory
      );

    setPosts(filterdPosts);
  }, [selectedCategory]);

  return (
    <Container>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {typeof window !== 'undefined'
        ? window.location.search && <Thumbnails posts={posts}/>
        : null }
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
