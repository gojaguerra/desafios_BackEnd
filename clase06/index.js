const Contenedor = require('./contenedor.js')

const express = require("express")

const app = express()

const PORT = 8080

const server = app.listen(PORT, ()=>{
    console.log("Servidor prendido");
})
let datos = [];

async function main() {
    
    // CREANDO INSTANCIA
    const contenedor=new Contenedor('./productos.txt')
    
    // OBTENGO TODOS LOS OBJETOS QUE HAY EN EL ARCHIVO
    datos = await contenedor.getAll()
    // console.log("datos:",datos);

    //RUTAS
    app.get("/", (req, res) => {
        res.send(`<h1 style="color:blue;">Bienvenidos al servidor express</h1>`)
    })
    
    app.get("/productos", (req, res) => {
        res.send(datos)
    })

    app.get("/productosRandom", (req, res) => {
        let numero=Math.floor(Math.random() * 3) + 1;
        // console.log(numero);
        res.send(datos[numero-1])
    })

    server.on("error", (err)=>{
        console.log(`ERROR: ${err}`);
    })



}

main()




