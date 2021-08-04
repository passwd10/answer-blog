import React from 'react';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import HamburgerIcon from './icons/HamburgerIcon';

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

type Props = {
  posts: Post[]
}

const Thumbnails: React.FC<Props> = ({ posts }) => {
  return (
    <Container>
      {posts.length === 0 ?
        <div>
          작성된 글이 없습니다
        </div> :
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
          })}
        </Posts>
      }
    </Container>
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
  background: #B52E31;

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
  height: 100px;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 5px;

  @media (max-width: 1000px) {
    margin: 5px;
  }
`;

const ThumbnailTitle = styled.span`
  display: inline-block;
`;

const Description = styled.span`
  display: inline-block;
  font-size: 12px;
  width: 220px;
  color: gray;
`;

const Date = styled.div`
  font-size: 12px;
  color: black;
`;

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;

  @media (max-width: 1000px) {
    padding-top: 0;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100px);
  }

  100% {
    transform: translate(0);
  }
`;

const Thumbnail = styled.li`
  position: relative;
  list-style: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 20px;
  animation: ${slideUp} 400ms;

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

  @media (max-width: 1000px) {
    width: 100%;
    grid-template-columns: repeat(1, minmax(50%, auto));
  }
`;

export default Thumbnails;
