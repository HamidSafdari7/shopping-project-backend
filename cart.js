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

  //delete

router.delete('/:id', (req,res)=>{

    const order = orders.find(c => c.id ===parseInt(req.params.id));
    if(!order) return res.status(404).send('404');

    const index = orders.indexOf(order);
    orders.splice(index , 1);
    res.send({error:false , order});
});

  module.exports=router;