import app from './app.js';
import chalk from 'chalk';

const port = 3334;

app.listen(port, () => {
  console.log(`Servidor rodando: localhost:${port}`);
});