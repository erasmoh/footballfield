import logo from './logo.svg';
import './App.css';
// Import components
import FootballField from './components/Home';
// Import components

function App() {
  return (
    <div className="App">
      <FootballField />
    </div>
  );
}

export default App;


// var alumnos = [1,2,3,4]
// var index = alumnos.length;
// var primeraParte = alumnos.slice(0, index/2);
// var segundaParte = alumnos.slice(index/2,index);
// console.log(primeraParte);
// console.log(segundaParte);