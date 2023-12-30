import pool from "../../config/database.js";
import loadSqlQueries from "../utils/loadSqlQueries.js";

const getSampleById = async (sampleId) => {
  const client = await pool.connect();
  try {
    const sqlQueries = await loadSqlQueries("../data/sample/queries");
    const res = await client.query(sqlQueries.selectSample, [sampleId]);

    return res.rows[0];
  } catch (error) {
    console.log(error.message);
  } finally {
    client.release();
  }
};

export default {
  getSampleById,
};
