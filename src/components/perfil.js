//* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import "./css/style.css";
export default class Perfil extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url("./jirasol.PNG")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          border: "3px solid #d8b208",
          height: "w-100",
        }}
        class="container my-5 d-flex justify-content-center form-wrapper rounded-4 "
      >
        <div className="form-content">
          <div className="form-content">
            <img  
            style={{border: "2px solid #d8b208" }}
              src="/fotop1.PNG"
              alt=""
              className="zoom rounded-circle w-50 my-5 mt-5 d-flex justify-content-center form-wrapper"
            ></img>
            <p
              style={{ fontFamily: "cursive,bold" }}
             className="text-thumbnail h1 text-center rounded-4 my-5 font-weight-bold mt-5"
            >
              Dora Paola Pacheco Moreno
            </p>

            <h3
             style={{
              fontFamily: "cursive,bold" 
            }}
              className="text-center font-weight-bold mt-5 justify-content-center d-flex form-wrapper"
            >
              Sobre mí
            </h3>
          </div>
          <h6
          style={{
            backgroundImage: `url("https://i.pinimg.com/564x/86/b0/98/86b0980ef543191114a946d7d4f1c90a.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            border: "1px solid #565555",
            height: "w-100",
            fontFamily: "Raleway, bold, text-justify"
            
          }}
            
            className="img-thumbnail rounded-4 text-justify mx-2 mt-2 my-3 fw-bold"
          >
            <p>Soy Licenciada en Matemáticas y Estadística y Tecnóloga en Análisis y Desarrollo de Software, con formación en Desarrollo de Software,
              Análisis y Visualización de Datos a través del programa Misión TIC 2022 (MinTIC). </p>
                

               <p> Cuento con más de 3 años de experiencia como analista de datos, con manejo de herramientas como Excel, Power BI, SQL, R, Python, MongoDB,
              y procesos ETL, entre otros. He desarrollado modelos predictivos (machine learning), informes de gestión basados en análisis estadístico, 
              sistematización, verificación, validación de datos y automatización de reportes.  </p>
                

               <p>Además, tengo experiencia en el desarrollo de software y soporte técnico en frontend y backend, así como en la gestión de bases de datos en entornos administrativos. 
              También he trabajado durante 3 años como docente en el área de matemáticas.</p>
              

               <p>Me interesa seguir creciendo en los campos de ciencia de datos y desarrollo, 
              incorporando el uso de la inteligencia artificial como herramienta estratégica para aportar soluciones, mejorar procesos y apoyar la toma de decisiones. 
              Busco contribuir con pensamiento analítico, innovación y compromiso en cada proyecto..</p>
          </h6>
        </div>
      </div>
    );
  }
}
