import './App.scss';

// Import components
import FootballField from './components/Home';

function App() {
  return (
    <div className="App" data-testid="app">
      <FootballField />
    </div>
  );
}

export default App;