const express = require("express");
const router = express.Router();
// const bodyParser = require('body-parser');

router.use(express.urlencoded({extended: false}));
router.use(express.json())

router.get('/', (req, res) => {
    
    res.render('index')
})

router.post('/', (req, res) => {
    
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    console.log(req.body.fName, req.body.lName, req.body);
    res.send(`${firstName} ${lastName}`)
})

module.exports = router;