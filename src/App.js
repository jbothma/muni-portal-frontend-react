import Container from '@material-ui/core/Container';
import TemporaryDrawer from './TemporaryDrawer.js';

function App() {
  return (
    <div>
      <TemporaryDrawer/>
      <Container>
        {'stuff'}
      </Container>
    </div>
  );
}

export default App;
