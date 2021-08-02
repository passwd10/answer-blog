import React, { useState, useEffect } from 'react';

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
  const [searchKey, searchValue] = search?.split('=');
  const [posts, setPosts] = useState<Post[]>(data.allMarkdownRemark.edges);

  useEffect(() => {
    if (searchKey === '?category') {
      const filterdPosts = data
        .allMarkdownRemark
        .edges
        .filter(({ node }) => node.frontmatter.category === searchValue);

      if (filterdPosts.length !== 0) {
        setPosts(filterdPosts);
      }
    }
  }, []);

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
      <Posts>
        {posts.map(({ node }) => {
          return (
            <Thumbnail
              key={node.id}
              thumbnailUrl={node.frontmatter.thumbnail}
            >
              <ThumbnailContainer>
                <ThumbnailTitle>{node.frontmatter.title}</ThumbnailTitle>
                <Description>{node.frontmatter.description}</Description>
              </ThumbnailContainer>
              <Date>{node.frontmatter.date}</Date>
            </Thumbnail>
          );
        }
        )}
      </Posts>
    </Container>
  );
};

const ThumbnailContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  width: 140px;
  height: 180px;
  font-size: 20px;
  padding: 10px;
`;

const ThumbnailTitle = styled.span`
  display: inline-block;
`;

const Description = styled.span`
  display: inline-block;
  font-size: 12px;
  color: gray;
`;

const Date = styled.div`
  position: absolute;
  font-size: 12px;
  color: #e8e4e4;
  bottom: 10px;
`;

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
`;

type ThumbnailProps = {
  thumbnailUrl: string
}

const Thumbnail = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: left;
  border-radius: 2%;
  background-image: url(${(props: ThumbnailProps) => props.thumbnailUrl});
  background-size: cover;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, auto));
  grid-template-rows: repeat(6, minmax(330px, auto));
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  grid-auto-flow: dense;
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
