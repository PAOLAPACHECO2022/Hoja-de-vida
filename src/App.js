import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {  CDBBtn, CDBIcon, CDBBox} from 'cdbreact';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateProduct from "./components/create-product.component";
import EditProduct  from "./components/edit-product.component";
import ProductList from "./components/product-list.component";
import Home from "./components/home";
import Login from "./components/login";
import Producer from "./components/create-producer.component";
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="black" variant="dark">
            <Container>
            <Navbar.Brand>        
            
                <Link to={"/home"} className="nav-link">
                <img
                alt=""
                src="/laplaza.gif"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{' '}            
                LA PLAZA CAMPESINA
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
              <Nav>
                  <Link to={"/home"} className="nav-link ">
                    Home
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/login"} className="nav-link ">
                    Login
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/create-producer"} className="nav-link ">
                    Registro
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/create-product"} className="nav-link ">
                    Crear Producto
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/product-list"} className="nav-link">
                    Listar Producto
                  </Link>
                </Nav>
              
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch> 
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateProduct {...props} />}
                  />
                  <Route  // Se dirige a cada una de las rutas y precisa cual es cada una basada en las propiedades(switch) 
                    exact
                    path="/home"
                    component={(props) => < Home {...props} />}
                  />
                  <Route  // Se dirige a cada una de las rutas y precisa cual es cada una basada en las propiedades(switch) 
                    exact
                    path="/login"
                    component={(props) => <Login {...props} />}
                  />
                  <Route  // Se dirige a cada una de las rutas y precisa cual es cada una basada en las propiedades(switch) 
                    exact
                    path="/create-producer"
                    component={(props) => <Producer {...props} />}
                  />
                  <Route  // Se dirige a cada una de las rutas y precisa cual es cada una basada en las propiedades(switch) 
                    exact
                    path="/create-product"
                    component={(props) => <CreateProduct {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-product/:id"
                    component={(props) => <EditProduct {...props} />}
                  />
                  <Route
                    exact
                    path="/product-list"
                    component={(props) => <ProductList {...props} />}
                  />
                  
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>

      </Router>

      <Router>
  
        <footer className="footer bg-black">
          
        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
            <Link to={"/create-product"} className="nav-link">
                <img
                alt=""
                src="/laplaza.gif"
                width="110"
                height="110"
                className="d-inline-block align-top"
              />{' '}            
                
            </Link>
              <span className="ml-3 h5 font-weight-bold">LA PLAZA CAMPESINA</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              Frutas, Verduras y más...
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
            Contactenos
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
            <p>(+57) 3209887626</p>
                <p>laplaza.cm@gmail.com </p>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
            Funciones
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <ul className="list-unstyled">
                    <li><a href="#!">Crear Producto</a></li>
                    <li><a href="#!">Listar Producto</a></li>
                    <li><a href="#!">Borrar producto</a></li>
                    <li><a href="#!">Editar producto</a></li>
                </ul>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-3" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <a href="/" className=" text-dark">
          
          <img
                alt=""
                src="https://i.pinimg.com/originals/28/30/84/283084d7c1d7c52ca6a67aa75624817d.jpg" 
                width="50"
                height="50"
                className="bg-warning form-wrapper rounded-4 my-3"
              />
              <span className="ml-4 h7 mb-0 font-weight-black">Frutas y Verduras- Alimentos perecederos</span>
          </a>
          
          </CDBBox>
          <CDBBox display="flex" >
          <a href="/" className="d-flex  p-0 text-dark">
          <img
                alt=""
                src="https://i.pinimg.com/originals/a8/77/bd/a877bd50186346533f3d389fb59d2ca1.jpg"
                width="50"
                height="50"
                className="bg-warning form-wrapper rounded-4"
              />{' '}
              <span className="ml-4 h7 mb-0 font-weight-black"> Alimentos no perecederos- Arroz, Frijol y más...</span>
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
</Router>  
</div>
 

  );
}

export default App;
