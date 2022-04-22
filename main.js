const express = require("express");
const app = express();

require("dotenv").config();

const categoriesData = require("./data/categoriesData");
const popularData = require("./data/popularData");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello, World!",
  });
});

app.get("/api/pizza", (req, res) => {
  res.json({
    popular: popularData,
    categories: categoriesData,
  });
});

app.get("/api/", (req, res) => {
  res.redirect("/api/pizza/");
});

app.get("", (req, res) => {
  res.redirect("/api/");
});

// Port:
const PORT = process.env.PORT || 9000;

app.listen(PORT, () =>
  console.log(`Server Running On http://localhost:${PORT}/`)
);
