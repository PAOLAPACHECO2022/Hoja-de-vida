import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import {
  Col,
  Row,

  //Image,
} from "react-bootstrap";
export default function Education() {
  const [show, setShow] = useState(false);
  const [smShow, setsmShow] = useState(false);
  const [slShow, setslShow] = useState(false);
  const [stShow, setstShow] = useState(false);
  const [spShow, setspShow] = useState(false);
  const [sfShow, setsfShow] = useState(false);
  const [sdShow, setsdShow] = useState(false);
  const [snShow, setsnShow] = useState(false);
  const [srShow, setsrShow] = useState(false);
  const [ssShow, setssShow] = useState(false);
  const [skShow, setskShow] = useState(false);
  const [szShow, setszShow] = useState(false);
  const [shShow, setshShow] = useState(false);
  const [scShow, setscShow] = useState(false);
  const [sxShow, setsxShow] = useState(false);
  const [sgShow, setsgShow] = useState(false);
  const [swShow, setswShow] = useState(false);
  const [enShow, setenShow] = useState(false);
  const [paShow, setpaShow] = useState(false);
  const [laShow, setlaShow] = useState(false);
  const [faShow, setfaShow] = useState(false);
  const [lpShow, setlpShow] = useState(false);
  return (
    <>
     
        <Col md={12} className="Apps-thumbnail rounded-4 mt-5 d-flex justify-content-center form-wrapper" >
          <Card
            className="img-thumbnail rounded-4"
            style={{
              backgroundImage: `url("./jirasol.PNG")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              border: "1px solid #565555",
            }}
          >
            <Card.Header
              style={{
                backgroundImage: `url("./koko.PNG")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "1px solid #565555",
                fontFamily: "Raleway,bold"
              }}
              className="img-thumbnail rounded-4 text-center fw-bold"
            >
              FORMACIÓN PROFESIONAL
            </Card.Header>
            <Card.Body>
              <Card.Title style={{ fontFamily: "Raleway,bold" }}
              className="fw-bold"
              >Licenciatura en matemáticas y estadística</Card.Title>
              <Card.Text style={{ fontFamily: "Raleway,bold" }}
               className="fw-bold"
              >
                <p>Nivel educativo: Universitaria </p>
                <p>Institución: U. Pedagógica y Tecnológica de Colombia - -</p>
                <p>UPTC - - Duitama</p>
                <p>Estado: Graduado</p>
                <p>Fecha de finalización: Junio de 2018</p>
              </Card.Text>
              <Button variant="success" onClick={() => setShow(true)}>
                Ver diploma
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
                      className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                    >
                      Licenciatuta en matemáticas y estadística
                    </h5>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="./diploma.PNG"
                    alt=""
                    className="img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                  ></img>
                </Modal.Body>
              </Modal>
            </Card.Body>
          </Card>
        </Col>
      

      {/* ------------------------------------ACORDION--------------------------------- */}
      <Col md={12} >
        <Row>
          <div className="mt-5 d-flex justify-content-center form-wrapper">
          <h1
            style={{
              backgroundImage: `url("./koko.PNG")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              border: "1px solid #565555",
            }}
            className="text-center mx-3  font-weight-bold h5 text-dark my-3 rounded-4"
          >
            FORMACIÓN COMPLEMENTARIA
          </h1>
          </div>
        </Row>
        <Accordion className="mt-5 my-5 justify-content-center form-wrapper">
          <Accordion.Item
            eventKey="0"
            style={{
              backgroundImage: `url("./alas.PNG")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              border: "1px solid #565555",
            }}
          >
            {/* ------------------------------------misióntoc certificaciones--------------------------------- */}

            <Accordion.Header>
              <img
                alt=""
                width="100"
                height="100"
                src="./misionticp.PNG"
                className="boton1 img-thumbnail  d-flex justify-content-center form-wrapper"
              ></img>
              MISIÓN TIC
            </Accordion.Header>
            <Accordion.Body>
              <Table
                striped
                bordered
                hover
                className=" img-thumbnail w-100 my-2 mt-2 d-flex justify-content-center form-wrapper"
              >
                <tbody variant="primmary" className="form-wrapper">
                  <tr className="form-wrapper">
                    <td className="form-wrapper">
                      Diplomado en Fundamentos de Programación en Python
                    </td>

                    <td>
                      {" "}
                      <a href="https://certificadomisionticutp.com/apiv1/public/docs/1/_1052400786-.pdf">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setslShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={slShow}
                        onHide={() => setslShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="primary">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Diplomado en Fundamentos de Programación en Python
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./mtciclo1.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td>Diplomado en Programación Básica en Java</td>

                    <td>
                      {" "}
                      <a href="https://certificadomisionticutp.com/apiv1/public/docs/2/_1052400786-.pdf">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setstShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={stShow}
                        onHide={() => setstShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="primary">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Diplomado en Programación Básica en Java
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./msciclo2.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr>
                    <td>Diplomado en Desarrollo de software</td>

                    <td>
                      {" "}
                      <a href="https://certificadomisionticutp.com/apiv1/public/docs/3/_1052400786-.pdf">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setspShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={spShow}
                        onHide={() => setspShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="primary">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Diplomado en Desarrollo de software
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./msciclo3.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td>Desarrollo De Aplicaciones Web</td>

                    <td>
                      {" "}
                      <a href="https://drive.google.com/file/d/1adm3K8WLmMRyG6y82bJ5FDn-152roT7A/view?usp=sharing">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setsfShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={sfShow}
                        onHide={() => setsfShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Desarrollo De Aplicaciones Web
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./diplo4.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                <tr className="form-wrapper">
                    <td>Diplomado Programación-Desarrollo Web</td>

                    <td>
                      {" "}
                      <a href="https://drive.google.com/file/d/1nFdWWKpjRsRKPDuvUZQsvIb-d1lQMPBT/view?usp=sharing">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setlpShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={lpShow}
                        onHide={() => setlpShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Diplomado en Programación de Desarrollo Web
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./doplogeneral.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          {/* ------------------------------------Coursera certificaciones--------------------------------- */}
          <Accordion.Item
            eventKey="1"
            style={{
              backgroundImage: `url("./alas.PNG")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              border: "1px solid #565555",
            }}
          >
            <Accordion.Header>
              {" "}
              <img
                src="./courserar.PNG"
                width="90"
                height="90"
                alt=""
                className="boton1 img-thumbnail d-flex justify-content-center form-wrapper"
              ></img>
              COURSERA
            </Accordion.Header>

            <Accordion.Body>
              <Table
                striped
                bordered
                hover
                className="justify-content-center form-wrapper"
              >
                <thead class="bg-warning form-wrapper rounded-4">
                  <tr className="form-wrapper">
                    <th>Curso</th>

                    <th>Acceso</th>
                    <th>Certificación</th>
                  </tr>
                </thead>
                <tbody variant="primmary" className="form-wrapper">
                  <tr className="form-wrapper">
                    <td>Aspectos básicos: datos, datos, en todas partes</td>

                    <td>
                      {" "}
                      <a href="https://coursera.org/share/12dbacae516ec6e36bf9272b291d85f7">
                        Enlace
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setsmShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>

                      <Modal
                        show={smShow}
                        onHide={() => setsmShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Aspectos básicos: datos, datos, en todas partes
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./coursera.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
          {/* ------------------------------------PLatzi certificaciones--------------------------------- */}

          <Accordion.Item
            eventKey="2"
            style={{
              backgroundImage: `url("./alas.PNG")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              border: "1px solid #565555",
            }}
          >
            <Accordion.Header>
              {" "}
              <img
                src="./platzi.PNG"
                width="90"
                height="90"
                alt=""
                className="boton1 img-thumbnail justify-content-center form-wrapper"
              ></img>
              PLATZI
            </Accordion.Header>
            <Accordion.Body>
              <Table
                striped
                bordered
                hover
                className="mt-2 justify-content-center form-wrapper"
              >
                <thead class="bg-warning form-wrapper rounded-4">
                  <tr className="form-wrapper">
                    <th className="form-wrapper">Curso</th>
                    <th className="form-wrapper">Enlace</th>
                    <th className="form-wrapper">Img</th>
                  </tr>
                </thead>
                <tbody variant="primmary" className="form-wrapper">
                  <tr className="form-wrapper">
                    <td>Ingeniería de datos con Python</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/p/paolapacheco.moreno/curso/1385-ingenieria-datos/diploma/detalle/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setsdShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>

                      <Modal
                        show={sdShow}
                        onHide={() => setsdShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Aspectos básicos: datos, datos, en todas partes
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./Ingedatos.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td>Python Básico</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/p/paolapacheco.moreno/curso/1937-python/diploma/detalle/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setsnShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>

                      <Modal
                        show={snShow}
                        onHide={() => setsnShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Python Básico
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./pythonb.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td>Python Intermedio</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/p/paolapacheco.moreno/curso/2255-python-intermedio/diploma/detalle/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setsrShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>

                      <Modal
                        show={srShow}
                        onHide={() => setsrShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Python Intermedio
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./pythonin.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr>
                    <td>Python Profesional</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/p/paolapacheco.moreno/curso/2397-python-profesional/diploma/detalle/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setssShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>

                      <Modal
                        show={ssShow}
                        onHide={() => setssShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Python Profesional
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./pythonp.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td>Estadística computacional con Python</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/p/paolapacheco.moreno/curso/1835-programacion-estocastica/diploma/detalle/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setskShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>

                      <Modal
                        show={skShow}
                        onHide={() => setskShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Estadística computacional con Python
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./estadcompu.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td>Estructura de datos lineales con Python</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/p/paolapacheco.moreno/curso/2299-estructuras-datos-python/diploma/detalle/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setszShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>

                      <Modal
                        show={szShow}
                        onHide={() => setszShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Estructura de datos lineales con Python
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./datoslinp.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td>Machine Learning con Python</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/p/paolapacheco.moreno/curso/1178-scikit/diploma/detalle/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setshShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>

                      <Modal
                        show={shShow}
                        onHide={() => setshShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Machine Learning con Python
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./machine.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td>Curso Profesional de Scrum</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/r/paolapacheco.moreno/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setscShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>

                      <Modal
                        show={scShow}
                        onHide={() => setscShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Curso Profesional de Scrum
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./scrum.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          {/* ------------------------------------UDEMY certificaciones--------------------------------- */}

          <Accordion.Item
            eventKey="3"
            style={{
              backgroundImage: `url("./alas.PNG")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              border: "1px solid #565555",
            }}
          >
            <Accordion.Header>
              {" "}
              <img
                width="80"
                height="80"
                src="./udemy.PNG"
                alt=""
                className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
              ></img>
              UDEMY
            </Accordion.Header>
            <Accordion.Body>
              <Table
                striped
                bordered
                hover
                className="justify-content-center form-wrapper"
              >
                <thead class="bg-warning form-wrapper rounded-4">
                  <tr class="form-wrapper">
                    <th>Curso</th>

                    <th>Enlace</th>
                    <th>Certificación</th>
                  </tr>
                </thead>
                <tbody variant="primmary" class="form-wrapper mt-auto">
                  <tr className="form-wrapper">
                    <td>Excel Desde cero hasta avanzado</td>

                    <td>
                      {" "}
                      <a href="https://www.udemy.com/certificate/UC-9e7c7937-bee4-4de5-9b6e-2915a850df0f/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setsxShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={sxShow}
                        onHide={() => setsxShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              Excel Desde cero hasta avanzado
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./excel.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td>SQL Básico a Intermedio</td>

                    <td>
                      {" "}
                      <a href="https://www.udemy.com/certificate/UC-834b2d23-8446-4f1a-856b-bb4cf4a69696/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setsgShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>

                      <Modal
                        show={sgShow}
                        onHide={() => setsgShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              SQL Básico a Intermedio
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./sql.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td>SQL Cero a Profesional</td>

                    <td>
                      {" "}
                      <a href="https://www.udemy.com/certificate/UC-d4dec75c-0148-4fc8-af1c-f64d3ef44cc6/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => setswShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>

                      <Modal
                        show={swShow}
                        onHide={() => setswShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              SQL Cero a Profesional
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./sqlp.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>

          {/* ------------------------------------INGLES SENA certificaciones--------------------------------- */}

          <Accordion.Item
            eventKey="4"
            style={{
              backgroundImage: `url("./alas.PNG")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              border: "1px solid #565555",
            }}
          >
            <Accordion.Header>
              {" "}
              <img
                width="120"
                height="120"
                src="./sena.PNG"
                alt=""
                className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
              ></img>
              SENA
            </Accordion.Header>
            <Accordion.Body>
              <Table
                striped
                bordered
                hover
                className="justify-content-center form-wrapper"
              >
                <thead class="bg-warning form-wrapper rounded-4 text-center">
                  <tr class="form-wrapper">
                    <th>Nombre del curso</th>

                    <th>Certificación</th>
                  </tr>
                </thead>
                <tbody variant="primmary" class="form-wrapper mt-auto">
                  <tr className="form-wrapper">
                    <td>ENGLISH DOT WORKS 1 (INGLES)</td>

                    <td>
                      <Button
                        variant="success"
                        onClick={() => setenShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={enShow}
                        onHide={() => setenShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              ENGLISH DOT WORKS 1 (INGLES)
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./ingles1.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td>ENGLISH DOT WORKS 2 (INGLES)</td>

                    <td>
                      <Button
                        variant="success"
                        onClick={() => setfaShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>

                      <Modal
                        show={faShow}
                        onHide={() => setfaShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              ENGLISH DOT WORKS 2 (INGLES)
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./ingles2.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td>ENGLISH DOT WORKS 3 (INGLES)</td>

                    <td>
                      <Button
                        variant="success"
                        onClick={() => setlaShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>

                      <Modal
                        show={laShow}
                        onHide={() => setlaShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              ENGLISH DOT WORKS 3 (INGLES)
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./ingles3.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td>ENGLISH DOT WORKS 4 (INGLES)</td>

                    <td>
                      <Button
                        variant="success"
                        onClick={() => setpaShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper"
                      >
                        Ver
                      </Button>

                      <Modal
                        show={paShow}
                        onHide={() => setpaShow(false)}
                        dialogClassName="modal-dialog modal-lg"
                        aria-labelledby="example-modal-sizes-title-sm"
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
                          <Modal.Title variant="success">
                            <h5
                              style={{ fontFamily: "Raleway,bold" }}
                              className="font-weight-bold text-center text-uppercase font-weight-bold h3 px-3 "
                            >
                              ENGLISH DOT WORKS 4 (INGLES)
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./ingles4.PNG"
                            alt=""
                            className="boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </>
  );
}
