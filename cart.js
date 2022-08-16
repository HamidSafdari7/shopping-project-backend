const router = require("express").Router();
const tokens = require("./login").tokens;

const orders = []

//get

router.get('/' , (req , res) =>{
    res.send(orders.map((x,i)=>({...x,username:tokens[x.token]})))
});

//post

router.post('/', (req, res) => {

    const order = {
        cartItems: req.body.cartItems,
        id: orders.length + 1,
        token: req.body.token
    };

    orders.push(order);
    res.send({error:false , order});

  });

  module.exports=router;