import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

import NameBadge from './components/NameBadge'
import NameBadge2 from './components/NameBadge2'

// const NameBadge2 = () => <div>I am Mark 2!!</div>

let myName = 'Mark'

function App() {
  const [randomName, setRandomName] = useState("Unknown")
  const [randomNumber, setRandomNumber] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello, my name is { myName } !!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NameBadge firstName = "Tom Hanks"/>
        <NameBadge2 />
        <p>Random name is { randomName }</p>
        <button onClick= { () => setRandomName('Mark') }> Set randomName to Mark</button>
        <button onClick= { () => setRandomName('Blanca') }> Set randomName to Blanca</button>
        <button onClick= { () => setRandomName('Brad') }> Set randomName Brad</button>
        <p>Random number is { randomNumber }</p>
        <button onClick={ () => setRandomNumber(Math.random()*100) }>New random number</button>
      </header>
    </div>
  );
}

export default App;
