import { pool } from "../config/database.js";

const createCustomItem = async (req, res) => {
  try {
    const {
      name,
      exterior,
      exteriorPrice,
      interior,
      interiorPrice,
      roof,
      roofPrice,
      wheels,
      wheelsPrice,
    } = req.body;

    const query = `
          INSERT INTO customitem 
            (name, exterior, exteriorPrice, interior, interiorPrice, roof, roofPrice, wheels, wheelsPrice)
          VALUES 
            ($1, $2, $3, $4, $5, $6, $7, $8, $9)
          RETURNING id;
        `;

    const results = await pool.query(query, [
      name,
      exterior,
      exteriorPrice,
      interior,
      interiorPrice,
      roof,
      roofPrice,
      wheels,
      wheelsPrice,
    ]);
    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getCustomItems = async (req, res) => {
  try {
    const results = await pool.query(
      "SELECT * FROM customitem ORDER BY id ASC"
    );
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getCustomItemsById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const results = await pool.query("SELECT * FROM customitem WHERE id = $1", [
      id,
    ]);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const updateCustomItem = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const {
      name,
      exterior,
      exteriorPrice,
      interior,
      interiorPrice,
      roof,
      roofPrice,
      wheels,
      wheelsPrice,
    } = req.body;
    const results = await pool.query(
      `
          UPDATE customitem SET name = $1, exterior = $2, exteriorPrice = $3, interior = $4, interiorPrice = $5, roof = $6, roofPrice = $7, wheels = $8, wheelsPrice = $9 WHERE id = $10`,
      [
        name,
        exterior,
        exteriorPrice,
        interior,
        interiorPrice,
        roof,
        roofPrice,
        wheels,
        wheelsPrice,
        id,
      ]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const deleteCustomItem = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const results = await pool.query("DELETE FROM customitem WHERE id = $1", [
      id,
    ]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getCustomItems,
  createCustomItem,
  updateCustomItem,
  deleteCustomItem,
  getCustomItemsById,
};
