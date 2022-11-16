let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

  // se trae el esquema del modelo de datos

// Modelo Producto
let productSchema = require("../models/Product");
// creamos varias rutas(Crud), por medio del router
// CREAR Producto,persiste en una estructura de datos (colección de datos)
// solicitudes GET(trae, capturar elementos dentro de la persistencia), POST(Crear, gusrdad objetos en la base de datos)
//


//se crea una solicitud, se envia una solicitud post (req(solicitud),res=respuesta) (next=funcion siguiente)
//req.body=la solicitud va con todo el objeto, data objeto que se guardo.
// if error ...(envia un mensaje por consola (console.log(data);) y envia el js

router.route("/create-product").post((req, res, next) => {
  productSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

//
// LEER Producto
router.route("/").get((req, res, next) => {
  productSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//Mongo por defecto crea los id, tipo get para traer, consultar 
// utiliza metodo findById, emtrega la ruta. req.params.id solicitud a traves del parametro id
// Método get: trae los datos
// Obtener un Producto
router.route("/edit-product/:id").get((req, res, next) => {
  productSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error); // manejo de error
    } else {
      res.json(data); //Da respuesta a traves de id
    }
  });
});

//
// Actualizar Producto
router.route("/update-product/:id").put((req, res, next) => {
  productSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,  //guarda la actualización del dato
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data); // devuelve el dato que guardo
        console.log("Product updated successfully !");
      }
    }
  );
});

//Se crea la ruta "/delete-proudct/:id" con router, se utiliza el método delete
//req.params.id= solicitud a traves del parametro id
// BORRAR Producto
router.route("/delete-proudct/:id").delete((req, res, next) => {
  productSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);   // se puede modificar según los intereses  
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;