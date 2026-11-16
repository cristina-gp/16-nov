# Reglas de la casa

## Forma de trabajar
- Después de cada desarrollo debes pedirme que haga pruebas.
- Debes preguntarme si las pruebas salieron bien.
- Si hay que modificar, eliminar o agregar algo, no continúes con el desarrollo
  hasta obtener un "aprobado".
- Trabaja solo en la fase que te pido. No adelantes fases.

## Ubicación de archivos
- Todo el trabajo se hace en `src/`, excepto `index.js`, que va en la raíz.
- Nunca crees un archivo en la raíz salvo que te lo pida explícitamente.
- Si tienes dudas sobre la ubicación de un archivo, pregúntame.

## Estilo
- Trabaja con ES Modules (`import`/`export`), nunca con CommonJS (`require`).

## Arquitectura por capas
- Routes → Controller → Service → Model.
- **Controller:** solo llama al servicio, guarda su respuesta en una variable y hace
  `res.status(variable.status).send(variable.message)`. Sin try/catch ni validaciones.
- **Service:** contiene toda la lógica y todas las validaciones. SIEMPRE retorna
  `{ status, message }`: si todo sale bien, si sale mal y también desde el catch.
- **Model:** no ejecuta lógica. Solo recibe datos e interactúa con la BD mediante
  Prisma, con el menor código posible.

## Integraciones
- Groq: usa la API key `GROQ_API_KEY` del `.env` y sigue la documentación oficial
  (https://console.groq.com/docs/quickstart).