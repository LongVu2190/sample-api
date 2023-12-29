import { sampleData } from "../data/index.js";

const getSampleById = async (req, res, next) => {
  try {
    const sampleId = req.body.sampleId;
    const response = await sampleData.getSampleById(sampleId);

    res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default {
  getSampleById,
};
