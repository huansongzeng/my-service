const { Router } = require('express');
const router = Router();

router.get('/', async (req,res) => {
    res.send('Hello World! - Winston logged');
})

module.exports = router