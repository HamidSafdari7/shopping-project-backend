const Joi = require('joi');
const users = require("./login").users;
const router = require("express").Router();


function validation(user){
    const schema = {
        username: Joi.string().min(3).required(),
        password: Joi.required(),
        address: Joi.string().required(),
        phone: Joi.required(),
        name:Joi.required()
    };
    return Joi.validate(user , schema);
};

//get

router.get('/' , (req , res) =>{
    res.send(users)
  });

  router.get('/:id', (req,res)=>{

    const user = users.find(c => c.id ===parseInt(req.params.id));
    if(!user) res.status(404).send('404');
    res.send(user);
  });


  //post

  router.post('/', (req, res) => {

    const {error} = validation(req.body);
    if(error) return res.status(400).send({error:true , message:error.details[0].message}); 

    const check = users.find(
      (c) =>
        c.username === req.body.username
    );
    if (check) {
      res.send({error:true,message:"این نام کاربری قبلا انتخاب شده*"});
      return;
    }

    const user = {
      id: users.length + 1,
      username: req.body.username,
      password: req.body.password,
      address: req.body.address,
      phone: req.body.phone,
      name:req.body.name
    };
    users.push(user);
    res.send({error:false , user});

  });

  //put

router.put('/:id', (req,res)=>{

  const user = users.find(c => c.id ===parseInt(req.params.id));
  if(!user) return res.status(404).send('404');

  const {error} = validation(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  user.name = req.body.name;
  user.address = req.body.address;
  user.phone = req.body.phone;
  user.password = req.body.password;
  user.username = req.body.username;
  res.send(user);
});

//delete
router.delete('/:id', (req,res)=>{

  const user = users.find(c => c.id ===parseInt(req.params.id));
  if(!user) return res.status(404).send('404');

  const index = users.indexOf(user);
  users.splice(index , 1);
  res.send({error:false , user});
});


  module.exports=router;