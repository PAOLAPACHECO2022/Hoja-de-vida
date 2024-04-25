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
            <p>Soy Licenciada en matemáticas y estadística y egresada de Misión Tic 2022 como desarrolladora de software Junior, con experiencia en análisis de datos estadísticos, sistematización de información,
              verificación y validación de datos, establecimiento y medición de indicadores, desarrollo de modelos predictivos, presentación de informes de gestión y
               resultados. Con competencias y capacidades como la orientación a los resultados, la planeación, la
               creatividad, el mejoramiento continuo y la capacidad de análisis. </p>
                

               <p> Me gusta estar siempre en proceso de aprendizaje, es por esto que trato de estar lista para ello, 
                 capacitándome con diversos conocimientos que me ayuden con el cumplimiento de mis objetivos, 
                 tales como el manejo de: Excel, R estadístico, SPSS, Html, CSS, Boostrap, React, JS, MongoDB, SQL,  Python y Java.  </p>
                

               <p>Tengo 3 de años de experiencia, realizando funciones tales como el diseño, 
                 planeación y aplicación de actividades didácticas basadas en la enseñanza de conceptos matemáticos y  estadísticos,
                 desarrollo y análisis de proyectos de mejoramiento del estudiante y liderazgo de grupos de trabajo. </p>
              

               <p>Soy emprendedora, responsable, con espíritu crítico, analítico e
               innovador, con una capacidad de interactuar eficazmente con
               profesionales de otras disciplinas, tanto en el área de docencia, como en el campo empresarial.</p>
          </h6>
        </div>
      </div>
    );
  }
}
