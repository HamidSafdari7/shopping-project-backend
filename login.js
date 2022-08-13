const router = require("express").Router();
const tokens  = {}

const users = [
    {
      id:1,
      username: "hamid",
      password: "hamid1234",
      address:"گلشهر , بولوار شهید آوینی , آوینی 3/3 , پلاک 18",
      phone:09394957726,
      name:"حمید صفدری"
    }
  ];

  //get

  router.get('/' , (req , res) =>{
    res.send(users)
  });

  router.get('/:id', (req,res)=>{

    const user = users.find(c => c.id ===parseInt(req.params.id));
    if(!user) res.status(404).send('404');
    res.send(user);
  });

  router.post('/', (req, res) => {

    const check = users.find(
      (c) =>
        c.username === req.body.username &&
        c.password === req.body.password
    );
    if (!check) {
      res.send({error:true,message:"با خطا مواجه شدید"});
      return;
    }
  const token = Math.random() + ""
  tokens[token] = req.body.username
    res.send({error:false,message:"با موفقیت وارد شدید", token});
  });
  
  module.exports={router , users, tokens};
