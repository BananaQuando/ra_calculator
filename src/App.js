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
              <div className="drag-and-drop">
                  <div className="drag-and-drop__text">
                    Drop tasks
                  </div>
              </div>
            </div>
            <div className="d-block text-right card-footer">
              <div className="widget-content p-0">
                <div className="widget-content-outer">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left">
                      <div className="widget-heading">Total Orders</div>
                    </div>
                    <div className="widget-content-right">
                      <div className="widget-numbers text-success">
                        <small>$</small>
                        0
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-hover-shadow-2x mb-3 mt-3 card">
            <div className="card-body">
              тут карточки задач по группам
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
