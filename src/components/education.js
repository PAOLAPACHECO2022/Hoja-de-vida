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
  const [senaShow, setsenaShow] = useState(false);
  const [talenShow, settalenShow] = useState(false);
  const [courseraAShow, setcourseraAShow] = useState(false);
  const [courseraBShow, setcourseraBShow] = useState(false);
  const [courseraCShow, setcourseraCShow] = useState(false);
  const [courseraDShow, setcourseraDShow] = useState(false);
  const [courseraEShow, setcourseraEShow] = useState(false);
  const [courseraFShow, setcourseraFShow] = useState(false);
  const [courseraGShow, setcourseraGShow] = useState(false); 
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
  const [llShow, setllShow] = useState(false);
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
              border: "2px solid #565555",
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
                <p>Fecha de finalización: Junio de 2018</p>
              </Card.Text>
               <Button variant="light" onClick={() => setShow(true)} style={{ border: '2px solid black' }}>
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
                    className=" zoom img-thumbnail  w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                  ></img>
                </Modal.Body>
              </Modal>
            </Card.Body>
          </Card>
        </Col>


 <Col md={12} className="Apps-thumbnail rounded-4 mt-5 d-flex justify-content-center form-wrapper" >
          <Card
            className="img-thumbnail rounded-4"
            style={{
              backgroundImage: `url("./jirasol.PNG")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              border: "2px solid #565555",
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
              FORMACIÓN TECNOLÓGICA
            </Card.Header>
            <Card.Body>
              <Card.Title style={{ fontFamily: "Raleway,bold" }}
              className="fw-bold"
              >Anàlisis y Desarrollo de Software</Card.Title>
              <Card.Text style={{ fontFamily: "Raleway,bold" }}
               className="fw-bold"
              >
                <p>Nivel educativo: Tecnológico </p>
                <p>Institución: SENA</p>
                <p>Fecha de finalización: Marzo de 2025</p>
              </Card.Text>
              <Button variant="warning" onClick={() => setsenaShow(true)} style={{ border: '2px solid black' }}>
                Ver diploma
              </Button>                 
              <Modal
                show={senaShow}
                onHide={() => setsenaShow(false)}
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
                      Tecnología en Análisis y Desarrollo de Software 
                    </h5>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="./CertSena.PNG"
                    alt=""
                    className=" zoom img-thumbnail  w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
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
        // Add padding to create space around the text
        padding: "15px 30px", // Adjust these values as needed (top/bottom, left/right)
        display: "inline-block", // Makes the h1 shrink to fit its content + padding
        // Or you could use: width: "fit-content",
        // And for the rounded corners to match the image
        borderRadius: "20px", // Adjust to match your koko.PNG's rounded corners
      }}
      className="text-center mx-3 font-weight-bold h5 text-dark my-3"
    >
      FORMACIÓN COMPLEMENTARIA
    </h1>
  </div>
</Row>
        <Accordion className="mt-5 my-5 justify-content-center form-wrapper">

{/* ------------------------------------Talento tech Bogotà certificaciones--------------------------------- */}
<Accordion.Item
            eventKey="5"
            style={{
              backgroundImage: `url("./estrellas.jpg")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              border: "1px solid #565555",
            }}
          >

            <Accordion.Header>
            <div className="w-100 d-flex justify-content-center">
              <img
                alt=""
                width="100"
                height="100"
                src="./Talent.PNG"
                className="img-thumbnail"
              /></div> 
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
                      Bootcamp- Análisis y Visualización de Datos
                    </td>

                    <td>
                      {" "}
                      <a href="https://drive.google.com/file/d/1600iOn5pvqlFCjrPEEjJ6M0R3FYDqXik/view?usp=sharing">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => settalenShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={talenShow}
                        onHide={() => settalenShow(false)}
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
                            src="./AnVi.JPG"
                            alt=""
                            className=" zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>


                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>


          <Accordion.Item
            eventKey="0"
            style={{
              backgroundImage: `url("./estrellas.jpg")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              border: "1px solid #565555",
            }}
          >
 {/* ------------------------------------misióntoc certificaciones--------------------------------- */}

            <Accordion.Header>
              <div className="w-100 d-flex justify-content-center">
              <img
                alt=""
                width="100"
                height="100"
                src="./misionticp.PNG"
                className="img-thumbnail"
              /></div>           
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
                      <a href="https://drive.google.com/file/d/1600iOn5pvqlFCjrPEEjJ6M0R3FYDqXik/view?usp=sharing">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setslShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
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
                            className=" zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td>Diplomado en Programación Básica en Java</td>

                    <td>
                      {" "}
                      <a href="https://drive.google.com/drive/folders/1XILpXTPhHQ_N7_9eGfoRvguqvrYTaMWR">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                       variant="light"
                        onClick={() => setstShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
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
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr>
                    <td>Diplomado en Desarrollo de software</td>

                    <td>
                      {" "}
                      <a href="https://drive.google.com/file/d/1gR2vDLBBdKBxy3rDEmPqgtg_Bsb-hS1k/view?usp=sharing">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setspShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
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
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
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
                        variant="light"
                        onClick={() => setsfShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
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
                            src="./diploc4.JPG"
                            alt=""
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                <tr className="form-wrapper">
                    <td>Diplomado general en Programación de Desarrollo Web</td>

                    <td>
                      {" "}
                      <a href="https://drive.google.com/file/d/1nFdWWKpjRsRKPDuvUZQsvIb-d1lQMPBT/view?usp=sharing">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setlpShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
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
                              Diplomado general en Programación de Desarrollo Web
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./doplogeneral.JPG"
                            alt=""
                            className=" zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>


                  <tr className="form-wrapper">
                    <td>Fundamentos en analítica de datos</td>

                    <td>
                      {" "}
                      <a href="https://drive.google.com/file/d/1GYVmrhAC0b96OKnXl6q6iNWZ9YV9IBJj/view?usp=sharing">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setllShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={llShow}
                        onHide={() => setllShow(false)}
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
                              Fundamentos en analítica de datos
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./diploanalitica.JPG"
                            alt=""
                            className=" zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
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
              backgroundImage: `url("./estrellas.jpg")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              border: "1px solid #565555",
            }}
          >

            <Accordion.Header>
            <div className="w-100 d-flex justify-content-center">
              <img
                alt=""
                width="100"
                height="100"
                src="./courserar.PNG"
                className="img-thumbnail"
              /></div>    
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
                      Cómo resolver problemas y tomar decisiones con eficacia
                    </td>

                    <td>
                      {" "}
                      <a href="https://coursera.org/share/617c02de5093d39711b725b4fa3a021c">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setcourseraAShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={courseraAShow}
                        onHide={() => setcourseraAShow(false)}
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
                              Cómo resolver problemas y tomar decisiones con eficacia
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./Coursera1.jpg"
                            alt=""
                            className=" zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td className="form-wrapper">
                      Programar en Python
                    </td>

                    <td>
                      {" "}
                      <a href="https://coursera.org/share/c6f97053be853f9810d6c662b338d9e8">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setcourseraBShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={courseraBShow}
                        onHide={() => setcourseraBShow(false)}
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
                              Programar en Python
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./Coursera2.jpg"
                            alt=""
                            className=" zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                   <tr className="form-wrapper">
                    <td className="form-wrapper">
                      Harnessing the Power of Data - Power BI
                    </td>

                    <td>
                      {" "}
                      <a href="https://coursera.org/share/45f23188141c9a5c23042a424a48fe09">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setcourseraCShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={courseraCShow}
                        onHide={() => setcourseraCShow(false)}
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
                              Harnessing the Power of Data - Power BI
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./Coursera3.jpg"
                            alt=""
                            className=" zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                    <tr className="form-wrapper">
                    <td className="form-wrapper">
                      Machine Learning - Python
                    </td>

                    <td>
                      {" "}
                      <a href="https://coursera.org/share/97f4e6998ca5f51f0b55b0887c76b82b">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setcourseraDShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={courseraDShow}
                        onHide={() => setcourseraDShow(false)}
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
                              Machine Learning - Python
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./Coursera5.jpg"
                            alt=""
                            className=" zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                      <tr className="form-wrapper">
                    <td className="form-wrapper">
                      Questions, Present Progressive and Future Tenses
                    </td>

                    <td>
                      {" "}
                      <a href="https://coursera.org/share/4f2d4206ba3e60e02d9603213f7b03da">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setcourseraEShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={courseraEShow}
                        onHide={() => setcourseraEShow(false)}
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
                              Questions, Present Progressive and Future Tenses
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./Coursera4.jpg"
                            alt=""
                            className=" zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                      <tr className="form-wrapper">
                    <td className="form-wrapper">
                      Preparing Data  Analysis - Microsoft Excel
                    </td>

                    <td>
                      {" "}
                      <a href="https://coursera.org/share/45ee4e0a2f0fde6bdc501149c275b47c">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setcourseraFShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={courseraFShow}
                        onHide={() => setcourseraFShow(false)}
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
                              Preparing Data Analysis - Microsoft Excel
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./Coursera6.jpg"
                            alt=""
                            className=" zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                    <tr className="form-wrapper">
                    <td className="form-wrapper">
                      Word Forms and Simple Present Tense
                    </td>

                    <td>
                      {" "}
                      <a href="https://coursera.org/share/77c044136f1ba00c08b4238d01bcbff5">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setcourseraGShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
                      >
                        Ver
                      </Button>
                      <Modal
                        show={courseraGShow}
                        onHide={() => setcourseraGShow(false)}
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
                              Word Forms and Simple Present Tense
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./Coursera7.jpg"
                            alt=""
                            className=" zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td className="form-wrapper">
                      Aspectos básicos: datos, datos, en todas partes
                    </td>

                    <td>
                      {" "}
                      <a href="https://coursera.org/share/12dbacae516ec6e36bf9272b291d85f7">
                        PDF
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setsmShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
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
                          <Modal.Title variant="primary">
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
                            className=" zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
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
              backgroundImage: `url("./estrellas.jpg")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              border: "1px solid #565555",
            }}
          >
            <Accordion.Header>
              <div className="w-100 d-flex justify-content-center">
              <img
                alt=""
                width="100"
                height="100"
                src="./platzi.PNG"
                className="img-thumbnail"
              /></div>   
           </Accordion.Header>                 
            <Accordion.Body>
             <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
              <Table
                striped
                bordered
                hover
                className="mt-2"
              >
                <thead class="bg-light form-wrapper rounded-4">
                  <tr className="form-wrapper">
                    <th className="form-wrapper">Curso</th>
                    <th className="form-wrapper">Enlace</th>
                    <th className="form-wrapper">Certf.</th>
                  </tr>
                </thead>
                <tbody variant="primmary" className="form-wrapper">
                  <tr className="form-wrapper">
                    <td Style={"color: rgb(197, 184, 70);"}>Ingeniería de datos con Python</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/p/paolapacheco.moreno/curso/1385-ingenieria-datos/diploma/detalle/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                       variant="light"
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
                              Ingeniería de datos con Python
                            </h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img
                            src="./Ingedatos.PNG"
                            alt=""
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td Style={"color: rgb(197, 184, 70);"}>Python Básico</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/p/paolapacheco.moreno/curso/1937-python/diploma/detalle/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setsnShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
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
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td Style={"color: rgb(197, 184, 70);"}>Python Intermedio</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/p/paolapacheco.moreno/curso/2255-python-intermedio/diploma/detalle/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
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
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr>
                    <td Style={"color: rgb(197, 184, 70);"}>Python Profesional</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/p/paolapacheco.moreno/curso/2397-python-profesional/diploma/detalle/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setssShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
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
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td Style={"color: rgb(197, 184, 70);"}>Estadística computacional con Python</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/p/paolapacheco.moreno/curso/1835-programacion-estocastica/diploma/detalle/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
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
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td Style={"color: rgb(197, 184, 70);"}>Estructura de datos lineales con Python</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/p/paolapacheco.moreno/curso/2299-estructuras-datos-python/diploma/detalle/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setszShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
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
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td Style={"color: rgb(197, 184, 70);"}>Machine Learning con Python</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/p/paolapacheco.moreno/curso/1178-scikit/diploma/detalle/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                       variant="light"
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
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td Style={"color: rgb(197, 184, 70);"}>Curso Profesional de Scrum</td>

                    <td>
                      {" "}
                      <a href="https://platzi.com/r/paolapacheco.moreno/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => setscShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
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
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>
                </tbody>
              </Table>
             </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* ------------------------------------UDEMY certificaciones--------------------------------- */}

          <Accordion.Item
            eventKey="3"
            style={{
              backgroundImage: `url("./estrellas.jpg")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              border: "1px solid #565555",
            }}
          >
            <Accordion.Header>
            <div className="w-100 d-flex justify-content-center">
              <img
                alt=""
                width="100"
                height="100"
                src="./udemy.PNG"
                className="img-thumbnail"
              /></div>          
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
                    <th className="form-wrapper">Curso</th>
                    <th className="form-wrapper">Enlace</th>
                    <th className="form-wrapper">Certf.</th>
                  </tr>
                </thead>
                <tbody variant="primmary" class="form-wrapper mt-auto">
                  <tr className="form-wrapper">
                    <td Style={"color: rgb(197, 184, 70);"}>Excel Desde cero hasta avanzado</td>

                    <td>
                      {" "}
                      <a href="https://www.udemy.com/certificate/UC-9e7c7937-bee4-4de5-9b6e-2915a850df0f/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
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
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td Style={"color: rgb(197, 184, 70);"}>SQL Básico a Intermedio</td>

                    <td>
                      {" "}
                      <a href="https://www.udemy.com/certificate/UC-834b2d23-8446-4f1a-856b-bb4cf4a69696/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
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
                            className="zoom  boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td Style={"color: rgb(197, 184, 70);"}>SQL Cero a Profesional</td>

                    <td>
                      {" "}
                      <a href="https://www.udemy.com/certificate/UC-d4dec75c-0148-4fc8-af1c-f64d3ef44cc6/">
                        Link
                      </a>
                    </td>
                    <td>
                      <Button
                        variant="light"
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
                            className="zoom  boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
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
              backgroundImage: `url("./estrellas.jpg")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              border: "1px solid #565555",
            }}
          >
            <Accordion.Header>

            <div className="w-100 d-flex justify-content-center">
              <img
                alt=""
                width="100"
                height="100"
                src="./sena.PNG"
                className="img-thumbnail"
              /></div>

             </Accordion.Header>
            <Accordion.Body>
              <Table
                striped
                bordered
                hover
                className="mt-2 justify-content-center form-wrapper"                    
              >
                <thead class="bg-light form-wrapper rounded-4 text-center">
                  <tr class="form-wrapper">
                    <th>Nombre del curso</th>

                    <th>Certif.</th>
                  </tr>
                </thead>
                <tbody variant="primmary" class="form-wrapper mt-auto">
                  <tr className="form-wrapper">
                    <td Style={"color: rgb(252, 252, 249);"}>ENGLISH DOT WORKS 1 (INGLES)</td>

                    <td>
                      <Button
                        variant="light"
                        onClick={() => setenShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
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
                            className=" zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td Style={"color: rgb(252, 252, 249);"}>ENGLISH DOT WORKS 2 (INGLES)</td>

                    <td>
                      <Button
                        variant="light"
                        onClick={() => setfaShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
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
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td Style={"color: rgb(252, 252, 249);"}>ENGLISH DOT WORKS 3 (INGLES)</td>

                    <td>
                      <Button
                        variant="light"
                        onClick={() => setlaShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
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
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
                          ></img>
                        </Modal.Body>
                      </Modal>
                    </td>
                  </tr>

                  <tr className="form-wrapper">
                    <td Style={"color: rgb(252, 252, 249);"}>ENGLISH DOT WORKS 4 (INGLES)</td>

                    <td>
                      <Button
                        variant="light"
                        onClick={() => setpaShow(true)}
                        className="boton1 img-thumbnail w-30  lg-30  d-flex justify-content-center form-wrapper bg-warning"
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
                            className="zoom boton1 img-thumbnail w-100  lg-100 my-5 mt-5 d-flex justify-content-center form-wrapper"
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
