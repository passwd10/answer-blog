import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const AboutMePage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title={'About me | Park Answer'}
        description={'저에 대해 소개합니다'}
      />
      <h2>안녕하세요</h2>
    </Layout>
  );
};

export default AboutMePage;
