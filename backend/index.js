const express = require("express");
const cors = require("cors");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");

const campaignRouter = require("./routes/campaign");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: __dirname + "/.env" });
}

const port = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors());
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: false }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//ROUTES

app.use("/api", campaignRouter);

// static files (build of your frontend)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
}

// listen
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
