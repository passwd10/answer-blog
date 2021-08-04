import React from 'react';

import styled from '@emotion/styled';

type Props = {
  categories: any,
  handleOnClick: any,
}

const Categories: React.FC<Props> = ({ categories, handleOnClick }) => {
  return (
    <GridCategories>
      {categories.map((category, index) =>
        <Thumbnail
          key={index}
          data-path={category.path}
          onClick={handleOnClick}
        >
          <ThumbnailZoomIn thumbnailUrl={category.image}>
            <ThumbnailLine />
            <ThumbnailContainer>
              <ThumbnailTitle>{category.title}</ThumbnailTitle>
              <Description>{category.description}</Description>
            </ThumbnailContainer>
          </ThumbnailZoomIn>
        </Thumbnail>
      )}
    </GridCategories>
  );
};

const GridCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, auto));
  grid-template-rows: repeat(2, minmax(300px, auto));
  grid-row-gap: 2em;
  grid-column-gap: 2em;
  grid-auto-flow: dense;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(220px, auto));
    grid-template-rows: repeat(3, minmax(300px, auto));
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(3, minmax(80px, auto));
    grid-template-rows: repeat(3, minmax(110px, auto));
  }
`;

const ThumbnailContainer = styled.span`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  width: 140px;
  height: 180px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 750px) {
    width: 80px;
    height: 100px;
    background: transparent;
  }
`;

const ThumbnailLine = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
  width: 2px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ThumbnailTitle = styled.span`
  display: inline-block;
  font-weight: bold;
  color: #003049;

  @media (max-width: 750px) {
    font-size: 0.7em;
    color: #f4f4f4;
  }
`;

const Description = styled.span`
  display: inline-block;
  font-size: 12px;
  color: #676767;

  @media (max-width: 750px) {
    display: none;
  }
`;

const Thumbnail = styled.li`
  overflow: hidden;
  position: relative;
  list-style: none;
  border-top-right-radius: 7%;
  border-bottom-right-radius: 7%;
  box-shadow: rgba(65, 61, 57, 0.4) 5px 5px, rgba(65, 61, 57, 0.3) 10px 10px, rgba(65, 61, 57, 0.2) 15px 15px;
  cursor: pointer;

  @media (max-width: 750px) {
    box-shadow: rgba(65, 61, 57, 0.4) 2px 2px, rgba(65, 61, 57, 0.3) 4px 4px, rgba(65, 61, 57, 0.2) 6px 6px;
  }
`;

type ThumbnailProps = {
  thumbnailUrl: string
}

const ThumbnailZoomIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #b6ad90;
  background-image: url(${(props: ThumbnailProps) => props.thumbnailUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  transition: transform 0.5s;
  :hover {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
`;

export default Categories;
