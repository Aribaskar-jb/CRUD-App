const express = require("express");
const users = require("../models/users");
//this help to rout the files it is the pages of the express
const router = express.Router();
//this router.get will init the get metode in the / dit
router.get("/", async (req, res) => {
  // console.log('get request')
  // res.send('get request')
  try {
    const data = await users.find();
    res.json(data);
  } catch (err) {
    res.send(err);
  }
});
router.get("/:id", async (req, res) => {
  const data = await users.findById(req.params.id);
  res.json(data);
});
//this is the post metode
router.post("/", async (req, res) => {
  const userdata = new users({
    name: req.body.name,
    clg: req.body.clg,
  });
  try {
    const data = await userdata.save();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const data = await users.findByIdAndUpdate(req.params.id, req.body);

    const chaged = await data.save();
    res.json("updated");
  } catch (err) {
    res.send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const data = await users.findByIdAndUpdate(req.params.id, req.body);

    const chaged = await data.save();
    res.json("updated");
  } catch (err) {
    res.send(err);
  }
});
// router.delete("/:id", async (req, res) => {
//   try {
//     const data = await users.findByIdAndDelete(req.params.id);
//     await data.save();
//   } catch (err) {
//     res.send("data deleted")
//   }
// });
router.delete("/:id", async (req, res) => {
  try {
    const data = await users.findByIdAndDelete(req.params.id);
    if (data) {
      res.json("Data deleted successfully");
    } else {
      res.status(404).json("Data not found");
    }
  } catch (err) {
    res.status(500).send("An error occurred while deleting data");
  }
});

module.exports = router;
