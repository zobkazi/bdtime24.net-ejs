const express = require("express");
const News = require("../../models/newsModel");

exports.getAllNews = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1; // Current page, default is 1
    const limit = 10; // Number of news articles per page

    const startIndex = (page - 1) * limit; // Starting index for pagination
    const endIndex = page * limit; // Ending index for pagination

    // Total count of news articles
    const total = await News.countDocuments();

    // Fetch news articles for the current page with pagination and limiting
    const data = await News.find().skip(startIndex).limit(limit);

    // Pagination result
    const pagination = {};
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit,
      };
    }
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit,
      };
    }
    res.render("news/getNews", {
      data,
      pagination,
      total,
      limit,
      page,
    });
  } catch (error) {
    // Handle errors
    next(error);
  }
};
