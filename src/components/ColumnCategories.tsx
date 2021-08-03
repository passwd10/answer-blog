import React from 'react';

import styled from '@emotion/styled';

type Props = {
  categories: any,
  handleOnClick: any,
}

const Categories: React.FC<Props> = ({ categories, handleOnClick }) => {
  return (
    <ColumnCategories>
      {categories.map((category, index) =>
        <Thumbnail
          key={index}
          data-path={category.path}
          onClick={handleOnClick}
        >
          <ThumbnailZoomIn>
            <ThumbnailContainer>
              <ThumbnailTitle>{category.title}</ThumbnailTitle>
            </ThumbnailContainer>
          </ThumbnailZoomIn>
        </Thumbnail>
      )}
    </ColumnCategories>
  );
};

const ColumnCategories = styled.div`
  position: fixed;
  right: 100px;
  display: flex;
  flex-direction: column;
`;

const ThumbnailContainer = styled.span`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  width: 100px;
  height: 20px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
`;

const ThumbnailTitle = styled.span`
  display: inline-block;
  font-weight: bold;
  color: #003049;
  font-size: 16px;
`;

const Thumbnail = styled.li`
  overflow: hidden;
  position: relative;
  list-style: none;
  border-radius: 5%;
  cursor: pointer;
  width: 100px;
  height: 40px;
  margin: 5px;
`;

const ThumbnailZoomIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;

  :hover {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
`;

export default Categories;
