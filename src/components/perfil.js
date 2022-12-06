/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import "./css/style.css";
export default class Perfil extends Component {


  render() {
    return (
      <div
      style={{backgroundImage: `url("./F5.PNG")`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      border: "1px solid #565555",
      height: "w-100",}}
       class="container my-5 d-flex justify-content-center form-wrapper rounded-4 " >
         <div className="form-content">                    
                      <div className="form-content">
                      <h1 style={{fontFamily:"Raleway,bold"}} className="text-thumbnail bg-warning font-weight-bold mt-5 justify-content-center d-flex form-wrapper">Dora Paola Pacheco Moreno</h1>
                         <h3 style={{fontFamily:"Raleway, bold "}} className="img-thumbnail form-title mt-5 d-flex justify-content-center aline-100 bg-light form-wrapper rounded-4 ">Sobre mí</h3>
                      </div>
               <h5 style={{fontFamily:"cursive,bold"}}  className="img-thumbnail rounded-4  tex_perfil mx-5 mt-5 my-5 mt-5 bg-light text-align: justify; padding: 2em
 ">
               Soy Licenciada en matemáticas y estadística, con experiencia en la administración de bases de datos,
               análisis de datos estadísticos, sistematización de información, verificación y validación de datos,
               establecimiento y medición de indicadores, sacar inferencias y presentación de informes de gestión y
               resultados. Con competencias y capacidades como la orientación a los resultados, la planeación, la
               creatividad, el mejoramiento continuo y la capacidad de análisis. Licenciada en matemáticas y
               estadística, con 3 de años de experiencia, realizando funciones de aplicación de planes de clase y
               evaluaciones, desarrollo y análisis de proyectos de mejoramiento del estudiante, desarrollo y
               ejecución proyecto de ajedrez de primaria y básica secundaria y liderazgo de grupos de trabajo,
               diseño, planeación y aplicación de actividades didácticas basadas en la enseñanza de conceptos
               matemáticos y estadísticos; además tengo manejo de programas estadísticos (Excel, R estadístico,
               SPSS, Python, Java, JS, React, Bootstrap, SQL, Html,CSS). Soy emprendedora, responsable, con espíritu crítico, analítico e
               innovador, con una capacidad investigadora que me permite interactuar eficazmente con
               profesionales de otras disciplinas, tanto en el área de docencia, como en el campo empresarial.
                </h5>
             
            </div>
       
        
        <img 
        src="/fotop.jpeg" alt="" className=" img-thumbnail zoom rounded-circle w-50 my-5 mt-5 d-flex justify-content-center form-wrapper"></img>
  
        </div>
        
      
);

      
  }


}



