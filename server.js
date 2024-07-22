import jsonServer from 'json-server';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5000;

// Middleware para servir archivos estáticos de la carpeta build
app.use(express.static(path.join(__dirname, 'build')));

app.use(middlewares);
app.use('/api', router);

// Servir el index.html para cualquier ruta que no sea API
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
