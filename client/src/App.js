import logo from './logo.svg';
import './App.css';

function App() {
  const rows = [];
  for (let i = 1; i <= 100; i += 10) {
    const cells = [];
    for (let j = i; j <= i + 9; j++) {
      if (j <= 100) {
        cells.push(<td key={j}>{j}</td>);
      } else {
        cells.push(<td key={j}></td>);
      }
    }
    rows.push(<tr key={i}>{cells}</tr>);
  }

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
        <table>
      <tbody>{rows}</tbody>
    </table>
      </header>
    </div>
  );
}

export default App;
