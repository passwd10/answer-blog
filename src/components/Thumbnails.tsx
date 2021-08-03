import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';

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

const Thumbnails: React.FC<Props> = ({ data, search }) => {
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
    <Posts>
      {posts.map(({ node }) => {
        return (
          <Thumbnail
            key={node.id}
          >
            <ThumbnailZoomIn>
              <ThumbnailContainer>
                <ThumbnailTitle>{node.frontmatter.title}</ThumbnailTitle>
                <Description>{node.frontmatter.description}</Description>
                <Date>{node.frontmatter.date}</Date>
                <ThumbnailCircle/>
                <ThumbnailIcon>
                  <HamburgerIcon />
                </ThumbnailIcon>
              </ThumbnailContainer>
            </ThumbnailZoomIn>
          </Thumbnail>
        );
      }
      )}
    </Posts>
  );
};

const ThumbnailIcon = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`;

const ThumbnailCircle = styled.div`
  position: absolute;
  top: -20px;
  right: -40px;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background: #a0732579;

  transition: transform 0.5s;
`;

const ThumbnailContainer = styled.span`
  overflow: hidden;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  width: 100%;
  height: 130px;
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
  font-size: 12px;
  color: black;
`;

const Thumbnail = styled.li`
  overflow: hidden;
  position: relative;
  list-style: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 20px;

  :hover {
  ${ThumbnailCircle} {
    transform: scale(2.05);
    transition: transform 0.5s;
    }
  }
`;

const ThumbnailZoomIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Posts = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, minmax(50%, auto));
  grid-auto-flow: dense;
`;

export default Thumbnails;
