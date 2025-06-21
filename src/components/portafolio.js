import React, { Component } from "react";
import "./css/style.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default class Portafolio extends Component {
  render() {
    return (
      <Row xs={1} md={2} className="g-4  mt-5">
      {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card
              className="img-thumbnail rounded-1"
              style={{
                backgroundImage: `url("./alas.PNG")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "2px solid #ffffff",
                padding: 0,
                margin: 0
                
              }}
            >
              
               <Card.Img
                variant="top"
                src="./colegio.PNG.jpg"
                className="img-thumbnail"
              />
                <Card.Img
                variant="top"
                src="./colegio1.jpg"
                className="img-thumbnail"
              />
              <Card.Body>
                <Card.Title className="text-center bold h3 bg-success img-thumbnail rounded-3" style={{ fontFamily: "Raleway,bold" }}>
                 Software MERN "School.Info."
                </Card.Title>
                <Card.Text style={{ fontFamily: "Raleway,bold" }}>
                   <p>Desarrollo de aplicación Web</p>
                   <p>Diciembre 2024</p>
                   <p>"El software School.info busca mejorar la eficiencia operativa, académica y 
                       comunicativa de cualquier institución y al mismo tiempo promover un 
                       entorno de aprendizaje colaborativo y accesible. 
                       Este sistema facilita los procesos y/o tareas administrativas tales como, 
                       inscripción de estudiantes y docentes, control de asistencia, generación de 
                       reportes académico y convivenciales. Permite la creación, seguimiento y 
                       evaluación de planes de estudio y programas académico, así mismo permite 
                       establecer canales de comunicación entre docentes, estudiantes y personal 
                      administrativo. "</p>
                   
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://drive.google.com/file/d/13d1w1MDf2Nz07XhImvtH4Di3BiqndltC/view?usp=sharing"
                  variant="warning"
                  
                >
                  Ver Manual de Usuario
                </Button>
                <Button
                target="_blank"
                href="https://github.com/PAOLAPACHECO2022/schoolinfoserver.git"
                variant="warning"
                >
                Ver Repositorio
               </Button>
                <Button
                target="_blank"
                href="https://schoolinfocliente.onrender.com/"
                variant="warning"
                >
                Ver Aplicaciòn
               </Button>
       
              </Card.Body>
            </Card>
          </Col>
        ))}
   {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card
              className="img-thumbnail rounded-1"
              style={{
                backgroundImage: `url("./alas.PNG")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "2px solid #ffffff",
                padding: 0,
                margin: 0
                
              }}
            >
              
               <Card.Img
                variant="top"
                src="./t2.JPG"
                className="img-thumbnail"
              />
                <Card.Img
                variant="top"
                src="./t1.JPG"
                className="img-thumbnail"
              />
              <Card.Body>
                <Card.Title className="text-center bold h3 bg-success img-thumbnail rounded-3" style={{ fontFamily: "Raleway,bold" }}>
                 “Factores demográficos,  socioeconómicos y  académicos que influyen sobre los resultados del componente genérico de la prueba Saber Pro.
                 Caso: Administración de Empresas Agropecuarias de la universidad pedagógica y tecnológica de Colombia, seccional Duitama”.
                </Card.Title>
                <Card.Text style={{ fontFamily: "Raleway,bold" }}>
                  Proyecto de investigación (Modelo de regresión logística para la predicción de los puntajes de la prueba saber Pro)
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://drive.google.com/file/d/1Kla1LvU8mzuNdSFvrIUOMkaDy0OCWKb4/view?usp=sharing"
                  variant="warning"
                  
                >
                  Ver Proyecto de investigación 
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
  <Col key={idx}>
    <Card
      className=" img-thumbnail rounded-1"
      style={{
        backgroundImage: `url("./alas.PNG")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        border: "2px solid #ffffff",
        padding: 0,
        margin: 0
      }}
    >
      <Card.Img
        variant="top"
        src="./laplaza.PNG"
        className="img-thumbnail rounded-0"
        style={{ margin: 0, padding: 0 }}
      />
      <Card.Img
        variant="top"
        src="./laplaza2.PNG"
        className="rounded-0 img-thumbnail"
        style={{ margin: 0, padding: 0 }}
      />

      <Card.Body style={{ padding: "1rem" }}>
        <Card.Title
          className="text-center h3 bg-success rounded-3"
          style={{ fontFamily: "Raleway, bold" }}
        >
          La Plaza Campesina
        </Card.Title>
        <Card.Text style={{ fontFamily: "Raleway, bold" }}>
          <p>Desarrollo de aplicación Web</p>
          <p>Proyecto Ciclo 4 (front end y Back end)</p>
          <p>Presentado a Misión Tic 2022 UTP</p>
          <p>28 de Noviembre 2022</p>
        </Card.Text>
        <Button
          target="_blank"
          href="https://github.com/PAOLAPACHECO2022/LA--PLAZA--CAMPESINA--2022.git"
          variant="warning"
        >
          Ver Repositorio
        </Button>
        <Button
          target="_blank"
          href="https://www.youtube.com/watch?v=NEpJmuFagwE"
          variant="success"
          className="mx-3"
        >
          Ver Video
        </Button>
      </Card.Body>
    </Card>
  </Col>
))}

        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card
              className="img-thumbnail rounded-1"
              style={{
                backgroundImage: `url("./alas.PNG")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "1px solid #ffffff",
                padding: 0,
                margin: 0
              }}
            >
       
              <Card.Img
                variant="top"
                src="./lafinca.PNG"
                className="img-thumbnail rounded-1"
                
              />
              <Card.Img
                variant="top"
                src="./crearp.PNG"
                className="img-thumbnail rounded-1"
                
              />
              <Card.Body>
                <Card.Title className="text-center bold h3 bg-success  img-thumbnail rounded-3" style={{ fontFamily: "Raleway,bold" }}>
                  CRUD de La Plaza Campesina
                </Card.Title>
                <Card.Text style={{ fontFamily: "Raleway,bold" }}>
                  <p>Desarrollo de Software (CRUD de productos Agricolas)</p>
                  <p>Proyecto Ciclo 3 (front end y Back end)</p>
                  <p>Presentado a Misión Tic 2022 UTP</p>
                  <p>4 de octubre del 2022</p>
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/PAOLAPACHECO2022/LA-PLAZA.git"
                  variant="warning"
                >
                  Ver Repositorio
                </Button>
                <Button
                  target="_blank"
                  href="https://youtu.be/prNclF8s5nU"
                  variant="success"
                  className="mx-3"
                >
                  Ver Video
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card
               className="img-thumbnail rounded-1"
              style={{
                backgroundImage: `url("./alas.PNG")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "2px solid #ffffff",
                padding: 0,
                margin: 0
              }}
            >
              <Card.Img
                variant="top"
                src="./lengua.PNG"
                className="img-thumbnail rounded-1"
               
              />
              <Card.Body>
                <Card.Title className="text-center bold h3 bg-success img-thumbnail rounded-3" style={{ fontFamily: "Raleway,bold" }}>
                  Otros Proyectos
                </Card.Title>
                <Card.Text style={{ fontFamily: "Raleway,bold" }}>
                  Proyectos realizados con lenguajes tales como: Python, Js,
                  Java, React-Boostrap, Sql, Css, entre otros.
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/PAOLAPACHECO2022"
                  variant="warning"
                >
                  Ver Repositorio
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card
               className="img-thumbnail rounded-1"
              style={{
                backgroundImage: `url("./alas.PNG")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "2px solid #ffffff",
                padding: 0,
                margin: 0
              }}
            >
              <Card.Img
                variant="top"
                src="./lengua.PNG"
                className="img-thumbnail rounded-1"
              />
              <Card.Body>
                <Card.Title className="text-center bold h3 bg-success  img-thumbnail rounded-3" style={{ fontFamily: "Raleway,bold" }}>
                  Proyecto grupal(La plaza)
                </Card.Title>
                <Card.Text style={{ fontFamily: "Raleway,bold" }}>
                  Proyectos realizados con lenguajes tales como: Python, Js,
                  Java, React-Boostrap, Sql, Css, entre otros.
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://github.com/La-plaza"
                  variant="warning"
                  
                >
                  Ver Repositorio Grupal
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card
              className="img-thumbnail rounded-1"
              style={{
                backgroundImage: `url("./alas.PNG")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "2px solid #ffffff",
                padding: 0,
                margin: 0
                
              }}
            >
              
               <Card.Img
                variant="top"
                src="./t2.JPG"
                className="img-thumbnail"
              />
                <Card.Img
                variant="top"
                src="./t1.JPG"
                className="img-thumbnail"
              />
              <Card.Body>
                <Card.Title className="text-center bold h3 bg-success img-thumbnail rounded-3" style={{ fontFamily: "Raleway,bold" }}>
                 “Factores demográficos,  socioeconómicos y  académicos que influyen sobre los resultados del componente genérico de la prueba Saber Pro.
                 Caso: Administración de Empresas Agropecuarias de la universidad pedagógica y tecnológica de Colombia, seccional Duitama”.
                </Card.Title>
                <Card.Text style={{ fontFamily: "Raleway,bold" }}>
                  Proyecto de investigación (Modelo de regresión logística para la predicción de los puntajes de la prueba saber Pro)
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://drive.google.com/file/d/1Kla1LvU8mzuNdSFvrIUOMkaDy0OCWKb4/view?usp=sharing"
                  variant="warning"
                  
                >
                  Ver Proyecto de investigación 
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
