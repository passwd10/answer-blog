import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title={'BLOG | Park Answer'}
        description={'블로그의 메인페이지 입니다 🚀'}
      />
      <h2>블로그 입니다</h2>
    </Layout>
  );
};

export default BlogPage;
