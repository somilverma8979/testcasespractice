import logo from './logo.svg';
import './App.css';
import Button from "./components/button/button"
import Home from "./components/home/home"

function App() {
  return (
    <div className="App">
      <Button label="Click me"></Button>
      <Home />
    </div>
  );
}

export default App;
