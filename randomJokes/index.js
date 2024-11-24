const { default: axios } = require("axios");
const express = require("express");
const path = require("path");

const app = express();
const PORT_NUMBER = 8000;

require("dotenv").config();
const NINJA_API_KEY = process.env.NINJA_API_KEY;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

const fetchRandomJoke = async () => {
  try {
    const { data } = await axios.get("https://api.api-ninjas.com/v1/jokes", {
      headers: { "X-Api-Key": NINJA_API_KEY },
    });
    return data[0]?.joke;
  } catch (err) {
    console.log("Getting some error", err);
    return "Oops! Couldn't fetch a joke right now. Please try again later.";
  }
};

app.get("/", async (req, res) => {
  const joke = await fetchRandomJoke();
  res.render("index", { joke });
});

app.listen(PORT_NUMBER, () => {
  console.log(`You can get your jokes at http://localhost:${PORT_NUMBER}`);
});
