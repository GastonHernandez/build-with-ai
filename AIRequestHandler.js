// Clase que encapsula y sanitiza el texto antes de enviarlo a Gemini API
class AIRequestHandler {
  constructor(rawText) {
    this.rawText = rawText;
    this.cleanText = this.sanitize(rawText);
    this.wordCount = this.countWords(this.cleanText);
    this.timestamp = new Date().toISOString();
  }

  // Limpia caracteres especiales peligrosos
  sanitize(text) {
    return text
      .replace(/[<>"/\\;`]/g, "")  // Elimina caracteres peligrosos
      .replace(/\s+/g, " ")         // Normaliza espacios
      .trim();
  }

  // Cuenta las palabras del texto
  countWords(text) {
    return text.split(" ").filter(word => word.length > 0).length;
  }

  // Devuelve el objeto listo para enviar a la API
  toAPIPayload() {
    return {
      model: "gemini-pro",
      prompt: this.cleanText,
      wordCount: this.wordCount,
      timestamp: this.timestamp,
      status: "ready"
    };
  }
}

module.exports = AIRequestHandler;
