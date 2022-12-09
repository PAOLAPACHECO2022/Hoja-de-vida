import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import React, { useState, useRef } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { Col, Row } from "react-bootstrap";
export default function Habilidades() {
  const now = 85;
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const ynow = 80;
  const [yshow, setyShow] = useState(false);
  const ytarget = useRef(null);

  const xnow = 85;
  const [xshow, setxShow] = useState(false);
  const xtarget = useRef(null);

  const pnow = 85;
  const [pshow, setpShow] = useState(false);
  const ptarget = useRef(null);

  const vnow = 75;
  const [vshow, setvShow] = useState(false);
  const vtarget = useRef(null);

  const rnow = 70;
  const [rshow, setrShow] = useState(false);
  const rtarget = useRef(null);

  const mnow = 80;
  const [mshow, setmShow] = useState(false);
  const mtarget = useRef(null);

  
  const qnow = 80;
  const [qshow, setqShow] = useState(false);
  const qtarget = useRef(null);

  const tnow = 85;
  const [tshow, settShow] = useState(false);
  const ttarget = useRef(null);

  const dnow = 80;
  const [dshow, setdShow] = useState(false);
  const dtarget = useRef(null);

  const znow = 80;
  const [zshow, setzShow] = useState(false);
  const ztarget = useRef(null);

  const gnow = 40;
  const [gshow, setgShow] = useState(false);
  const gtarget = useRef(null);

  const jnow = 75;
  const [jshow, setjShow] = useState(false);
  const jtarget = useRef(null);

  const fnow = 50;
  const [fshow, setfShow] = useState(false);
  const ftarget = useRef(null);

  const know = 90;
  const [kshow, setkShow] = useState(false);
  const ktarget = useRef(null);

  return (
    <>
      <p
         style={{
          backgroundImage: `url("./jirasol.PNG")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          border: "1px solid #565555",
          fontFamily: "cursive,bold" 
         
        }}
        className="text-thumbnail h1 text-center bg-light rounded-4 my-5 font-weight-bold mt-5"
      >
        Habilidades
      </p>
      <p 
       style={{
        backgroundImage: `url("./koko.PNG")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        border: "1px solid #565555",
        
       
       
      }}
      
      className="img-thumbnail bg-light rounded-4 text-justify fw-bold" >Soy una persona que le gusta asumir retos constantemente, es por esto que trato de estar lista para ello, capacitandome 
             con diversos conocimientos que me ayuden con el cumplimiento de mis objetivos.
          </p>
      <Row xs={1} md={3} className="g-4 mx-4 my-3  mt-5">
  

{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
                width="150" height="150"  variant="top"  className=" zoom rounded-circle border" src="./javascript.PNG"
              />
              <Figure.Caption>
              <p className="bg-warning rounded-4 text-center">JS</p>
                <Button
                  variant="primary"
                  ref={ytarget}
                  onClick={() => setyShow(!yshow)}
                >
                  Progreso
                </Button>
                <Overlay target={ytarget.current} show={yshow} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={ynow}
                          label={`${ynow}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}


{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
                width="150" height="150"  variant="top"  className=" zoom rounded-circle border"
                src="./html5.PNG"
              />
              <Figure.Caption>
                <p className="bg-warning rounded-4 text-center">HTML</p>
                <Button
                  variant="primary"
                  ref={target}
                  onClick={() => setShow(!show)}
                >
                  Progreso
                </Button>
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={now}
                          label={`${now}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}

{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
                width="150" height="150"  variant="top"  className=" zoom rounded-circle border"
                src="./css3.PNG" 
              />
              <Figure.Caption>
                <p className="bg-warning rounded-4 text-center">CSS</p>
                <Button
                  variant="primary"
                  ref={xtarget}
                  onClick={() => setxShow(!xshow)}
                >
                  Progreso
                </Button>
                <Overlay target={xtarget.current} show={xshow} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={xnow}
                          label={`${xnow}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}

{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
                width="150" height="150"  variant="top"  className=" zoom rounded-circle border"
               
                src="./bootstrap.PNG" 
               
              />
              <Figure.Caption>
                <p className="bg-warning rounded-4 text-center">Bootstrap</p>
                <Button
                  variant="primary"
                  ref={ptarget}
                  onClick={() => setpShow(!pshow)}
                >
                  Progreso
                </Button>
                <Overlay target={ptarget.current} show={pshow} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={pnow}
                          label={`${pnow}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}


{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
                width="150" height="150"  variant="top"  className=" zoom rounded-circle border"             
                src="./sqlserver.PNG"
               
              />
              <Figure.Caption>
                <p className="bg-warning rounded-4 text-center"> SQLServer </p>
                <Button
                  variant="primary"
                  ref={vtarget}
                  onClick={() => setvShow(!vshow)}
                >
                  Progreso
                </Button>
                <Overlay target={vtarget.current} show={vshow} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={vnow}
                          label={`${vnow}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}


{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
                width="150" height="150"  variant="top"  className=" zoom rounded-circle border"
                src="./potsgre.PNG"
               
              />
              <Figure.Caption>
                <p className="bg-warning rounded-4 text-center">PotsgreSQL</p>
                <Button
                  variant="primary"
                  ref={rtarget}
                  onClick={() => setrShow(!rshow)}
                >
                  Progreso
                </Button>
                <Overlay target={rtarget.current} show={rshow} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={rnow}
                          label={`${rnow}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}

{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
              width="150" height="150"  variant="top"  className=" zoom rounded-circle border"
                src="./mongo.PNG"
              />
              <Figure.Caption>
                <p className="bg-warning rounded-4 text-center">MongoDB</p>
                <Button
                  variant="primary"
                  ref={mtarget}
                  onClick={() => setmShow(!mshow)}
                >
                  Progreso
                </Button>
                <Overlay target={mtarget.current} show={mshow} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={mnow}
                          label={`${mnow}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}

{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
             width="150" height="150"  variant="top"  className=" zoom rounded-circle border"
                src="./mySql.PNG"
                
              />
              <Figure.Caption>
                <p className="bg-warning rounded-4 text-center">MySQL</p>
                <Button
                  variant="primary"
                  ref={qtarget}
                  onClick={() => setqShow(!qshow)}
                >
                  Progreso
                </Button>
                <Overlay target={qtarget.current} show={qshow} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={qnow}
                          label={`${qnow}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}

{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
               width="150" height="150"  variant="top"  className=" zoom rounded-circle border"
                src="./python.PNG"
                
              />
              <Figure.Caption>
                <p className="bg-warning rounded-4 text-center">Python</p>
                <Button
                  variant="primary"
                  ref={ttarget}
                  onClick={() => settShow(!tshow)}
                >
                  Progreso
                </Button>
                <Overlay target={ttarget.current} show={tshow} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={tnow}
                          label={`${tnow}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}

{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
                width="150" height="150"  variant="top"  className=" zoom rounded-circle border"
                src="./java.PNG"
               
              />
              <Figure.Caption>
                <p className="bg-warning rounded-4 text-center">JAVA</p>
                <Button
                  variant="primary"
                  ref={jtarget}
                  onClick={() => setjShow(!jshow)}
                >
                  Progreso
                </Button>
                <Overlay target={jtarget.current} show={jshow} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={jnow}
                          label={`${jnow}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}

{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
                width="150" height="150"  variant="top"  className=" zoom rounded-circle border"
                src="./restadistico.PNG"
            
              />
              <Figure.Caption>
                <p className="bg-warning rounded-4 text-center"> R estadistico</p>
                <Button
                  variant="primary"
                  ref={dtarget}
                  onClick={() => setdShow(!dshow)}
                >
                  Progreso
                </Button>
                <Overlay target={dtarget.current} show={dshow} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={dnow}
                          label={`${dnow}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}

{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
               width="150" height="150"  variant="top"  className=" zoom rounded-circle border"
                src="./excel1.PNG"
              
              />
              <Figure.Caption>
                <p className="bg-warning rounded-4 text-center"> Excel</p>
                <Button
                  variant="primary"
                  ref={ztarget}
                  onClick={() => setzShow(!zshow)}
                >
                  Progreso
                </Button>
                <Overlay target={ztarget.current} show={zshow} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={znow}
                          label={`${znow}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}

{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
            width="150" height="150"  variant="top"  className=" zoom rounded-circle border"
                src="./Aillustrator.PNG"
               
              />
              <Figure.Caption>
                <p className="bg-warning form-wrapper rounded-4 text-center"> Adobe Illustrator</p>
                <Button
                  variant="primary"
                  ref={gtarget}
                  onClick={() => setgShow(!gshow)}
                  className="mt-3"
                >
                  Progreso
                </Button>
                <Overlay target={gtarget.current} show={gshow} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={gnow}
                          label={`${gnow}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}

{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
               width="150" height="150"  variant="top"  className=" zoom rounded-circle border"
                src="./autocad.PNG"
            
              />
              <Figure.Caption>
                <p className="bg-warning rounded-4 text-center"> AUTOCAD</p>
                <Button
                  variant="primary"
                  ref={ftarget}
                  onClick={() => setfShow(!fshow)}
                >
                  Progreso
                </Button>
                <Overlay target={ftarget.current} show={fshow} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={fnow}
                          label={`${fnow}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}

{Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Figure>
              <Figure.Image
                width="150" height="150"  variant="top"  className=" zoom rounded-circle border"
                src="./geogebra.PNG"
              
              />
              <Figure.Caption>
                <p className="bg-warning rounded-4 text-center">Geogebra</p>
                <Button
                  variant="primary"
                  ref={ktarget}
                  onClick={() => setkShow(!kshow)}
                >
                  Progreso
                </Button>
                <Overlay target={ktarget.current} show={kshow} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      Porcentaje estimado
                      <div>
                        <ProgressBar
                          animated
                          variant="success"
                          now={know}
                          label={`${know}%`}
                        />
                      </div>
                    </Tooltip>
                  )}
                </Overlay>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}



      </Row>
    </>
  );
}