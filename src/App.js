import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded);

app.get("/", (req, res) => res.json({ message: "welcome to my API" }));

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});
//manejador de errores, no importa como vayan las rutas, siempre vuelve aqui, siemmpre y cuando lo maneje como un next

export default app;
