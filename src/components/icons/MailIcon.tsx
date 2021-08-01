import React from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const MailIcon: React.FC = () => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 479.058 479.058"
      height="20"
      width="20"
      viewBox="0 0 479.058 479.058"
      fill="#e8e4e4"
    >
      <path d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
    </SVG>
  );
};

const FillChange = keyframes`
  0%{fill: #e8e4e4}
  50%{fill: #000}
  100%{fill: #e8e4e4}
`;

const SVG = styled.svg`
  fill: #e8e4e4;
  animation: ${FillChange} 8s ease infinite;
`;

export default MailIcon;
