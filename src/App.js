import Box from './components/Box/Box';
import Container from './components/Container/Container';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Box>
          Cookies!
        </Box>
      </Container>
    </div>
  );
}

export default App;
