import React from 'react';

import GridCategories from './GridCategories';
import ColumnCategories from './ColumnCategories';

const categories = [
  {
    title: '전체',
    description: '모든 기록들',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    path: 'all',
  },
  {
    title: 'JavaScript',
    description: 'JavaScript와 관련해 새롭게 알게된 것',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    path: 'javascript',
  },
  {
    title: '회고',
    description: '회고를 기록',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRkuJ0Cs9vB_CnEho7y09Awi95y0sTiAJ5w&usqp=CAU',
    path: 'retrospect',
  },
  {
    title: '서평',
    description: '완독한 책에 관한 기록',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGCAfwOTpru2lqG5CDwIvPxiLD12wkvih7w&usqp=CAU',
    path: 'bookReview',
  },
  {
    title: 'WEB',
    description: 'WEB과 관련해 새롭게 알게된 것',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkJw0VhBUVuqOlbIs2IyYsRdUU9o6hNsPYQ&usqp=CAU',
    path: 'web',
  },
];

type Props = {
  setCategory: React.Dispatch<(prevState: string) => undefined>,
  searchValue: string
}

const Categories: React.FC<Props> = ({ setCategory }) => {
  const handleOnClick = (event) => {
    const path = event.target.closest('li').dataset.path;
    window.history.pushState('data', 'category', `?category=${path}`);
    setCategory(path);
  };

  return (
    <>
      {window.location.search
        ? <ColumnCategories
          categories={categories}
          handleOnClick={handleOnClick}
        />
        : <GridCategories
          categories={categories}
          handleOnClick={handleOnClick}
        />
      }
    </>
  );
};

export default Categories;
