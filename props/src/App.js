
import './App.css';
import ClassComponent from './ClassComponent';
import FuntionComponent from './FunctionComponent';

function App() {
  return (
    <div className="App">
        <ClassComponent/>
        <ClassComponent name = "SaSAC 6기"/>
        <hr/>

        <FuntionComponent/>
        <FuntionComponent name = "SaSAC 6기"/>
    </div>
  );
}

export default App;
