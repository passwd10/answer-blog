import React, { useState } from 'react';

import styled from '@emotion/styled';

const HamburgerMenu: React.FC = () => {
  const [isHambergerOn, setIsHambergerOn] = useState(false);

  const handleOnClickHambuerger = () => {
    setIsHambergerOn(!isHambergerOn);
  };

  return (
    <Container>
      <BarContainer onClick={handleOnClickHambuerger}>
        <Bar1 isHambergerOn={isHambergerOn}/>
        <Bar2 isHambergerOn={isHambergerOn}/>
        <Bar3 isHambergerOn={isHambergerOn}/>
      </BarContainer>
      <NavigationBar isHambergerOn={isHambergerOn}>
        <Ul isHambergerOn={isHambergerOn}>
          <Li>
            <Link href='/' aria-label='home' >
              HOME
            </Link>
          </Li>
          <Li>
            <Link href='/about' aria-label='about' >
              ABOUT
            </Link>
          </Li>
          <Li>
            <Link href='mailto:inseo9494@gmail.com' aria-label='mail' >
              CONTACT
            </Link>
          </Li>
        </Ul>
      </NavigationBar>
    </Container>
  );
};

type Props = {
  isHambergerOn: boolean;
}

const NavigationBar = styled.nav`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  z-index: ${(props: Props) => props.isHambergerOn ? 9 : -1};
  background: #cd4f4f;
  transition: 0.6s;

  opacity: ${(props: Props) => props.isHambergerOn ? 0.9 : 0};
`;

const Ul = styled.ul`
  margin-top: 70px;
  z-index: 6;
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: flex-end;

  display: ${(props: Props) => props.isHambergerOn ? 'block' : 'none'};
`;

const Li = styled.li`
  margin: 20px;
`;

const Link = styled.a`
  color: #e3e3e3;
  font-weight: bold;

  :hover {
    color: #242424;
  }
`;

const BarContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  display: inline-block;
  cursor: pointer;
  z-index: 10;
`;

const Container = styled.div`
  @media (min-width: 751px) {
    display: none;
  }
`;

const Bar1 = styled.div`
  width: 33px;
  height: 4px;
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 3px;

  background-color: ${(props: Props) => props.isHambergerOn ? '#e3e3e3' : '#333' };
  transform: ${(props: Props) => props.isHambergerOn && 'rotate(-45deg) translate(-5px, 9px)' };
`;

const Bar2 = styled.div`
  width: 33px;
  height: 4px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 3px;

  opacity: ${(props: Props) => props.isHambergerOn ? 0 : 1};
`;

const Bar3 = styled.div`
  width: 33px;
  height: 4px;
  margin: 6px 0;
  transition: 0.4s;
  border-radius: 3px;

  background-color: ${(props: Props) => props.isHambergerOn ? '#e3e3e3' : '#333' };
  transform: ${(props: Props) => props.isHambergerOn && 'rotate(45deg) translate(-5px, -9px)' };
`;


export default HamburgerMenu;
