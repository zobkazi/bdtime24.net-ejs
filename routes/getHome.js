const router = require("express").Router();

const { getHomeNews } = require("../controllers/news/homeNews");


router.get("/", getHomeNews);

module.exports = router;