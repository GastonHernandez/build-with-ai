### 1. ¿Cómo cambia la lógica del servidor al consumir una API de base de datos vs. una API de IA (como Gemini)?

Cuando un servidor consume una API, la lógica se centra en operaciones Create, Read, Update, Delete. Las consultas son predecibles, estructuradas y devuelven datos exactos en formato tabular o JSON fijo. El servidor sabe exactamente qué esperar como respuesta.

En cambio, al consumir una API de IA como Gemini, la lógica cambia:
- Las peticiones incluyen un prompt en lugar de una consulta.
- El mismo prompt puede generar respuestas diferentes.
- Se deben manejar tiempos de espera más largos.
- Se trabaja con tokens en lugar de registros.

### 2. ¿Por qué es una vulnerabilidad grave exponer una API Key en el frontend y cómo ayuda el backend a protegerla?

Exponer una API Key en el frontend es una vulnerabilidad crítica porque cualquier persona puede ver el código fuente del navegador y robar la clave, un atacante puede usar la clave para hacer miles de peticiones a costa del propietario.

El backend actúa como intermediario seguro:
1. El usuario envía su texto al servidor propio.
2. El servidor guarda la API Key en una variable de entorno.
3. El servidor hace la petición con la clave de forma privada.
4. Solo devuelve la respuesta al usuario, sin exponer credenciales.

### 3. ¿Qué es Google AI Studio y para qué sirve en el flujo de desarrollo?

Google AI Studio es una plataforma web gratuita de Google que permite experimentar con los modelos de IA Gemini sin necesidad de escribir código inicialmente.

Sus principales usos en el flujo de desarrollo son:
- Prototipar prompts.
- Obtener la API Key.
- Explorar modelos.
- Ver ejemplos de código.
- Ajustar parámetros.

En resumen, Google AI Studio es el punto de entrada para cualquier desarrollador que quiera integrar Gemini en su aplicación, permitiendo pasar del experimento a la producción de forma rápida.
