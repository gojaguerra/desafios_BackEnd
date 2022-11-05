const Contenedor = require('./contenedor.js')

const item1 = {
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
    id: 1                                                                                                                                              
}

const item2 = {
    title: 'Calculadora',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                     
    id: 2                                                                                                                                              
}

const item3 = {
    title: 'Globo Terráqueo',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                     
    id: 3                                                                                                                                              
}

// producto repetido en el nombre para probar los metodos
const item4 = {
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
    id: 1                                                                                                                                              
}

async function main() {
    
    // CREANDO INSTANCIA
    const contenedor=new Contenedor('./productos.txt')
    
    // OBTENGO TODO LO QUE HAY EN EL ARCHIVO
    let datos = await contenedor.getAll()
    console.log(datos);

    // AGREGO  ITEM1
    let id1 = await contenedor.save(item1)
    console.log(id1);
    // AGREGO ITEM2
    let id2 = await contenedor.save(item2)
    console.log(id2);

    //
    let datosNew = await contenedor.getAll()
    console.log(datosNew);

    // buscar por id 1
    let busca1 = await contenedor.getById(1)
    console.log(busca1);
    
    // buscar por id 10 que no existe
    let busca2 = await contenedor.getById(10)
    console.log(busca2);

    // no lo debe agregar porque ya existe
    let id4 = await contenedor.save(item4)
    console.log(id4);

    // borrar el id 1 - queda un solo elemento
    await contenedor.deleteById(1)
    let datosNewDel = await contenedor.getAll()
    console.log(datosNewDel);    

    // borrar todo
    await contenedor.deleteAll()
    let datosDeleted = await contenedor.getAll()
    console.log(datosDeleted);    

}

main()