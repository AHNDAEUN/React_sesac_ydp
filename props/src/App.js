
import './App.css';
import Button from './Button';
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
        <hr/>

        <Button/>
    </div>
  );
}

export default App;
