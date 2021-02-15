
import './App.css';
import ColorHeader from './ColorHeader';
import FirstCounter from './FirstCounter'
import SecondCounter from './SecondCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstCounter/>
        <SecondCounter/>
        <ColorHeader/>
      </header>
    </div>
  );
}

export default App;
