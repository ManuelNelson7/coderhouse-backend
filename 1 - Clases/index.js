class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros = [...this.libros, { nombre: nombre, autor: autor }];
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre);
    }
}

const Manuel = new Usuario('Manuel', 'Nelson', [], []);

//Añado datos a mi usuario
Manuel.addMascota("Lola");
Manuel.addMascota("Blondi");
Manuel.addBook("El señor de los anillos", "J.R.R. Tolkien");
Manuel.addBook("Game of Thrones", "George R.R. Martin");

//Datos por consola
console.log(Manuel.getFullName());
console.log(Manuel.countMascotas());
console.log(Manuel.getBookNames());