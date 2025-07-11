export const prerender = false;
import conexion from '../../../database/conexion.js';

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { userName, review, rating } = data;

    if (!userName || !review || !rating) {
      return new Response(JSON.stringify({ error: "Faltan datos" }), { status: 400 });
    }

    const sql = "INSERT INTO opiniones (nombre, texto, rating) VALUES (?, ?, ?)";
    await conexion.execute(sql, [userName, review, rating]);

    return new Response(JSON.stringify({ message: "Opinión guardada" }), { status: 200 });
  } catch (error) {
    console.error("❌ Error guardando en la base de datos:", error);
    return new Response(JSON.stringify({ error: "Error del servidor" }), { status: 500 });
  }
}

export async function GET() {
  try {
    const [rows] = await conexion.query("SELECT nombre, texto, rating FROM opiniones ORDER BY id DESC LIMIT 10");

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("❌ Error recuperando opiniones:", error);
    return new Response(JSON.stringify({ error: "Error al obtener opiniones" }), { status: 500 });
  }
}
