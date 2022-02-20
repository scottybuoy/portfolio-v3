const router = require("express").Router();

router.get('/', (req, res) => {
    res.render('homepage');
    // res.send('hey there')
})




module.exports = router;