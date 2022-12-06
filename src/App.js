//import "./App.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {  CDBBtn, CDBIcon, CDBBox} from 'cdbreact';
//import { Form, Button} from "react-bootstrap";
import { Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//import CreateProduct from "./components/create-product.component";
//import EditProduct  from "./components/edit-product.component";
//import ProductList from "./components/product-list.component";


//import "bootstrap/dist/css/bootstrap.css";
//import Home from "./components/home";
import Perfil from "./components/perfil";
import Education from "./components/education";
import Portafolio from "./components/portafolio";
import Habilidades from "./components/habilidades";
import Experiencia from "./components/experiencia"
//import Profile from "./components/myperfil.component";




function App() {
  return (
    <Router>
    <div className="App ">

     <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" >
      <Container>
        
          <img
          alt=""
          src="/logo.gif"
          width="200"
          height="200"
       
        />{' '}            
   
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  className="bx bx-user" href="/perfil">MY PERFIL PROFESIONAL</Nav.Link>
            <Nav.Link  className="bx bx-file-blank" href="/education">EDUCACIÓN</Nav.Link>
            <Nav.Link className="bx bx-book-content" href="/portafolio">PORTAFOLIO</Nav.Link>
            <Nav.Link className="bx bx-server"  href="/habilidades">HABILIDADES</Nav.Link>
            <Nav.Link className="bx bx-server"  href="/experiencia">EXPERIENCIA</Nav.Link>
            <Nav.Link className="bx bx-envelope" href="/contacto">CONTACTO</Nav.Link>
            
          </Nav>
          <Nav>
          <Dropdown.Header>
                            <CDBBtn className="mx-3 p-2 rounded-3">
                            <img
          alt=""
          src="./cubo.gif"
          width="30"
          height="30"
          className="bg-warning form-wrapper rounded-4"
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
               
              
              </Switch>
              <br></br>
              <br></br>
            </Col>
          </Row>
          </Container>
  
  
  <footer className="footer bg-black">
    
  <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
  <CDBBox display="flex" justifyContent="between" className="flex-wrap">
    <CDBBox>
      <a href="/" className="d-flex align-items-center p-0 text-dark">
      <Link to={"/create-product"} className="nav-link">
          <img
          alt=""
          src="/logo.gif"
          width="200"
          height="200"
          className="d-inline-block align-top"
        />{' '}            
          
      </Link>
      </a>
      <p className="my-3" style={{ width: '250px' }}>
      Matemáticas, estadística, programación y más...
      </p>
    </CDBBox>
    <CDBBox>
      <p className="h5 mb-4" style={{ fontWeight: '600' }}>
      Contactenos
      </p>
      <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
      <p>(+57) 3209887626</p>
          <p>paolapacheco.moreno@gmail.com </p>
      </CDBBox>
    </CDBBox>
    <CDBBox>
      <p className="h5 mb-4" style={{ fontWeight: '600' }}>
      Formaciones
      </p>
      <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
      <ul className="list-unstyled">
              <li><a href="/home">Matemáticas</a></li>
              <li><a href="/">Estadistica</a></li>
              <li><a href="/signup">programación</a></li>
              <li><a href="/signup">Manualidades y pintura</a></li>
             
          </ul>
      </CDBBox>
    </CDBBox>
    <CDBBox>
      <p className="h5 mb-3" style={{ fontWeight: '600' }}>
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





