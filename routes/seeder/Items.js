const express = require('express');
const router = express.Router();
const faker = require('faker');
const Item = require('../../models/Item');
const Category = require('../../models/Category');

router.get('/', function (req, res, next) {
    const categories = ["Baby", "Movies", "Shoes", "Books", "Electronics","Computers", "Kids"];
    for (let i = 0; i < 20; i++) {
        let item = new Item({
            itemName : faker.commerce.productName(),
            price : faker.commerce.price(),
            category: categories[Math.floor(Math.random() * categories.length)],
            description : faker.lorem.paragraph(),
            superMarketID: faker.random.number(),
            serialNumber: faker.random.alphaNumeric()
        });

        item.save();
    }
    for (let i = 0; i < categories.length; i++) {
        let cat = new Category({
            title: categories[i]
        });
        cat.save();
    }
    res.redirect('/')
});

module.exports = router;