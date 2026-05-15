const AIRequestHandler = require("../AIRequestHandler");

export default function handler(req, res) {
  // Solo aceptar método POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { propuesta } = req.body;

  // Validar que llegó texto
  if (!propuesta || propuesta.trim() === "") {
    return res.status(400).json({ error: "No se recibió ninguna propuesta." });
  }

  // Crear objeto con la clase POO
  const handler = new AIRequestHandler(propuesta);

  // Validar mínimo 10 palabras
  if (handler.wordCount < 10) {
    return res.status(400).json({
      error: `Tu propuesta tiene ${handler.wordCount} palabras. Necesita al menos 10.`
    });
  }

  // Todo bien: devolver payload listo para Gemini
  const payload = handler.toAPIPayload();

  return res.status(200).json({
    mensaje: "✅ Datos listos para Gemini API",
    datos: payload
  });
}
