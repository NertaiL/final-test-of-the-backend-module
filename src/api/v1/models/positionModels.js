import pool from "../../../../config/db/connectionDb.js";

//get
export const obtainingPosition = async () => {
  const SQLquery = "SELECT * FROM positions;";
  const response = await pool.query(SQLquery);
  return response.rows;
};
//post
export const positionCreating = async ({ name }) => {
  const SQLquery = {
    text: "INSERT INTO positions (name) VALUES ($1) RETURNING*;",
    values: [name],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};
