import React from 'react';
import './css/main.css';
import Calculator from './components/calculator';

// https://egghead.io/lessons/react-reorder-a-list-with-react-beautiful-dnd

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Calculator />
        </div>
      </div>
    )
  }
}

export default App;
