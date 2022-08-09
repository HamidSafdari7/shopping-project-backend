const router = require("express").Router();

let choosenProducts = [{}]

//get

router.get('/' , (req , res) =>{
    res.send(choosenProducts)
});

//post

router.post('/', (req, res) => {

    const choosenProduct = req.body;

    choosenProducts = choosenProduct;
    res.send({error:false , choosenProduct});

  });

  module.exports=router;