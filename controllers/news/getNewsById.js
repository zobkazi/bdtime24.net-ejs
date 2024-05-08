const express = require("express");
const News = require("../../models/newsModel");

exports.getNewsById = async (req, res, next) => {
  try {
    const newsId = req.params.id;

    // Find the news article by its ID
    const news = await News.findById(newsId);

    if (!news) {
      return res.status(404).json({ error: "News article not found" });
    }

    res.render("news/newsDetails", { news });
  } catch (error) {
    // Handle errors
    next(error);
  }
};
