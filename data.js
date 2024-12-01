class Socio {
    constructor(id, nombre, direccion) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
    }
}

class Libro {
    constructor(id, titulo, autor, disponibilidad) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.disponibilidad = disponibilidad;
    }
}

class Prestamo {
    constructor(idSocio, idLibro, fechaPrestamo, fechaDevolucion) {
        this.idSocio = idSocio;
        this.idLibro = idLibro;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
    }
}

// Clases "servicios" que sirven para guardan informacion respectiva a las instancias de Socio, Libro y Prestamo.
class Socios {
    constructor() {
        this.socios = [];
    }

    crearSocio(id, nombre, direccion) {
        const socio = new Socio(id, nombre, direccion);
        this.socios.push(socio);
        return socio;
    }

    obtenerSocios() {
        return this.socios;
    }

    actualizarSocio(id, nuevoNombre, nuevaDireccion) {
        let index = this.socios.findIndex(s => s.id === id);
        if (index !== -1) {
            // Reemplazar el socio en la lista con un nuevo objeto Socio
            this.socios[index] = new Socio(id, nuevoNombre, nuevaDireccion);
            return this.socios[index]; // Devolvemos el socio actualizado
        }
        return null; // Si no se encuentra el socio
    }

    eliminarSocio(id) {
        let index = this.socios.findIndex(s => s.id === id);
        if (index !== -1) {
            return this.socios.splice(index, 1)[0];
        }
        return null;
    }
}

class Libros {
    constructor() {
        this.libros = [];
    }

    crearLibro(id, titulo, autor, disponibilidad) {
        const libro = new Libro(id, titulo, autor, disponibilidad);
        this.libros.push(libro);
        return libro;
    }

    obtenerLibros() {
        return this.libros;
    }

    actualizarLibro(id, nuevoTitulo, nuevoAutor, nuevaDisponibilidad) {
        let index = this.libros.findIndex(l => l.id === id);
        if (index !== -1) {
            // Reemplazar el libro en la lista con un nuevo objeto Libro
            this.libros[index] = new Libro(id, nuevoTitulo, nuevoAutor, nuevaDisponibilidad);
            return this.libros[index]; // Devolvemos el libro actualizado
        }
        return null; // Si no se encuentra el libro
    }   

    eliminarLibro(id) {
        let index = this.libros.findIndex(l => l.id === id);
        if (index !== -1) {
            return this.libros.splice(index, 1)[0];
        }
        return null;
    }
}

class Prestamos {
    constructor() {
        this.prestamos = [];
    }

    crearPrestamo(idSocio, idLibro, fechaPrestamo, fechaDevolucion, socios, libros) {
        let libro = libros.libros.find(l => l.id === idLibro);
        let socio = socios.socios.find(s => s.id === idSocio);
        if (libro && socio && libro.disponibilidad > 0) {
            const prestamo = new Prestamo(idSocio, idLibro, fechaPrestamo, fechaDevolucion);
            this.prestamos.push(prestamo);
            libro.disponibilidad--;
            return prestamo;
        }
        return null;
    }

    obtenerPrestamos() {
        return this.prestamos;
    }

    eliminarPrestamo(idSocio, idLibro, libros) {
        let index = this.prestamos.findIndex(p => p.idSocio === idSocio && p.idLibro === idLibro);
        if (index !== -1) {
            this.prestamos.splice(index, 1);
            let libro = libros.libros.find(l => l.id === idLibro);
            libro.disponibilidad++; // Aumentar la disponibilidad del libro
            return libro;
        }
        return null;
    }
}

module.exports = { Socios, Libros, Prestamos };
