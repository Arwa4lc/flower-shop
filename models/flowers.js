const mongoose = require("mongoose");
const mongooseAutoIncrement = require("mongoose-auto-increment");

mongooseAutoIncrement.initialize(mongoose.connection);

const flowerSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

flowerSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc) {
    return {
      id: doc.id,
      name: doc.name,
      createdAt: doc.createdAt,
    };
  },
});

flowerSchema.plugin(mongooseAutoIncrement.plugin, {
  model: "Flower",
  startAt: 1,
});

const Flower = mongoose.model("Flower", flowerSchema);
exports.Flower = Flower;
