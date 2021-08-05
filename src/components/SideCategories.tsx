import React, { useState } from 'react';

import styled from '@emotion/styled';

const categoriesAlias: any = {
  '?category=all': '전체',
  '?category=javascript': 'JS',
  '?category=retrospect': '회고',
  '?category=bookReview': '서평',
  '?category=web': 'WEB',
};

type Category = {
  title: string,
  description: string,
  color: string,
  path: string,
}

type Props = {
  categories: Category[],
}

const SideCategories: React.FC<Props> = ({ categories }) => {
  const [isClickedIcon, setIsClickedIcon] = useState(false);

  const handleOnClickIcon = () => {
    setIsClickedIcon(!isClickedIcon);
  };

  return (
    <Container>
      <Icon onClick={handleOnClickIcon}>
        {categoriesAlias[window.location.search]}
      </Icon>
      <Categories
        isClickedIcon={isClickedIcon}
        onClick={handleOnClickIcon}
      >
        {categories.map((category, index) =>
          <Link
            href={category.path}
            key={index}
          >
            <Thumbnail>
              <ThumbnailTitle>{category.title}</ThumbnailTitle>
            </Thumbnail>
          </Link>
        )}
      </Categories>
    </Container>
  );
};

const Link = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`;

const Container = styled.div``;

const Icon = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #003049;
  border-radius: 100%;
  z-index: 4;
  color: #ebebeb;
  cursor: pointer;
`;

type CategoriesProps = {
  isClickedIcon: boolean;
}

const Categories = styled.ul`
  position: fixed;
  bottom: 30px;
  right: 20px;
  display: flex;
  flex-direction: column;
  z-index: 3;
  text-align: right;
  transition: 0.5s;
  transform : ${(props: CategoriesProps) => props.isClickedIcon ? 'translateY(-50px)' : 0};
  opacity : ${(props: CategoriesProps) => props.isClickedIcon ? 1 : 0};
`;

const ThumbnailTitle = styled.span`
  display: inline-block;
  font-weight: bold;
  color: #003049;
  font-size: 16px;
  background: #ededed;
  border-radius: 5px;
  padding: 0 10px;
`;

const Thumbnail = styled.li`
  list-style: none;
  border-radius: 5%;
  cursor: pointer;
  height: 35px;
  line-height: 35px;
  margin: 2px;
`;

export default SideCategories;
