import express from "express";
import morgan from "morgan";
import taskRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes, en rutas tambien puede ir el manejo de roles 
app.use("/api", taskRoutes); // el /api es para diferenciar las rutas con el frontedn
app.use("/api", authRoutes);

app.get("/", (req, res) => res.json({ message: "welcome to my API" }));

//Error Hander
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});
//manejador de errores, no importa como vayan las rutas, siempre vuelve aqui, siemmpre y cuando lo maneje como un next

export default app;
