/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import Form from 'react-bootstrap/Form';

export default class Producer extends Component {

  render() {
    return (
      <div class="container my-5 d-flex justify-content-center aline-100 bg-light form-wrapper rounded-4 " >
        
        <div className="container">
          <form className="form">
            <div className="form-content">
              <h3 className="form-title mt-5 d-flex justify-content-center aline-100 bg-light form-wrapper rounded-4 ">Sign In</h3>
              <div className="form-group mt-3">
            <label>Nombres y Apellidos Completos</label>
            <input
              type="Nombres y Apellidos Completos"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
              
          <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledSelect">Tipo de documento</Form.Label>
              <Form.Select id="disabledSelect">
              <option selected>Tipos de documento</option>
                            <option value="1">Cédula de ciudadania</option>
                            <option value="2">Tarjeta de Identidad</option>
                            <option value="3">Cédula de extrangería</option>
                            <option value="4">Permiso Especial de Permanencia</option>
                            <option value="5">Pasaporte</option>
              </Form.Select>
            </Form.Group>
            
            <div className="form-group mt-3">
            <label>Documento de Identidad</label>
            <input
              type="Documento de identidad"
              className="form-control mt-1"
              placeholder="1737355772"
            />
          </div>

          <div className="form-group mt-3">
            <label>Ciudad/Municipio</label>
            <input
              type="Ciudad/Municipio"
              className="form-control mt-1"
              placeholder="Ciudad/Municipio"
            />
          </div>
          <div className="form-group mt-3">
            <label>Dirección</label>
            <input
              type="Dirección"
              className="form-control mt-1"
              placeholder="Dirección"
            />
          </div>

          <div className="form-group mt-3">
            <label>Teléfono</label>
            <input
              type="Teléfono"
              className="form-control mt-1"
              placeholder="Teléfono"
            />
          </div>

              <div className="form-group mt-3">
                <label>Contraseña</label>
                <input
                  type="Contraseña"
                  className="form-control mt-1"
                  placeholder="&#128274;Contraseña"
                />
                <div id="passwordHelpBlock" class="form-text">
                        Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.
                </div> 
              </div>
              <div className="form-group mt-3">
                <label>Confirmar contraseña</label>
                <input
                  type="Confirmar contraseña"
                  className="form-control mt-1"
                  placeholder="&#128274;Confirmar contraseña"
                />
              </div>
              <div className="d-grid gap-2 mt-3 my-5">
                <button type="submit" className="btn btn-success">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
        </div>
      
);
    
      
  }
}

