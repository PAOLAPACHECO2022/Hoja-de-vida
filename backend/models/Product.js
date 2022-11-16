const mongoose = require("mongoose"); // se crea una constante mongoose
const Schema = mongoose.Schema;

let productSchema = new Schema(
 
  {
    name: {
      type: String,
    },
    descripcion: {
      type: String,
    },
    cantidad: {
      type: String,
    },
    precio: {
      type: Number,
    },
  },
  {
    collection: "products", // lo anterior se compone por una colección
  }
);

module.exports = mongoose.model("Product", productSchema);