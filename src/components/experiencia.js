import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import {
  Col,
  Row,

} from "react-bootstrap";
export default function Experiencia() {
  const [show, setShow] = useState(false);
  const [shhow, sethShow] = useState(false);
  const [xshow, setxShow] = useState(false);
 

  return (
    <>
         
      <Row xs={1} md={3} className="g-4  mt-5">

         {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card className="img-thumbnail">
              <Card.Img width="200" height="400"  variant="top"  className=" zoom rounded-circle border" src="./celestin.PNG" />
              <Card.Body>
              <Card.Title>Docente de matemáticas, estadística y geometría</Card.Title>
              <Card.Text>
              
               <p>Nombre de la empresa: CELESTIN FREINET SUBA-BOGOTÁ </p>
               <p>Sector: Educación</p>
               <p>Teléfono de la empresa: 3157492890</p>
               <p>Cargo: Docente de 6°,7°, 8° y 9°  </p>         
               <p>Ubicación:Bogotá Colombia,</p>
               <p>Fecha de ingreso: febrero de2020</p>
               <p>Fecha de retiro: Noviembre de2021 </p>
              </Card.Text>
              <Button variant="primary" onClick={() => setShow(true)}>
                Logros
              </Button>

              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-dialog modal-lg"
                aria-labelledby="example-custom-modal-styling-title"
                ClassName="modal-dialog modal-xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title
                    variant="primary"
                    id=" example-custom-modal-styling-title h5"
                  >
                    <h5
                      style={{ fontFamily: "Raleway,bold" }}
                      className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                    >
                      Docente de matemáticas, estadística y geometría
                    </h5>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                   Diseño y aplicación de planes de clase, desarrollo y análisis de guías
                   de trabajo enfocadas al mejoramiento del estudiante, manejo y liderazgo de grupos de trabajo,
                   tutoría de grupo, diseño y aplicación de actividades didácticas basadas en la enseñanza de
                   conceptos matemáticos, diseño y aplicación de pruebas, manejo de herramientas virtuales,
                   teams, classroom, plataformas institucionales, plataforma Milton Ochoa, Stantillana, tableros
                   virtuales, plataformas de juegos virtuales (kahoot, quizizz.com , patlet, classdogo, wordwall.net,
                   creación de actividades en liveworksheet, Geogebra, Geodenzo) y manejo de Excel. - Diseñé e
                   implementematerial didáctico y lúdico para mejorary captar la atención de los niños. 
                  </p>
                </Modal.Body>
              </Modal>
            </Card.Body>
            </Card>
          </Col>
        ))}
         

         {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card className="img-thumbnail">
              <Card.Img width="200" height="400" variant="top"  className="rounded-circle border zoom" src="./icck.PNG" />
              <Card.Body>
              <Card.Title>Docente de matemáticas, estadística y geometría</Card.Title>
              <Card.Text>
              
               <p>Nombre de la empresa: INSTITUTO CULTURAL CIUDAD KENNEDY (ICCK) </p>
               <p>Sector: Educación</p>
               <p>Teléfono de la empresa: 3165669327</p>
               <p>Cargo: Docente de 4°,5°,8°, 9°, 10° y 11°  </p>         
               <p>Ubicación:Bogotá Colombia</p>
               <p>Fecha de ingreso: Mayo de 2019</p>
               <p>Fecha de retiro: Noviembrede2019 </p>

 
              </Card.Text>
              <Button variant="primary" onClick={() => sethShow(true)}>
                Logros
              </Button>

              <Modal
                show={shhow}
                onHide={() => sethShow(false)}
                dialogClassName="modal-dialog modal-lg"
                aria-labelledby="example-custom-modal-styling-title"
                ClassName="modal-dialog modal-xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title
                    variant="primary"
                    id=" example-custom-modal-styling-title h5"
                  >
                    <h5
                      style={{ fontFamily: "Raleway,bold" }}
                      className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                    >
                      Docente de matemáticas, estadística y geometría
                    </h5>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                  Docente de estudiantes primaría y bachillerato (4°,5°,8°-11°). Diseño y aplicación de planes de área y de
                  clase, desarrollo y análisis de guías de trabajo diseño, planeación y aplicación de actividades
                  didácticas basadas en la enseñanza deconceptos matemáticos. 
                  </p>
                </Modal.Body>
              </Modal>
            </Card.Body>
            </Card>
          </Col>
        ))}

        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card className="img-thumbnail">
              <Card.Img width="200" height="400"  variant="top"  className=" zoom rounded-circle border" src="./valencia.PNG" />
              <Card.Body>
              <Card.Title>Docente de matemáticas, estadística y geometría</Card.Title>
              <Card.Text>
              
               <p>Nombre de la empresa: Colegio Guillermo León Valencia- Duitama </p>
               <p>Sector: Educación</p>
               <p>Teléfono de la empresa: 3112341555</p>
               <p>Cargo: Docente de 6°,7°, 8° y 9°  </p>         
               <p>Ubicación:Boyacá Colombia,</p>
               <p>Fecha de ingreso: Febrero de 2017</p>
               <p>Fecha de retiro: Mayo de 2017 </p>

               Tipo experiencia laboral: Pasantía o Práctica Laboral
 
              </Card.Text>
              <Button variant="primary" onClick={() => setxShow(true)}>
                Logros
              </Button>

              <Modal
                show={xshow}
                onHide={() => setxShow(false)}
                dialogClassName="modal-dialog modal-lg"
                aria-labelledby="example-custom-modal-styling-title"
                ClassName="modal-dialog modal-xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title
                    variant="primary"
                    id=" example-custom-modal-styling-title h5"
                  >
                    <h5
                      style={{ fontFamily: "Raleway,bold" }}
                      className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                    >
                      Docente de matemáticas, estadística y geometría
                    </h5>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                  Diseño y aplicación de planes de clase y evaluaciones, desarrollo y análisis de proyectos de
mejoramiento del estudiante, manejo y liderazgo de grupos de trabajo, elaboración de informes,
diseño, planeación y aplicación de actividades y guías didácticas basadas en la enseñanza de
conceptos matemáticos y estadísticos. 
                  </p>
                </Modal.Body>
              </Modal>
            </Card.Body>
            </Card>
          </Col>
        ))}
         

         {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card className="img-thumbnail">
              <Card.Img width="200" height="400" variant="top"  className="rounded-circle border zoom" src="./uptc.PNG" />
              <Card.Body>
              <Card.Title>Monografia-Análisis estadístico (Machine Learning) </Card.Title>
              <Card.Text>
              
               <p>Nombre de la empresa: Universidad Pedagógica y Tecnológica de Colombia</p>
               <p>Sector: Educativo</p>
               <p>Tipo experiencia laboral: Monografia</p>
               <p>Teléfono directora de monografía: 3164662607</p>
               <p>Cargo: Docente de 4°,5°,8°, 9°, 10° y 11°  </p>         
               <p>Ubicación: Colombia</p>
               <p>Fecha de ingreso: Febrero de 2017</p>
               <p>Fecha de retiro: Junio de2018</p>
               



              </Card.Text>
              <Button variant="primary" onClick={() => sethShow(true)}>
                Logros
              </Button>

              <Modal
                show={shhow}
                onHide={() => sethShow(false)}
                dialogClassName="modal-dialog modal-lg"
                aria-labelledby="example-custom-modal-styling-title"
                ClassName="modal-dialog modal-xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title
                    variant="primary"
                    id=" example-custom-modal-styling-title h5"
                  >
                    <h5
                      style={{ fontFamily: "Raleway,bold" }}
                      className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                    >
                     Análisis estadístico (Machine Learning) 
                    </h5>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                  Análisis estadístico de información de los puntajes de la prueba Saber Pro del programa de Administración Agropecuaria de la Universidad Pedagógica y Tecnológica
                  seccional Duitama, donde se llevó a cabo el desarrollo y ejecución de modelos
                  estadísticos(Modelos de regresión logística-Predicción de los puntajes de la prueba saber Pro),
                  análisis de datos mediante estadísticas descriptivas, inferencias, análisis probabilístico y análisis
                  multivariado, todo estomediantelos programas (Excel, R estadístico, SPSS, Statistics).
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
