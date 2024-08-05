import './App.css';
import Counter from './Counter';
import CounterFunction from './CounterFunction';
import Practice from './Practice';
import SayFunction from './SayFunction';

function App() {
  return (
    <div className="App">
      <Counter/>
      <hr />

      <SayFunction/>
      <hr />

      <CounterFunction value={"Plus 1"}/>
      <hr />
      <Practice/>
    </div>
  );
}

export default App;