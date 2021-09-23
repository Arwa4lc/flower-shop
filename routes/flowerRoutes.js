const express = require("express");
const flowerCntrl = require("../controllers/flowersCntrl");

const router = express.Router();

router.get("/", flowerCntrl.getAll);
router.get("/:id", flowerCntrl.getById);
router.post("/newFlower", flowerCntrl.newFlower);
router.patch("/:id", flowerCntrl.Update);
router.delete("/:id", flowerCntrl.deleteFlower);

module.exports = router;
