import React from 'react';
import Helmet from 'react-helmet';

type Props = {
  title: string;
  description: string;
  image?: string;
}

const SEO: React.FC<Props> = ({ title, description, image }) => {
  return (
    <Helmet
      htmlAttributes={{ 'lang': 'en' }}
    >
      <meta charSet='UTF-8' />
      <meta name='description' content={description} />
      <meta property='og:title' content={title}/>
      <meta property='og:type' content='website'/>
      <meta property='og:description' content={description}/>
      <meta property='og:image' content={`https://answer.gatsbyjs.io${image}`} />
      <title>{title}</title>
    </Helmet>
  );
};

export default SEO;
