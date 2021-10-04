import React from "react";
import logo from "./text.jpg";

function App() {

  return (
    <div className="container">
      <h1 className="text-center">My Pokemon</h1>
        <div className="container">
          <div className="col">
            <div className="row">
            <div className="card-group">
            
            <div className="col-6 col-md-4">
              <div className="card">
                <img src={logo} className="App-logo" alt="logo" />
                  <div className="card-body">
                    <h5 className="card-title">Title Pokemon</h5>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
              </div> 
            </div>

            <div className="col-6 col-md-4">
              <div className="card">
                <img src={logo} className="App-logo" alt="logo" />
                  <div className="card-body">
                    <h5 className="card-title">Title Pokemon</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
              </div> 
            </div>

            <div className="col-6 col-md-4">
              <div className="card">
                <img src={logo} className="App-logo" alt="logo" />
                  <div className="card-body">
                    <h5 className="card-title">Title Pokemon</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
              </div> 
            </div>

            </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
