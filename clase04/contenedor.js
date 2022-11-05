const fs = require('fs');

class Contenedor {

    //  constructor
    constructor(ruta){
        this.ruta=ruta;
/*         try {
            await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2))
        } catch (error) {
            
        } */
    }

    //save
    async save(obj){
        // obtener objetos
        const listado = await this.getAll()

        // si existe el id no se agrega nada
        if(listado.length > 0 && listado.some((el) => el.title === obj.title)){
            // console.log("el producto ya existe");
            // throw new Error(`Error al guardar unnuevo objeto: $(error)`)
            return "el producto ya existe";
        }

        // identificamos ultimo id
        let nuevoId

        //caso 1 no hay data
        if(listado.length == 0){
            nuevoId = 1
        } else {
            nuevoId = listado[listado.length-1].id + 1
        }

        // asignar nuevo id al objeto
        const nuevoObjConId = {...obj, id:nuevoId}

        // insertar objeto al listado
        listado.push(nuevoObjConId)

        // lo guardamos
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify(listado, null, 2))
            return nuevoId
        } catch (error) {
            throw new Error(`Error al guardar unnuevo objeto: $(error)`)
        }

    }

    // funcion para obtener objetos
    async getAll(){
        try {
            const data = await fs.promises.readFile(this.ruta, 'utf8')
            return JSON.parse(data)
        } catch (error) {
            return []
        }
    }

    // funcion para obtere objeto por id
    async getById(id){
        try {
            const listado = await this.getAll()
            return listado.find(item => item.id === id)
        } catch (error) {
            throw new Error(`No se encontro el id: $(error)`)
        }
    }

    async deleteById(id){
        const listado = await this.getAll()
        const nuevoListado = listado.filter( item=> item.id != id )
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify(nuevoListado, null, 2))
        } catch (error) {
            throw new Error(`No se pudo borrar el id: $(error)`)
        }

    }
    // funcion para borrar toto
    async deleteAll(){
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2))
        } catch (error) {
            throw new Error(`No se pudo borrar todo: $(error)`)
        }
    }

}

module.exports = Contenedor