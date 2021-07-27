import * as React from 'react';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const IndexPage: React.FC = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div>
        Hello World!
      </div>
    </main>
  );
};

export default IndexPage;
