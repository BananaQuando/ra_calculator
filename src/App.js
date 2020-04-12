import React from 'react';
import './css/main.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="card-hover-shadow-2x mb-3 mt-3 card">
            <div className="card-header">Calculator</div>
            <div className="card-body">
              asdasd
            </div>
            <div className="d-block text-right card-footer">
              <button className="mr-2 btn btn-link btn-sm">Cancel</button>
              <button className="btn-shadow-primary btn btn-primary btn-lg">Submit</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-hover-shadow-2x mb-3 mt-3 card">
            тут карточки задач по группам
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
