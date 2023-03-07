import logo from './logo.svg';
import './App.css';
import Contador from './components/contador';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faClock } from '@fortawesome/free-solid-svg-icons'

const App = (props) => {
  return (
    
    <div className="container text-center mt-5 bg-dark py-5">
      <div className="row text-white fs-1 ">
        <div className="col">
          
        </div>
        <div className="col">
          {Math.floor(props.numero / 3600)}
        </div>
        <div className="col">
          {Math.floor(props.numero / 600)}
        </div>
        <div className="col">
          {Math.floor(props.numero / 60)}
        </div>
        <div className="col">
          {Math.floor(props.numero % 10)}
        </div>

      </div>
    </div>

  );
}

export default App;




