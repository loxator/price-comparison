const express = require('express');
const router = express.Router();

const Category = require('../models/Category');
const Item = require('../models/Item');

router.get('/', function (req, res, next) {
    Category.find(function (err, categories) {
        if (err) return console.log(err);
        res.status(200).json(categories);
    });

});
//display all items in a specific Category
router.get('/:category', function (req, res, next) {
    Category.findOne({title: req.params.category}, function (err, category) {
        if (err) return console.log(err);
        Item.find({category: category.title}, function(err, items) {
            if(err) return console.log(err);
            res.status(200).json(items);
        });
    });
});

module.exports = router;