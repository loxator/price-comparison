const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/items',(req,res,next)=>{
    Item.find((err,items) => {
        res.json(items);
    });
});

//add item
router.post('/newItem',(req,res,next) => {
    let newItem = new Item({
        itemName: req.body.itemName,
        price: req.body.price,
        description: req.body.description,
        serialNumber: req.body.serialNumber,
        superMarketID:req.body.superMarketID
    })

    newItem.save((err,item) =>{
        if(err)
        {
            res.json({msg:'Failed to add Item', err: err});
        }else {
            res.json({msg:'Item added successfully'});
        }
    })

})


//delete item
router.delete('/item/:id', (req,res,next) => {

    Item.remove({_id:req.params.id},(err,result) => {
        if(err)
        {
            res.json(err);
        }else{
            res.json({result:result,message: "Item deleted successfully"});
        }
    })
})

module.exports = router;