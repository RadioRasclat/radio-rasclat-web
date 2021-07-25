import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/scale-subtle.css';

import { ReactComponent as Logo } from './../../assets/logo_rasclat.svg';

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  font-family: "Adieu";
  padding: 0.6rem 0;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-basis: auto;
  flex-shrink: 0;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;

  :not(:last-child) {
    margin-right: 24px;
  }

  svg {
    width: 50px;
  }
`

const SearchWrapper = styled.div`
  position: relative;
`

function Header() {
  return (
    <Nav>
      <Container>
        <NavWrapper>
          <Logo />

          <SearchWrapper>

          </SearchWrapper>

          <Tippy
            content={<span>Tooltip</span>}
            trigger="click"
            theme="light"
            allowHTML="true"
            animation="scale-subtle"
            interactive="true"
          >
            <button>My button</button>
          </Tippy>

        </NavWrapper>
      </Container>
    </Nav>
  );
}

export default Header;
