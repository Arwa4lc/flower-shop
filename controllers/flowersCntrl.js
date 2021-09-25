const { Flower, dataValidate } = require("../models/flowers");

exports.getAll = async (req, res, next) => {
  try {
    let page = req.query.pageNo || 1;
    let pageSize = req.query.pageSize || 10;

    const flowers = await Flower.find({})
      .skip((page - 1) * pageSize)
      .limit(+pageSize);

    if (flowers.length === 0) return res.status(404).json("No data exists");
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
    const { error } = dataValidate(req.body);
    if (error) return res.status(400).json(error.details[0].message);

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
