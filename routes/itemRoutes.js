const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

router.get('/', function (req, res, next) {
    let perPage = 3;
    let page = parseInt(req.query.page) || 0;
    let pages = 0;
    let nextUrl = '';
    let prevUrl = '';
    Item.count().exec(function (err, count) {
        Item.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, items) {
                pages = Math.floor(count / perPage);
                if (page === 0) {
                    res.json({
                        items,
                        currentPage: page,
                        pages,
                        count,
                        prevUrl: ``,
                        nextUrl: `http://localhost:3000/items?page=${page + 1}`
                    })

                } else if (page === pages - 1) {
                    res.json({
                        items: items,
                        currentPage: page,
                        pages,
                        count,
                        prevUrl: `http://localhost:3000/items?page=${page - 1}`,
                        nextUrl: ``
                    })
                } else if (page > 0 && page < pages) {
                    res.json({
                        items: items,
                        currentPage: page,
                        pages,
                        count,
                        prevUrl: `http://localhost:3000/items?page=${page - 1}`,
                        nextUrl: `http://localhost:3000/items?page=${page + 1}`
                    })
                }else {
                    res.redirect('/items')
                }

            });
    });
});

router.get('/:id', function (req, res, next) {
    Item.findById(req.params.id, function (err, product) {
        if (err) return console.log(err);
        res.status(200).json(product);
    })
});

module.exports = router;