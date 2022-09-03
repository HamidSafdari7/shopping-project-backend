const router = require("express").Router();
const admintokens  = {}

const users = [
    {
      id:1,
      username: "hamid",
      password: "hamid1234",
      name:"حمید صفدری"
    }
  ];

  //get

  router.get('/' , (req , res) =>{
    res.send(users)
  });



  //post

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
  const admintoken = Math.random() + ""
  admintokens[admintoken] = req.body.username
    res.send({error:false,message:"با موفقیت وارد شدید", admintoken});
  });
  
  module.exports={router , users, admintokens};
