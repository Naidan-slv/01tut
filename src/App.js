import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

// jsx renders data as text when we enter it in curly braces
// the curly braces tell us that it is a javascript expression
// we cannnot however express an object in the curly braces
// a boolean will also not be rendered
// shift option a will comment out a block of code in vscode

export default App;
