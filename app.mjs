// app.mjs
import express from 'express';
import morgan from 'morgan';
import { Sequelize } from 'sequelize';
import sequelizeConfig from './sequelize-config.js';  // Ajusta la ruta según tu estructura
import booksRouter from './routes/PathBooks.js'

// Obtén el entorno de ejecución
const environment = process.env.NODE_ENV || 'development';

// Obtén las configuraciones de Sequelize según el entorno
const config = sequelizeConfig(environment);

// Inicializa Sequelize con las configuraciones
const sequelize = new Sequelize(config);

// Crea la aplicación Express
const app = express();

// Middleware de logging
app.use(morgan('dev'));

// Middleware para parsear JSON
app.use(express.json());

// Middleware para manejar rutas de libros
app.use(booksRouter);

// Ruta de inicio
app.get('/', (req, res) => {
  res.json('Page Home!');
});

// Puerto de escucha
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});

// Ejemplo de uso de create
