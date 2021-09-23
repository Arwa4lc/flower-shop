const { Flower } = require("../models/flowers");

exports.getAll = async (req, res, next) => {
  try {
    const flowers = await Flower.find({})
      .skip((req.query.pageNo - 1) * req.query.pageSize)
      .limit(+req.query.pageSize);
    res.status(200).json(flowers);
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const flower = await Flower.findById(req.params.id);
    if (!flower)
      return res.status(404).json("Flower with the same ID not found");

    res.status(200).json(flower);
  } catch (error) {
    next(error);
  }
};

exports.newFlower = async (req, res, next) => {
  try {
    const flower = await Flower(req.body).save();
    res.status(201).json(flower);
  } catch (error) {
    next(error);
  }
};

exports.Update = async (req, res, next) => {
  try {
    const flower = await Flower.findById(req.params.id);
    if (!flower)
      return res.status(404).json("Flower with the same ID not found");

    await flower.set(req.body).save();
    res.status(200).json(flower);
  } catch (error) {
    next(error);
  }
};

exports.deleteFlower = async (req, res, next) => {
  try {
    const flower = await Flower.findById(req.params.id);
    if (!flower)
      return res
        .status(404)
        .json("Flower with the same ID already doesnot exist");

    await flower.delete();
    res.status(204).json("deleted");
  } catch (error) {
    next(error);
  }
};
