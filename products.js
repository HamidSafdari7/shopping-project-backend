const Joi = require('joi');
const router = require("express").Router();

const products = [
    {
        name: "molten-5000",
        price: 930000,
        image: "https://www.playwiththebest.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/f/5/f5v5000_1.jpg",
        id: 1 ,
    },
    {
        name: "ManUnited-kit",
        price: 245000,
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4f5884a60b864a109d08ad2b006ad233_9366/Manchester_United_21-22_Home_Mini_Kit_Red_GR3777_01_laydown.jpg",
        id: 2 ,
    },
    {
        name: "Difano",
        price: 1100000,
        image: "https://dkstatics-public.digikala.com/digikala-products/5493e9b6926f8215e5102a280b1366bf1a444f32_1642064337.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        id: 3 ,
    },
    {
        name: "Real madrid -first kit",
        price: 315000,
        image: "https://storage.torob.com/backend-api/base/images/ht/6q/ht6qgEJi7YpRFARD.jpg_/216x216.jpg",
        id: 4 ,
    },
    {
        name: "Real madrid -second kit",
        price: 248000,
        image: "https://storage.torob.com/backend-api/base/images/F6/s_/F6s_ynXPCvXz7EL3.jpeg_/0x145.jpg",
        id: 5 ,
    },
    {
        name: "Paris saint germain-kit",
        price: 265000,
        image: "https://storage.torob.com/backend-api/base/images/WZ/zU/WZzUT09HX2p2ojSO.jpg_/216x216.jpg",
        id: 6 ,
    },
    {
        name: "Paris saint germain-second kit",
        price: 259000,
        image: "https://storage.torob.com/backend-api/base/images/Oc/m4/Ocm4niypDFH5vT6t.jpg_/0x145.jpg",
        id: 7 ,
    },
    {
        name: "Man city-kit",
        price: 198000,
        image: "https://storage.torob.com/backend-api/base/images/NX/Pk/NXPkQVQJP8co2Lut.jpg_/0x145.jpg",
        id: 8 ,
    },
    {
        name: "Liverpool - kit",
        price: 265000,
        image: "https://storage.torob.com/backend-api/base/images/zq/AO/zqAO5T6vo7LNOjy6.jpg_/0x145.jpg",
        id: 9 ,
    },
    {
        name: "Ac milan-kit",
        price: 298000,
        image: "https://storage.torob.com/backend-api/base/images/s3/je/s3je_psXufmJ4OtI.jpg_/216x216.jpg",
        id: 10 ,
    },
    {
        name: "Inter milan-kit",
        price: 300000,
        image: "https://storage.torob.com/backend-api/base/images/4k/9p/4k9pomsixPYbDbPu.jpg_/216x216.jpg",
        id: 11 ,
    },
    {
        name: "Nike mercurial neymar-high copy",
        price: 1300000,
        image: "https://storage.torob.com/backend-api/base/images/Hf/-0/Hf-0i6zTSB5P5eqE.jpg_/216x216.jpg",
        id: 12 ,
    },
    {
        name: "Nike mercurial superfly-high copy",
        price: 1620000,
        image: "https://storage.torob.com/backend-api/base/images/AO/dl/AOdl6IwREy3ud-W5.jpg_/0x145.jpg",
        id: 13 ,
    },
    {
        name: "Nike mercurial vapor13",
        price: 3107000,
        image: "https://storage.torob.com/backend-api/base/images/x9/SE/x9SEZGnViafPS6DZ.jpg_/0x145.jpg",
        id: 14 ,
    },
    {
        name: "Adidas predator -high copy",
        price: 6500000,
        image: "https://storage.torob.com/backend-api/base/images/ca/sZ/casZ5VG3aQSf_37B.jpg_/0x145.jpg",
        id: 15 ,
    },
    {
        name: "Adidas predator freak",
        price: 6800000,
        image: "https://storage.torob.com/backend-api/base/images/4X/Sl/4XSlDsOOgTjLLaZa.jpg_/0x145.jpg",
        id: 16 ,
    },
    {
        name: "Adidas predator mutator-high copy",
        price: 1670000,
        image: "https://storage.torob.com/backend-api/base/images/dB/aF/dBaFvAwLj_Wq2re5.jpg_/0x145.jpg",
        id: 17 ,
    },
    {
        name: "Mizuno morelia",
        price: 6200000,
        image: "https://storage.torob.com/backend-api/base/images/W9/La/W9LayOEChivenk_Z.jpg_/0x145.jpg",
        id: 18 ,
    },
    {
        name: "Mizuno morelia-high copy",
        price: 2650000,
        image: "https://storage.torob.com/backend-api/base/images/2F/mm/2FmmLqB4T-4CsRGo.jpg_/0x145.jpg",
        id: 19 ,
    },
    {
        name: "Mizuno morelia neo -japan",
        price: 6700000,
        image: "https://storage.torob.com/backend-api/base/images/RJ/eb/RJebxAniZQ1vShEF.jpg_/0x145.jpg",
        id: 20 ,
    },
    {
        name: "Euro 2020",
        price: 309000,
        image: "https://storage.torob.com/backend-api/base/images/up/XH/upXHUH8O2DuB9sbM.jpg_/216x216.jpg",
        id: 21 ,
    },
    {
        name: "Adidas champion ball",
        price: 500000,
        image: "https://storage.torob.com/backend-api/base/images/Xl/yQ/XlyQUjDam2sNwIE_.jpg_/0x145.jpg",
        id: 22 ,
    },
    {
        name: "Beta",
        price: 109000,
        image: "https://storage.torob.com/backend-api/base/images/YU/EP/YUEPm1X0tK03QINK.jpg_/0x145.jpg",
        id: 23 ,
    },
    {
        name: "Derby star 2019",
        price: 830000,
        image: "https://storage.torob.com/backend-api/base/images/Xr/GA/XrGApi6_lIXjt8x3.jpg_/0x145.jpg",
        id: 24 ,
    },
];

function validation(product){
    const schema = {
        name: Joi.string().required(),
        price: Joi.required(),
        image: Joi.required()
    };
    return Joi.validate(product , schema);
};

//get

router.get('/' , (req , res) =>{
    res.send(products)
});

router.get('/:id', (req,res)=>{

    const product = products.find(c => c.id ===parseInt(req.params.id));
    if(!product) res.status(404).send('404');
    res.send(product);
});

//post

router.post('/', (req,res)=>{

    const {error} = validation(req.body);
    if(error) return res.status(400).send(error.details[0].message); 

    const product = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
    };
    products.push(product);
    res.send({error:false , product});
});

//put

router.put('/:id', (req,res)=>{

    const product = products.find(c => c.id ===parseInt(req.params.id));
    if(!product) return res.status(404).send('404');

    const {error} = validation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    res.send(product);
});

//delete

router.delete('/:id', (req,res)=>{

    const product = products.find(c => c.id ===parseInt(req.params.id));
    if(!product) return res.status(404).send('404');

    const index = products.indexOf(product);
    products.splice(index , 1);
    res.send({error:false , product});
});

module.exports=router;