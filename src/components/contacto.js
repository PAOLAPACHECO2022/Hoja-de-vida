import React, { Component } from "react";
import "./css/style.css";

export default class Contacto extends Component {
  render() {
    return (
      <div class="container" style={{ fontFamily: "Raleway,bold" }}>
        <div class="section-title  text-center mt-5  ">
          <h2 Style={"color:  #4e3003"}> CONTACTO</h2>
          <p Style={" color:     #e79c2b"} style={{ fontFamily: "Raleway,bold" }}>
            Si deseas contactarme, lo puedes realizar mediante Email o mediante
            teléfono.
          </p>

          <p Style={"color: #7a4b05"}>GRACIAS POR VISITAR MI PÁGINA .</p>
        </div>

        <div class="row" data-aos="fade-in">
          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4 Style={"color:  #7a4b05"}>Ubicación</h4>
                <p Style={" color:   #f7ac0b"}>Cundinamarca, Bogotá,</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4 Style={"color: #7a4b05"}>Email:</h4>
                <p Style={" color:  #e79c2b"}>paolapacheco.moreno@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4 Style={"color: #7a4b05"}>Teléfono:</h4>
                <p Style={" color:   #e79c2b"}>+57 3209887626</p>
              </div>
            </div>
          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              action="https://formsubmit.co/paolapacheco.moreno@gmail.com"
              class="php-email-form"
              method="POST"
            >
              <div class="row">
                <div class="form-group col-md-6">
                  <label Style={" color:  #e79c2b"} for="name">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    class="form-control img-thumbnail"
                    placeholder="Ingrese nombre"
                    id="name"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label Style={" color:  #e79c2b"} for="name">
                    Email
                  </label>
                  <input
                 
                    type="email"
                    class="form-control img-thumbnail"
                    name="email"
                    id="email"
                    placeholder="Ingrese su email"
                    required
                  />
                </div>
              </div>
              <div class="form-group">  
                <label Style={" color:  #e79c2b"} for="name">
                  Asunto
                </label>
                <input
                  type="text"
                  class="form-control img-thumbnail"
                  placeholder="Ingrese su asunto"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div class="form-group">
                <label Style={" color:  #e79c2b"} for="name">
                  Mensaje
                </label>
                <textarea
                  class="form-control img-thumbnail"
                  name="message"
                  placeholder="Ingrese descripción del mensaje"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div class="text-center ">
                <button class="img-thumbnail bg-warning" type="submit" >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

