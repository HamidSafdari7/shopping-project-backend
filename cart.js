const router = require("express").Router();
const tokens = require("./login").tokens;

let orders = []

//get

router.get('/' , (req , res) =>{
    res.send(orders.map((x,i)=>({...x,username:tokens[x.token]})))
});

//post

router.post('/', (req, res) => {

    const order = req.body;

    orders = order;
    res.send({error:false , order});

  });

  module.exports=router;