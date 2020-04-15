import React from 'react';
import './css/main.css';
import Calculator from './components/calculator';
import initialData from "./Store/initialData";
import calculatorData from "./Store/calculatorData";

// https://egghead.io/lessons/react-reorder-a-list-with-react-beautiful-dnd

class App extends React.Component {
  state = {
    tasks: initialData
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Calculator data={this.state} />
        </div>
      </div>
    )
  }
}

export default App;
