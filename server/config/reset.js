import { pool } from "./database.js";
import "./dotenv.js";

async function createCustomItemsTable() {
  const createTableQuery = `
		  DROP TABLE IF EXISTS customitem;
  
		  CREATE TABLE IF NOT EXISTS customitem (
			  id SERIAL PRIMARY KEY,
			  name VARCHAR(255) NOT NULL,
			  exterior VARCHAR(10) NOT NULL,
			  exteriorPrice INTEGER,
        	  interior VARCHAR(10) NOT NULL,
			  interiorPrice INTEGER,
			  roof VARCHAR(255) NOT NULL,
        	  roofprice INTEGER,
			  wheels VARCHAR(255) NOT NULL,
        	  wheelsprice INTEGER
		  )
	  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 customItem table created successfully");
  } catch (err) {
    console.error("⚠️ error creating CustomItems table", err);
  }
}

createCustomItemsTable();
