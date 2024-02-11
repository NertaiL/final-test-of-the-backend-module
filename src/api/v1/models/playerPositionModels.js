import pool from "../../../../config/db/connectionDb.js";

//get all players with their positions and team respective
export const obtainingPlayerPosition = async () => {
  const SQLquery = {
    text: `
      SELECT players.name AS name, positions.name AS position, equipments.name AS equipments
      FROM players
      INNER JOIN equipments ON players.equipments_id = equipments.id
      INNER JOIN positions ON players.positions_id = positions.id
    `,
  };
  const response = await pool.query(SQLquery);
  console.log(response);
  return response.rows;
};

//get search by team, player and position
export const obtainingPlayerPositionsByTeam = async (teamID) => {
  const SQLquery = {
    text: `
        SELECT players.name AS name, positions.name AS position
        FROM players
        INNER JOIN positions ON players.positions_id = positions.id
        INNER JOIN equipments ON players.equipments_id = equipments.id
        WHERE equipments.id = $1 
        `,
    values: [teamID],
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};

//post
export const creatingTeam = async (teamID,{name, positions_id}) => {
  const SQLquery = {
    text: `
        INSERT INTO players (name,positions_id,equipments_id) VALUES ($1,$2,$3) RETURNING *;
        `,
    values: [name,positions_id,teamID]
  };
  const response = await pool.query(SQLquery)
  return response.rows[0]
};
