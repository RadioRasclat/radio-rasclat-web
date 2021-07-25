import Box from './components/Box/Box';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Gradient from './components/Gradient';
import styled from 'styled-components';
import Marquee3k from 'marquee3000';

const Main = styled.div`
  position: relative;
  overflow-x: hidden;
  color: #ffffff;
`

function App() {
  Marquee3k.init()
  return (
    <div className="App">
      <Gradient/>
      <Main>
        <Header/>
        <Container>
          <div className="marquee3k" data-speed="1.25">
            <h3>Radio Rasclat&nbsp;→&nbsp;alles auf einen Blick&nbsp;→&nbsp;</h3>
          </div>
          <Box>
            Cookies!
          </Box>
        </Container>
      </Main>
    </div>
  );
}

export default App;
