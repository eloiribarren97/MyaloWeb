import { pool } from "../db.js";

export const getAllTasks = (req, res) => res.send("obteniendo tareas");

export const getTask = (req, res) => res.send("obteniendo tarea unica");

export const createTask = async (req, res, next) => {
  const { titulo, descripcion, estado } = req.body;
  console.log(req.body);
  // este reqbody trae lo que escribio mi cliente
  try {
    const result = await pool.query(
      "INSERT INTO actividad (titulo, descripcion, estado) VALUES ($1, $2, $3) RETURNING *", // CON EL RETURNIG SIMULA UN SELECT
      [titulo, descripcion, estado]
    );

    res.json(result.rows[0]);
  } catch (error) {
    if (error.code == "23505") {
      return res.send("La tarea ya existe");
    }
    next(error);
  }
};

export const updateTask = (req, res) => res.send("actualizando tarea");

export const deleteTask = (req, res) => res.send("eliminando tarea");
