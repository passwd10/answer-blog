import React from 'react';

import GridCategories from './GridCategories';
import SideCategories from './SideCategories';

type Category = {
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

const Categories: React.FC = () => {
  return (
    <>
      {typeof window !== 'undefined'
        ? window.location.search
          ? <SideCategories categories={categories}/>
          : <GridCategories categories={categories}/>
        : null
      }
    </>
  );
};

export default Categories;
