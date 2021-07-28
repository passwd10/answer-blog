import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title={'HOME | Answer\'s blog'}
        description={'개발 흔적을 남기는 블로그'}
      />
      <div>
        Hello World!
      </div>
    </Layout>
  );
};

export default HomePage;
