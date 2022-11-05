// Creo la clase de usaurios
class Usuario {
    
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = []
    }

    getFullName() {
        return console.log(`El nombre del usuario es ${this.nombre} ${this.apellido}`)
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        // Valido que tenga mascotas y utilizo ternarios para poner singular o plural
        if (this.mascotas.length > 0){
            return console.log(`${this.nombre} tiene ${this.mascotas.length} ${this.mascotas.length===1 ? 'mascota' : 'mascotas'}`)
        }else{
            return console.log(`${this.nombre} no tiene mascotas`)
        }
    }

    addBook(nombre,autor) {
        this.libros.push({ nombre: nombre, autor: autor})
    }

    getBook() {
        const arrLibros = [];
        this.libros.forEach(element => {
            arrLibros.push(element.nombre)
        })
        // Valido que tenga Libros
        if (arrLibros.length > 0){
            return console.log(`Los libros de ${this.nombre} son ` + arrLibros);
        }else{
            return console.log(`${this.nombre} no tiene libros`);
        }
        
    }
}

// Declaro los Usuarios
const usuario1 = new Usuario ("Jose", "Guerra");
const usuario2 = new Usuario ("Laura", "Musa");

// Agrego las mascotas de los usuarios cargados
usuario1.addMascota("Perro");
usuario1.addMascota("Gato");
usuario1.addMascota("Hamster");
usuario2.addMascota("Tortuga")

// Agrego los libros de los usuarios cargados
usuario1.addBook("Frivolidad", "Juan Forn");
usuario1.addBook("Cerebro de Pan", "David Pearl Mutter");
usuario1.addBook("Cadaver Exquisito", "Agustina Bazterrica");

// Muestro en pantalla los datos solicitados en el desafio para cada usuario
usuario1.getFullName();
usuario1.countMascotas();
usuario1.getBook();

usuario2.getFullName();
usuario2.countMascotas();
usuario2.getBook(); // el usuario2 no tiene libros