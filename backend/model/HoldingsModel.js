const mongoose = require("mongoose");
const { HoldingsSchema } = require("../schemas/holdingSchema");

const HoldingsModel = new mongoose.model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
