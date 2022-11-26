import express, { json, urlencoded } from "express";
import baseRouter from "../routes/base.route.js"
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// importo HanddleBars 
/* import { engine } from "express-handlebars"; */

const __dirname = dirname(fileURLToPath(import.meta.url));
// INICIALIZACION DEL SERVIDOR
const app = express();

//middleware req.body
app.use(json());
app.use(urlencoded({ extended: true}));

// HanddleBars
/* app.engine(
    "hbs",
    engine({
      extname: ".hbs",
      defaultLayout: join(__dirname, "../views.hbs/layouts/main.hbs"),
      layoutsDir: join(__dirname, "../views.hbs/layouts"),
    })
  );
app.set("view engine", "hbs");
app.set("views", join(__dirname, "../views.hbs")); */

// PUG
/* app.set("view engine", "pug");
app.set("views", join(__dirname, "../views.pug")); */

//EJS
app.set("view engine", "ejs");
app.set("views", join(__dirname, "../views.ejs"));

//middleware Log conexiones
app.use((req, res, next) => {
    /* console.log(`Nueva ${req.method} - ${req.path}`); */
    next();
});


//Routes
app.use("/", baseRouter);

//Escuchando puerto 8080 con log de errores
app.listen(8080, (error) => {
    if(error){
        console.log('Error al iniciar la APP', error);
    }else{
        console.log('Servidor escuchando el puerto 8080');
    }
})