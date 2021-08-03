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

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
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
  overflow: hidden;
  position: relative;
  list-style: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 20px;
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
`;

export default Thumbnails;
