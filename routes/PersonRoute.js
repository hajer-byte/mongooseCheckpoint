const express = require("express");
const router = express.Router();
const Person = require("../models/PersonSchema");

router.post("/addPerson", (req, res) => {
  const newPerson = new Person(req.body);
  newPerson.save((err, data) => {
    err ? console.error(err) : res.send("Person was added");
  });
});

router.get("/all", (req, res) => {
  Person.find()
    .then((persons) => res.send(persons))
    .catch((err) => console.log(err));
});

router.get("/:name", (req, res) => {
  const { name } = req.params;
  Person.find({ name })
    .then((persons) => res.send(persons))
    .catch((err) => console.log(err));
});

router.get("/getname/:name", (req, res) => {
  const { name } = req.params;
  Person.findOne({ name })
    .then((persons) => res.send(persons))
    .catch((err) => console.log(err));
});

router.get("/:_id", (req, res) => {
  const { _id } = req.params;
  Person.findById({ _id })
    .then((persons) => res.send(persons))
    .catch((err) => console.log(err));
});
router.put("/editPerson/:_id", (req, res) => {
  const { _id } = req.params;
  Person.find({ _id })
    .update({ $set: req.body })
    .then((Person) => res.send(Person))
    .catch((err) => console.log(err));
});
router.delete("/deletePerson/:_id", (req, res) => {
  const { _id } = req.params;
  Person.findOneAndDelete({ _id })
    .then((Person) => res.send(Person))
    .catch((err) => console.log(err));
});
router.delete("/deletePerson/:name", (req, res) => {
  const { name } = req.params;
  Person.remove({ name })
    .then((Person) => res.send(Person))
    .catch((err) => console.log(err));
});
router.put("/add/:_id", (req, res) => {
  const { _id } = req.params;
  Person.findOneAndUpdate(
    { _id },
    { addToSet: { name: "Hajer" } },
    {
      new: true,
      upsert: true,
    }
  )
    .then((users) => res.send(users))
    .catch((err) => console.log(err));
});
router.get("/sort/:favoriteFoods", (req, res) => {
  const { favoriteFoods } = req.params;
  const { name } = req.params;
  Person.find({ favoriteFoods })
    .sort({ name })
    .limit(2)
    .select({ age: false })
    .exec()
    .then((persons) => res.send(persons))
    .catch((err) => console.log(err));
});

module.exports = router;
