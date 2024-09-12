import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
        </p>
       
      </header>
    </div>
  );
}

// jsx renders data as text when we enter it in curly braces
// the curly braces tell us that it is a javascript expression
// we cannnot however express an object in the curly braces
// a boolean will also not be rendered
// shift option a will comment out a block of code in vscode

export default App;
