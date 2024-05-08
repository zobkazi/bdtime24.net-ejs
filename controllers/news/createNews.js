const express = require("express");
const Joi = require("joi");
const News = require("../../models/newsModel");

// Joi schema for news validation
const newsSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(9000000).required(),
  author: Joi.string().min(3).max(50).required(),
  tag: Joi.string().min(3).max(300).required(),
  image: Joi.string().min(3).max(100).required(),
});

exports.createNews = async (req, res, next) => {
  try {
    // Validate the request body
    const { error, value } = newsSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { title, description, author, tag, image } = value;

    // Check if the news already exists
    const existingNews = await News.findOne({ title });
    if (existingNews) {
      return res
        .status(400)
        .json({ error: "News with this title already exists" });
    }

    // Create the news
    const news = new News({
      title,
      description,
      author,
      tag,
      image,
    });

    // Save the news
    const savedNews = await news.save();

    // Return the news
    res.status(201).json(savedNews);
  } catch (error) {
    // Handle errors
    next(error);
  }
};
