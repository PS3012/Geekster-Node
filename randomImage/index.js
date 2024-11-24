const axios = require("axios");
const express = require("express");
const path = require("path");

const PORT_NUMBER = 8080;

require("dotenv").config();
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

if (!UNSPLASH_ACCESS_KEY) {
  console.error("Please set your Unsplash Access Key in the .env file");
  process.exit(1);
}

const getRandomImage = async () => {
  try {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching the random image:", error.message);
  }
};

app.get("/", async (req, res) => {
  const imageData = await getRandomImage();
  res.render("home", { image: imageData });
});

app.listen(PORT_NUMBER, () => {
  console.log(`Get you random image at http://localhost:${PORT_NUMBER}.`);
});
