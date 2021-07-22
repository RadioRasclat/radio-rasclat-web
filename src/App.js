import Box from './components/Box/Box';

function App() {
  return (
    <div className="App">
      <Box
        p={3}
        mb={[ 4, 5 ]}
        color="background"
        bg="primary">
        Cookies!
      </Box>
    </div>
  );
}

export default App;
