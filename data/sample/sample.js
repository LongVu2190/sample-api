import client from "../../config/database.js";
import loadSqlQueries from "../utils/loadSqlQueries.js";

const getSampleById = async (sampleId) => {
  try {
    await client.connect();

    client.on("error", (err) => {
      console.error("Connection error", err);
    });

    const sqlQueries = await loadSqlQueries("../data/sample/queries");

    const { rows } = await client.query(sqlQueries.selectSample, [sampleId]);

    client.end;

    return rows;
  } catch (error) {
    console.log(error.message);
  }
};

export default {
  getSampleById,
};
