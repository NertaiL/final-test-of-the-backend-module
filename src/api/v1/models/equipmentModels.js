import pool from "../../../../config/db/connectionDb.js";

//get
export const gettingEquipment = async () => {
  const SQLquery = "SELECT * FROM equipments";
  const response = await pool.query(SQLquery);
  return response.rows;
};
//post
export const creatingTeam = async ({ name }) => {
  const SQLquery = {
    text: "INSERT INTO equipments (name) VALUES ($1) RETURNING *;",
    values: [name],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};
