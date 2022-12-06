
import {  CDBBox} from 'cdbreact';
import React, { Component } from "react";
import "./css/style.css";
export default class Habilidades extends Component {

  render() {
    return (

<div class="row ei m-5" id="habilidades" >

  <p  style={{fontFamily:"cursive,bold"}} className="text-thumbnail h1 text-center bg-light rounded-4 my-5 font-weight-bold mt-5">
    Habilidades
  </p>

  <div class="col-6 col-sm-3 col-md-2 text-center">
  <CDBBox display="flex" >
    <a href="/" className="d-flex  p-0 text-dark">
    <img src="./html5.png" class="rounded-circle border imgHabilidad zoom" width="150" height="150" alt="..."/>
        </a>
      </CDBBox>
    
    <p className="bg-warning rounded-4" >
      HML5
     </p>
  </div> 

  <div class="col-6 col-sm-3 col-md-2 text-center">
    <img src="./javascript.png" class="rounded-circle border imgHabilidad zoom" width="150" height="150" alt="..."/>
    <p className="bg-warning rounded-4">
      javascript
     </p>
  </div> 

  <div class="col-6 col-sm-3 col-md-2 text-center">
    <img src="./css3.png" class="rounded-circle border imgHabilidad zoom" width="150" height="150" alt="..."/>
    <p className="bg-warning rounded-4">
      CSS3
     </p>
  </div> 

  <div class="col-6 col-sm-3 col-md-2 text-center">
    <img src="./bootstrap.png" class="rounded-circle border imgHabilidad zoom"  width="150" height="150" alt="..."/>
    <p className="bg-warning rounded-4">
      Bootstrap
     </p>
  </div> 

  <div class="col-6 col-sm-3 col-md-2 text-center">
    <img src="./sqlserver.png" class="rounded-circle border imgHabilidad zoom" width="150" height="150" alt="..."/>
    <p className="bg-warning rounded-4">
      SqlServer
     </p>
  </div> 

  <div class="col-6 col-sm-3 col-md-2 text-center hvr-grow">
    <img src="./potsgre.png" class="rounded-circle border imgHabilidad zoom" width="150" height="150"  alt="..."/>
    <p className="bg-warning rounded-4">
      PotsgreSQL
     </p>
  </div> 
  <div class="col-6 col-sm-3 col-md-2 text-center hvr-grow">
    <img src="./mongo.png" class="rounded-circle border imgHabilidad zoom"  width="150" height="150" alt="..."/>
    <p className="bg-warning rounded-4">
      MongoDB
     </p>
  </div> 

  <div class="col-6 col-sm-3 col-md-2 text-center">
    <img src="./mySql.png" class="rounded-circle border imgHabilidad zoom" width="150" height="150" alt="..."/>
    <p className="bg-warning rounded-4">
      mySql
     </p>
  </div> 

  <div class="col-6 col-sm-3 col-md-2 text-center">
    <img src="./python.png" class="rounded-circle border imgHabilidad zoom" width="150" height="150" alt="..."/>
    <p className="bg-warning rounded-4">
      Python
     </p>
  </div> 

  <div class="col-6 col-sm-3 col-md-2 text-center">
    <img src="./restadistico.png" class="rounded-circle border imgHabilidad zoom w-30" width="150" height="150" alt="..."/>
    <p className="bg-warning rounded-4">
      R estadistico
     </p>
  </div> 

  <div class="col-6 col-sm-3 col-md-2 text-center">
    <img src="./excel1.png" class="rounded-circle border imgHabilidad zoom" width="150" height="150" alt="..."/>
    <p className="bg-warning rounded-4">
      Excel
     </p>
  </div>  

  <div class="col-6 col-sm-3 col-md-2 text-center">
    <img src="./Aillustrator.png" class="rounded-circle border imgHabilidad zoom" width="150" height="150" alt="..."/>
    <p className="bg-warning rounded-4">
      Adobe Illustrator
     </p>
  </div> 

    <section id="skills" class="skills section-bg">
      <div class="container">

        <div class="section-title">
          <p className="img-thumbnail bg-light rounded-4" >Soy una persona que le gusta asumir retos constantemente, es por esto que trato de estar listo para ello, capacitandome 
             con diversos conocimientos que me ayuden con el cumplimiento de mis objetivos.
          </p>
        </div>


      </div>
    </section>

</div>   
   );
     
  }
}
