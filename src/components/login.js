/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";

export default class Login extends Component {

  render() {
    return (
      <div class="container my-5 d-flex justify-content-center aline-100 bg-light form-wrapper rounded-4 " >
        
        <div className="container">
          <form className="form">
            <div className="form-content">
              <h3 className="form-title mt-5 d-flex justify-content-center aline-100 bg-light form-wrapper rounded-4 ">Sign In</h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="&#128273;Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="&#128274;Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
            <a href="/producer"  rel="noopener noreferrer" id="Olvidocontrasena">Olvido su contraseña?</a>
          <a href="/producer"  rel="noopener noreferrer" id="NuevoUsuario">Eres nuev@ registrate aquí</a>
              </p>
            </div>
          </form>
        </div>
        </div>
      
);
    
      
  }
}

