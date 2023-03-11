import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const App = (props) => {
  return (
    
    <div className="container text-center mt-5 bg-dark py-5">
      <div className="row text-white fs-1 ">
        <div className="col">
          <p ><FontAwesomeIcon icon={faClock} size="2x" /></p>
        </div>
        <div className="col">
          {Math.floor(props.numero /600 % 6)}
        </div>
        <div className="col">
          {Math.floor(props.numero /60 %10)}       
        </div>
        <div className="col">
                :
        </div>
        <div className="col">
        {Math.floor(props.numero /10 %6)}
        </div>
        <div className="col">
          {Math.floor((props.numero  % 10)) }
        </div>

      </div>
    </div>

  );
}

export default App;




