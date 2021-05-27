const router = require("express").Router();
let Show = require("../models/show");

router.route("/").get((req, res) => {
  Show.find()
    .then((shows) => res.json(shows))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const genre = req.body.genre;
  const description = req.body.description;
  const rating = Number(req.body.rating);

  const newShow = new Show({
    username,
    name,
    description,
    genre,
    rating,
  });

  newShow
    .save()
    .then(() => res.json("Show added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Show.findById(req.params.id)
    .then((show) => res.json(show))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Show.findByIdAndDelete(req.params.id)
    .then(() => res.json("Show deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Show.findById(req.params.id)
    .then((show) => {
      show.username = req.body.username;
      show.name = req.body.name;
      show.description = req.body.description;
      show.genre = req.body.genre;
      show.rating = Number(req.body.rating);

      show
        .save()
        .then(() => res.json("Show updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
