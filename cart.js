const router = require("express").Router();
const tokens = require("./login").tokens;

let choosenProducts = [{}]

//get

router.get('/' , (req , res) =>{
    res.send(choosenProducts.map((x,i)=>({...x,username:tokens[x.token]})))
});

//post

router.post('/', (req, res) => {

    const choosenProduct = req.body;

    choosenProducts = choosenProduct;
    res.send({error:false , choosenProduct});

  });

  module.exports=router;