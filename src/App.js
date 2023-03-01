import './App.scss';
// Import components
import FootballField from './components/Home';
// Import components

function App() {
  return (
    <div className="App" data-testid="app">
      <FootballField />
    </div>
  );
}

export default App;