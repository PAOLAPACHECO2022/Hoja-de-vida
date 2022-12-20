import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {  CDBBtn, CDBIcon, CDBBox} from 'cdbreact';
import { Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Perfil from "./components/perfil";
import Education from "./components/education";
import Portafolio from "./components/portafolio";
import Habilidades from "./components/habilidades";
import Experiencia from "./components/experiencia"
import Contacto from "./components/contacto"
function App() {
  return (
    <Router>
    <div className="App ">

     <Navbar collapseOnSelect expand="lg" 
       style={{
        backgroundImage: `url("/header1.JPG")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        border: "1px solid #565555",
        height: "w-100"
      }} >
      <Container>
        
          <img
          className="zoom"
          alt=""
          src="/logo.png"
          width="100"
          height="100"
          href="/perfil"
       
        />{' '}            
  
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" Style={"color: #eed757;"} className="bg-dark"/>
        <Navbar.Collapse  id="responsive-navbar-nav"  >
          <Nav  id="opciones" Style={"color: #eed757;"}>
            <Nav.Link Style={"color: rgba(14, 10, 0, 0.87); styles.subrayado"}className="bx- bx-user fw-bold" href="/perfil">Mi perfil profesional</Nav.Link>
            <Nav.Link Style={"color: rgba(14, 10, 0, 0.87);"} className="bx bx-file-blank fw-bold  " href="/education">Educación</Nav.Link>
            <Nav.Link Style={"color: rgba(14, 10, 0, 0.87);"} className="bx bx-book-content fw-bold " href="/portafolio">Portafolio</Nav.Link>
            <Nav.Link Style={"color: rgba(14, 10, 0, 0.87);"} className="bx bx-server fw-bold  "  href="/habilidades">Habilidades</Nav.Link>
            <Nav.Link Style={"color: rgba(14, 10, 0, 0.87);"} className="bx bx-server fw-bold "  href="/experiencia">Experiencia</Nav.Link>
            <Nav.Link Style={"color: rgba(14, 10, 0, 0.87);"} className="bx bx-envelope fw-bold  " href="/home">Mis pasatiempos</Nav.Link>
            <Nav.Link Style={"color: rgba(14, 10, 0, 0.87);"} className="bx bx-envelope fw-bold " href="/contacto">Contacto</Nav.Link>
            
          </Nav>
          <Nav>
          <Dropdown.Header>
                            <CDBBtn className="mx-3 p-2 rounded-3 bg-warning">
                            <img
          alt=""
          src="./cubo.gif"
          width="30"
          height="30"
          className=" form-wrapper rounded-4"
        />{' '}
        
        <Dropdown.Item href="/ " className=" h7">Cerrar sesión</Dropdown.Item>
    </CDBBtn> </Dropdown.Header> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



          <Container>
          <Row>
            <Col md={12}>
              <Switch>
                <Route exact path="/" component={Perfil} />
                <Route path="/experiencia" component={Experiencia} />
                <Route path="/education" component={Education} />
                <Route  // Se dirige a cada una de las rutas y precisa cual es cada una basada en las propiedades(switch) 
                    exact
                    path="/perfil"
                    component={(props) => < Perfil {...props} />}
                  />
              
                    <Route
                    exact
                    path="/portafolio"
                    component={(props) => < Portafolio {...props} />}
                  />
                  <Route
                    exact
                    path="/habilidades"
                    component={(props) => < Habilidades {...props} />}
                  />
                   <Route
                    exact
                    path="/contacto"
                    component={(props) => < Contacto {...props} />}
                  />
                 <Route
                    exact
                    path="/home"
                    component={(props) => < Home {...props} />}
                  />
               
              
              </Switch>
              <br></br>
              <br></br>
            </Col>
          </Row>
          </Container>
  
  
  <footer className="footer"
     style={{
      backgroundImage: `url("/footer2.JPG")`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      border: "1px solid #565555",
      height: "w-100",
      fontFamily: "bold" 
    }}>
    
  <CDBBox display="flex" flex="column" className="mx-auto py-5 fw-bold" style={{ width: '90%' }}>
  <CDBBox display="flex" justifyContent="between" className="flex-wrap">
    <CDBBox>
      <a href="/" className="d-flex align-items-center p-0 text-dark">
      <Link to={"/perfil"} className="nav-link">
          <img
          alt=""
          src="/logo.png"
          width="100"
          height="100"
          className="zoom d-inline-block align-top"
        />{' '}            
          
      </Link>
      </a>
      <p className="my-3" style={{ width: '250px' }}>
      Matemáticas, estadística, programación y más...
      </p>
    </CDBBox>
    <CDBBox>
      <p className="h6 mb-4" style={{ fontWeight: '600' }}>
      Contactenos
      </p>
      <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
      <p>(+57) 3209887626</p>
          <p>paolapacheco.moreno@gmail.com </p>
      </CDBBox>
    </CDBBox>
    <CDBBox>
      <p className="h6 mb-4" style={{ fontWeight: '600' }}>
      Formaciones
      </p>
      <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
      <ul className="list-unstyled">
              <li><a href="/education">Matemáticas</a></li>
              <li><a href="/education">Estadistica</a></li>
              <li><a href="/portafolio">programación</a></li>
              <li><a href="/home">Manualidades y pintura</a></li>
             
          </ul>
      </CDBBox>
    </CDBBox>
    <CDBBox>
      <p className="h6 mb-3" style={{ fontWeight: '600' }}>
        Lenguajes(Estadística, Back end y Front end)
      </p>
      <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
      <a href="/" className=" text-dark">
    
    <img
          alt=""
          src="./F14.PNG" 
          width="30"
          height="30"
          className="bg-warning form-wrapper rounded-4 my-3"
        />
        <span className="ml-4 h7 mb-0 font-weight-black">Python</span>
    </a>
    
    </CDBBox>
    <CDBBox display="flex" >
    <a href="/" className="d-flex  p-0 text-dark">
    <img
          alt=""
          src="./f15.PNG"
          width="30"
          height="30"
          className="bg-warning form-wrapper rounded-4"
        />{' '}
        <span className="ml-4 h7 mb-0 font-weight-black"> R estadístico</span>
    </a>
      </CDBBox>
      <CDBBox display="flex" >
    <a href="/" className="d-flex  p-0 text-dark">
    <img
          alt=""
          src="./Captura.PNG"
          width="30"
          height="30"
          className=" form-wrapper rounded-4"
          
        />{' '}
        <span className="
        ml-4 h7 mb-0 font-weight-black"> JS</span>
    </a>
      </CDBBox>
      <CDBBox display="flex" >
    <a href="/" className="d-flex  p-0 text-dark">
    <img
          alt=""
          src="./f16.PNG"
          width="30"
          height="30"
          className="bg-warning form-wrapper rounded-4"
        />{' '}
        <span className="ml-4 h7 mb-0 font-weight-black">SQL, entre otros</span>
    </a>
      </CDBBox>
    </CDBBox>
  </CDBBox>
  <CDBBox
    display="flex"
    justifyContent="center"
    style={{ width: '100%' }}
    className="mx-auto mt-4"
  >
    <CDBBtn flat color="dark" className="p-2">
      <CDBIcon fab icon="facebook-f" />
    </CDBBtn>
    <CDBBtn flat color="dark" className="mx-3 p-2">
      <CDBIcon fab icon="twitter" />
    </CDBBtn>
    <CDBBtn flat color="dark" className="p-2">
      <CDBIcon fab icon="instagram" />
    </CDBBtn>
  </CDBBox>
  <small className="text-center mt-5">&copy; Devwares, 2022. All rights reserved.</small>
</CDBBox>

</footer>
</div>
</Router>  

 

  );
}

export default App;
