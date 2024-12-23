const mongoose = require("mongoose");
const { OrdersSchema } = require("../schemas/ordersSchema");

const OrdersModel = new mongoose.model("order", OrdersSchema);

module.exports = { OrdersModel };
