# OPERACIONES CRUD (Create, Retrieve, Update, Delete)

## CREAR

### Crear un libro
curl -X POST http://localhost:3000/libros -H "Content-Type: application/json" -d @libro.json

### Crear un socio
curl -X POST http://localhost:3000/socios -H "Content-Type: application/json" -d @socio.json

### Crear un prestamo
curl -X POST http://localhost:3000/prestamos -H "Content-Type: application/json" -d @prestamo.json

## BUSCAR (RETRIEVE)

### Obtener todos los socios
curl http://localhost:3000/socios

### Obtener todos los libros
curl http://localhost:3000/libros

### Obtener todos los préstamos
curl http://localhost:3000/prestamos

## UPDATE

### Actualizar un socio
curl -X PUT http://localhost:3000/socios/1 -H "Content-Type: application/json" -d @actualizar-socio.json

### Actualizar un libro
curl -X PUT http://localhost:3000/libros/101 -H "Content-Type: application/json" -d @actualizar-libro.json

### Actualizar un prestamo
curl -X PUT http://localhost:3000/prestamos/1/101 -H "Content-Type: application/json" -d @actualizar-prestamo.json

## DELETE

### Eliminar un socio (ID 1)
curl -X DELETE http://localhost:3000/socios/1

### Eliminar un libro (ID 101)
curl -X DELETE http://localhost:3000/libros/101

### Eliminar un prestamo
curl -X DELETE http://localhost:3000/prestamos/1/101



