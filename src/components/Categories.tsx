import React, { useEffect } from 'react';

import GridCategories from './GridCategories';
import SideCategories from './SideCategories';

export type Category = {
  title: string,
  description: string,
  color: string,
  path: string,
}

const categories: Category[] = [
  {
    title: '전체',
    description: '모든 기록들',
    color: '#b52e31',
    path: '?category=all',
  },
  {
    title: 'JavaScript',
    description: 'JavaScript와 관련해 새롭게 알게된 것',
    color: '#b5a52e',
    path: '?category=javascript',
  },
  {
    title: '회고',
    description: '회고를 기록',
    color: '#b5572e',
    path: '?category=retrospect',
  },
  {
    title: '서평',
    description: '완독한 책에 관한 기록',
    color: '#59981A',
    path: '?category=bookReview',
  },
  {
    title: 'WEB',
    description: 'WEB과 관련해 새롭게 알게된 것',
    color: '#3D550C',
    path: '?category=web',
  },
];

type Props = {
  selectedCategory: string,
  setSelectedCategory: React.Dispatch<(prevState: string) => string>,
}

const Categories: React.FC<Props> = ({ selectedCategory, setSelectedCategory }) => {
  const handleOnClick = (event: React.MouseEvent) => {
    const path = event.target.closest('li').dataset.path;
    window.history.pushState('data', 'category', `?category=${path}`);
    setSelectedCategory(path);
  };

  return (
    <>
      {typeof window !== 'undefined'
        ? window.location.search
          ? <SideCategories
            selectedCategory={selectedCategory}
            categories={categories}
            handleOnClick={handleOnClick}
          />
          : <GridCategories categories={categories}/>
        : null
      }
    </>
  );
};

export default Categories;
