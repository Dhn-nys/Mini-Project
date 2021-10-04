import React from "react";
import logo from "./text.jpg";

function App() {

  return (
    <div>

      <div className="">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Pokemon</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a type="button" class="nav-link" data-bs-toggle="modal" data-bs-target="#takes">
                  My Inventory
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="modal fade" id="takes" tabindex="-1" aria-labelledby="takesLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="takesLabel">🐾 My Pokemon</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" id="take">
              <div class="list-group"> 
              
              </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div class="row row-cols-1 row-cols-md-3 g-4" id="pokemonList">
          
          </div> 
        </div>

        <div class="modal fade" id="details" tabindex="-1" aria-labelledby="detailsLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="detailsLabel">Information</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">

                    </div>
                    
                    <div class="card mb-3" id="detail">
                      
                    </div>

                  </div>
                </div>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default App;
