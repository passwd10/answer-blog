import React from 'react';

import styled from '@emotion/styled';

import { Category } from './Categories';

type Props = {
  categories: Category[],
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
          <ThumbnailCover color={category.color}>
            <ThumbnailLine />
            <ThumbnailTitle>{category.title}</ThumbnailTitle>
            <Description>{category.description}</Description>
          </ThumbnailCover>
        </Thumbnail>
      )}
    </GridCategories>
  );
};

const GridCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, auto));
  grid-template-rows: repeat(2, minmax(240px, auto));
  grid-row-gap: 2em;
  grid-column-gap: 2em;
  grid-auto-flow: dense;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, minmax(180px, auto));
    grid-template-rows: repeat(3, minmax(240px, auto));
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(3, minmax(100px, auto));
    grid-template-rows: repeat(3, minmax(130px, auto));
    grid-row-gap: 1em;
    grid-column-gap: 1em;
  }
`;

const ThumbnailLine = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
  width: 2px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);

  @media (max-width: 750px) {
    left: 5px;
    width: 1px;
  }
`;

const ThumbnailTitle = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  font-weight: bold;
  color: #eeeeee;
  font-size: 1.4em;

  @media (max-width: 750px) {
    font-size: 0.9em;
    color: #eeeeee;
    left: 10px;
  }
`;

const Description = styled.span`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 12px;
  color: #f4f4f4;
  width: 80%;

  @media (max-width: 750px) {
    display: none;
  }
`;

const Thumbnail = styled.li`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  list-style: none;
  border-top-right-radius: 7%;
  border-bottom-right-radius: 7%;
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba(0,0,0, .1), 0 9px 20px 0 rgba(0,0,0, .25);
  transition: .3s linear;
  z-index: 3;

  &:before { 
    content: '';
    position: absolute;
    top: 0;
    left: -6px;
    border-top-right-radius: 7%;
    border-bottom-right-radius: 7%;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: #ebebeb;
    border: 1px solid #aeadad;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -9px;
    border-top-right-radius: 7%;
    border-bottom-right-radius: 7%;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: #ebebeb;
    border: 1px solid #aeadad;
  }
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0,0,0, .25), 0 9px 20px 0 rgba(0,0,0, .45);
  }
`;

type ThumbnailProps = {
  color: string
}

const ThumbnailCover = styled.div`
  width: 100%;
  height: 100%;
  transform-origin: left;
  transition: all .45s ease;
  padding: 30px 0;
  border-top-right-radius: 7%;
  border-bottom-right-radius: 7%;
  background: ${(props: ThumbnailProps) => props.color};
  z-index: 4;

  &:hover {
    transform: rotateY(30deg);
    box-shadow: 5px 1px 10px 10px rgba(0, 0, 0, 0.3);
  }
`;


export default Categories;
