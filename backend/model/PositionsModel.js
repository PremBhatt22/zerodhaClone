const mongoose = require("mongoose");
const { PositionsSchema } = require("../schemas/positionsSchema");

const PositionsModel = new mongoose.model("position", PositionsSchema);

module.exports = { PositionsModel };
