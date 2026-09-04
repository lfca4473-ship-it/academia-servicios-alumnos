import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error(
    'Falta DATABASE_URL. Crea el archivo .env a partir de .env.example.'
  );
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export async function initializeDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS alumnos (
      id BIGSERIAL PRIMARY KEY,
      matricula VARCHAR(50) NOT NULL UNIQUE,
      datos_generales TEXT NOT NULL,
      datos_contacto TEXT NOT NULL,
      recomendado_por TEXT,
      matricula_familiar VARCHAR(50),
      idioma_nativo VARCHAR(80) NOT NULL,
      creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
}