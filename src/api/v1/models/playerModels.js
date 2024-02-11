import pool from "../../../../config/db/connectionDb.js";

//get
export const obtainingPlayers = async () => {
  const SQLquery = "SELECT * FROM players";
  const response = await pool.query(SQLquery);
  return response.rows;
};

//post
export const creatingPlayer = async ({ name, equipments_id, positions_id }) => {
  const SQLquery = {
    text: "INSERT INTO players (name, equipments_id, positions_id) VALUES ($1,$2,$3) RETURNING *",
    values: [name, equipments_id, positions_id],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};
