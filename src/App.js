import Box from './components/Box/Box';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Marquee from "react-fast-marquee";
import styled from 'styled-components';

const Main = styled.div`
  position: relative;
`

function App() {
  return (
    <div className="App">
      <Main>
        <Header/>
        <Marquee pauseOnHover="true">
          <h4>I can be a React component, multiple React components, or just some text. </h4>
          <h4>I can be a React component, multiple React components, or just some text. </h4>
          <h4>I can be a React component, multiple React components, or just some text. </h4>
        </Marquee>
        <Container>
        </Container>
      </Main>
    </div>
  );
}

export default App;
