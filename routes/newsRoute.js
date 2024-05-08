const router = require("express").Router();
const { createNews } = require("../controllers/news/createNews");
const { getAllNews } = require("../controllers/news/getAllNews");
const { getNewsById } = require("../controllers/news/getNewsById");
const { getHomeNews } = require("../controllers/news/homeNews");

router.post("/createNews", createNews);

router.get("/news", getAllNews);

router.get("/all", getHomeNews);

router.get("/news/:id", getNewsById);



module.exports = router;
