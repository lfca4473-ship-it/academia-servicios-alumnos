import 'dotenv/config';
import { createApp } from './app.js';
import { initializeDatabase } from './db.js';

const port = Number(process.env.PORT ?? 3000);

await initializeDatabase();

const app = createApp();

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor disponible en http://localhost:${port}`);
});