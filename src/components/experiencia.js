import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
export default function Experiencia() {
  const [show, setShow] = useState(false);
  const [shhow, sethShow] = useState(false);
  const [lshow, setlShow] = useState(false);
  const [wshow, setwShow] = useState(false);
  
  return (
    <>
      <Row xs={1} md={2} className="g-4  mt-5">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card
             
              className="img-thumbnail rounded-5"
style={{
  backgroundImage: `url("./jiras.PNG")`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  border: "3px solid #e6ca4e ",
  
}}
              class="container my-5 d-flex justify-content-center form-wrapper rounded-4 "
            >
              <Card.Img
                style={{ height: "10rem", width: "10rem" }}
                variant="top"
                className=" zoom rounded-circle border d-flex justify-content-center form-wrapper"
                src="./celestin.PNG"
              />
              <Card.Body>
                <Card.Title className="fw-bold" style={{ fontFamily: "Raleway,bold" }}>
                  Docente de matemáticas, estadística y geometría
                </Card.Title>
                <Card.Text className="fw-bold" style={{ fontFamily: "Raleway,bold" }}>
                  <p>Nombre de la empresa: Celestin Freinet Suba-Bogotá </p>
                  <p>Sector: Educación</p>
                  <p>Teléfono de la empresa: 3157492890</p>
                  <p>Cargo: Docente de 6°,7°, 8° y 9° </p>
                  <p>Ubicación:Bogotá Colombia,</p>
                  <p>Fecha de ingreso: febrero de 2020</p>
                  <p>Fecha de retiro: Noviembre de 2021 </p>
                </Card.Text>
                <Button variant="warning" onClick={() => setShow(true)}>
                  Logros
                </Button>

                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-dialog modal-lg"
                  aria-labelledby="example-custom-modal-styling-title"
                  ClassName="modal-dialog modal-xl"
                >
                  <Modal.Header
                    closeButton
                    style={{
                      backgroundImage: `url("./jirasol.PNG")`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      border: "1px solid #565555",
                    }}
                  >
                    <Modal.Title
                      variant="primary"
                      id=" example-custom-modal-styling-title h5"
                    >
                      <h5
                        style={{ fontFamily: "Raleway,bold" }}
                        className="fw-bold text-center text-uppercase font-weight-bold h3 px-3 "
                      >
                        Docente de matemáticas, estadística y geometría
                      </h5>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p style={{ fontFamily: "Raleway,bold" }}>
                      Diseño y aplicación de planes de clase, desarrollo y
                      análisis de guías de trabajo enfocadas al mejoramiento del
                      estudiante, manejo y liderazgo de grupos de trabajo,
                      tutoría de grupo, diseño y aplicación de actividades
                      didácticas basadas en la enseñanza de conceptos
                      matemáticos, diseño y aplicación de pruebas, manejo de
                      herramientas virtuales, teams, classroom, plataformas
                      institucionales, plataforma Milton Ochoa, Stantillana,
                      tableros virtuales, plataformas de juegos virtuales
                      (kahoot, quizizz.com , patlet, classdogo, wordwall.net,
                      creación de actividades en liveworksheet, Geogebra,
                      Geodenzo) y manejo de Excel. - Diseñé e implementematerial
                      didáctico y lúdico para mejorary captar la atención de los
                      niños.
                    </p>
                  </Modal.Body>
                </Modal>
              </Card.Body>
            </Card>
          </Col>
        ))}

        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card
           

                        
              className="img-thumbnail rounded-5"
style={{
  backgroundImage: `url("./flor.PNG")`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  border: "3px solid #3d6e05",
  
}}
  
            >
              <Card.Img
                style={{ height: "10rem", width: "10rem" }}
                variant="top"
                className="img-thumbnail zoom rounded-circle border d-flex justify-content-center form-wrapper"
                src="./icck.PNG"
              />
              <Card.Body>
                <Card.Title className="fw-bold" style={{ fontFamily: "Raleway,bold" }}>
                  Docente de matemáticas, estadística y geometría
                </Card.Title>
                <Card.Text className="fw-bold" style={{ fontFamily: "Raleway,bold" }}>
                  <p>
                    Nombre de la empresa: Instituto Cultural Ciudad Kennedy
                    (ICCK){" "}
                  </p>
                  <p>Sector: Educación</p>
                  <p>Teléfono de la empresa: 3165669327</p>
                  <p>Cargo: Docente de 4°,5°,8°, 9°, 10° y 11° </p>
                  <p>Ubicación:Bogotá Colombia</p>
                  <p>Fecha de ingreso: Mayo de 2019</p>
                  <p>Fecha de retiro: Noviembre de 2019 </p>
                </Card.Text>
                <Button variant="warning" onClick={() => setwShow(true)}>
                  Logros
                </Button>

                <Modal
                  show={wshow}
                  onHide={() => setwShow(false)}
                  dialogClassName="modal-dialog modal-lg"
                  aria-labelledby="example-custom-modal-styling-title"
                  ClassName="modal-dialog modal-xl"
                >
                  <Modal.Header
                    closeButton
                    style={{
                      backgroundImage: `url("./jirasol.PNG")`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      border: "1px solid #565555",
                    }}
                  >
                    <Modal.Title
                      variant="primary"
                      id=" example-custom-modal-styling-title h5"
                    >
                      <h5
                        style={{ fontFamily: "Raleway,bold" }}
                        className="fw-bold text-center text-uppercase font-weight-bold h3 px-3 "
                      >
                        Docente de matemáticas, estadística y geometría
                      </h5>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p style={{ fontFamily: "Raleway,bold" }}>
                      Docente de estudiantes primaría y bachillerato
                      (4°,5°,8°-11°). Diseño y aplicación de planes de área y de
                      clase, desarrollo y análisis de guías de trabajo diseño,
                      planeación y aplicación de actividades didácticas basadas
                      en la enseñanza deconceptos matemáticos.
                    </p>
                  </Modal.Body>
                </Modal>
              </Card.Body>
            </Card>
          </Col>
        ))}

        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card
              className="img-thumbnail rounded-5"
              style={{
                backgroundImage: `url("./marceles.PNG")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "3px solid #d8b208 ",
                
              }}
            >
              <Card.Img
                style={{ height: "10rem", width: "10rem" }}
                variant="top"
                className="img-thumbnail zoom rounded-circle border d-flex justify-content-center form-wrapper"
                src="./valencia.PNG"
              />
              <Card.Body>
                <Card.Title className="fw-bold" style={{ fontFamily: "Raleway,bold" }}>
                  Docente de matemáticas, estadística y geometría
                </Card.Title>
                <Card.Text className="fw-bold" style={{ fontFamily: "Raleway,bold" }}>
                  <p>
                    Nombre de la empresa: Colegio Guillermo León Valencia-
                    Duitama{" "}
                  </p>
                  <p>Sector: Educación</p>
                  <p>Teléfono de la empresa: 3112341555</p>
                  <p>Cargo: Docente de 6°,7°, 8° y 9° </p>
                  <p>Ubicación:Boyacá Colombia,</p>
                  <p>Fecha de ingreso: Febrero de 2017</p>
                  <p>Fecha de retiro: Mayo de 2017 </p>
                  Tipo experiencia laboral: Pasantía o Práctica Laboral
                </Card.Text>
                <Button variant="warning" onClick={() => setlShow(true)}>
                  Logros
                </Button>

                <Modal
                  show={lshow}
                  onHide={() => setlShow(false)}
                  dialogClassName="modal-dialog modal-lg"
                  aria-labelledby="example-custom-modal-styling-title"
                  ClassName="modal-dialog modal-xl"
                >
                  <Modal.Header
                    closeButton
                    style={{
                      backgroundImage: `url("./jirasol.PNG")`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      border: "2px solid #565555",
                    }}
                  >
                    <Modal.Title
                      variant="primary"
                      id=" example-custom-modal-styling-title h5"
                    >
                      <h5
                        style={{ fontFamily: "Raleway,bold" }}
                        className="font-weight-bold text-center text-uppercase  h3 px-3 "
                      >
                        Docente de matemáticas, estadística y geometría
                      </h5>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body style={{ fontFamily: "Raleway,bold" }}>
                    <p>
                      Diseño y aplicación de planes de clase y evaluaciones,
                      desarrollo y análisis de proyectos de mejoramiento del
                      estudiante, manejo y liderazgo de grupos de trabajo,
                      elaboración de informes, diseño, planeación y aplicación
                      de actividades y guías didácticas basadas en la enseñanza
                      de conceptos matemáticos y estadísticos.
                    </p>
                  </Modal.Body>
                </Modal>
              </Card.Body>
            </Card>
          </Col>
        ))}

        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card

className="img-thumbnail rounded-5"
style={{
  backgroundImage: `url("./mari.PNG")`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  border: "3px solid #d8b208 ",
  
}}
         
            >
              <Card.Img
                style={{ height: "10rem", width: "10rem", border: "6px solid #d8b208 " }}
                variant="top"
                className="img-thumbnail zoom rounded-circle  d-flex justify-content-center form-wrapper"
                src="./uptc.PNG"
              />
              <Card.Body>
                <Card.Title className="fw-bold" style={{ fontFamily: "Raleway,bold" }}>
                  Monografía-Desarrollo de Modelo de Predicción (Machine
                  Learning){" "}
                </Card.Title>
                <Card.Text className="fw-bold" style={{ fontFamily: "Raleway,bold" }}>
                  <p>
                    Nombre de la empresa: Universidad Pedagógica y Tecnológica
                    de Colombia
                  </p>
                  <p>Sector: Educativo</p>
                  <p>Tipo experiencia laboral: Monografia</p>
                  <p>Teléfono directora de monografía: 3164662607</p>
                  <p>Ubicación: Colombia</p>
                  <p>Fecha de ingreso: Febrero de 2017</p>
                  <p>Fecha de retiro: Junio de 2018</p>

                <Button
                  target="_blank"
                  href="https://drive.google.com/file/d/1Kla1LvU8mzuNdSFvrIUOMkaDy0OCWKb4/view?usp=sharing"
                  variant="success"                 
                >
                  Ver proyecto de investigación
                </Button>
 
                </Card.Text>
                <Button variant="warning" onClick={() => sethShow(true)}>
                  Logros
                </Button>

                <Modal
                  show={shhow}
                  onHide={() => sethShow(false)}
                  dialogClassName="modal-dialog modal-lg"
                  aria-labelledby="example-custom-modal-styling-title"
                  ClassName="modal-dialog modal-xl"
                >
                  <Modal.Header
                    closeButton
                    style={{
                      backgroundImage: `url("./jirasol.PNG")`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      border: "1px solid #565555",
                    }}
                  >
                    <Modal.Title
                      variant="primary"
                      id=" example-custom-modal-styling-title h5"
                    >
                      <h5
                        style={{ fontFamily: "Raleway,bold" }}
                        className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                      >
                        Desarrollo de modelo de Predicción (Machine Learning)
                      </h5>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p style={{ fontFamily: "Raleway,bold" }}>
                      Desarrollo de un modelo estadístico (Modelo de regresión
                      logística para predecir los puntajes de la prueba saber
                      Pro del programa de Administración
                      Agropecuaria de la Universidad Pedagógica y Tecnológica
                      seccional Duitama), análisis de datos mediante estadísticas
                      descriptivas, inferencias, análisis probabilístico y
                      análisis multivariado, todo esto mediante los programas: Excel, R estadístico y SPSS.
                    </p>

                  
                  </Modal.Body>
                </Modal>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
