import logo from './logo.svg';
import './App.css';

function Test() {
  const isTest = true;
  const isTest2 = false;
  if (isTest) {
    console.log('test');
    if (isTest2) {
      console.log('test2');
    }
  }
  console.log('Hello World');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Test;
