import express, { json, urlencoded } from "express";
import productoRouter from "./routes/producto.route.js";
import baseRouter from "./routes/base.route.js"

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/productos", productoRouter);
app.use("/", baseRouter);

app.listen(8080, (error) => {
  if (error) {
    console.log("Error al iniciar la app", error);
  } else {
    console.log("Servidor ecuchando puerto 8080");
  }
});