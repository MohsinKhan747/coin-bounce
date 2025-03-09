const express = require('express')
const authController = require('../controller/authController');
const blogController = require('../controller/blogController');
const commentController = require('../controller/commentController');
const auth = require('../middlewares/auth')

const router = express.Router();

// testing
router.get('/test', (req,res)=>res.json({msg:"Working!!"}))


// user Routes
// register
router.post('/register',authController.register)
// login
router.post('/login',authController.login)

// logout
router.post('/logout',auth,authController.logout)
// refresh
router.get('/refresh',authController.refresh)

// blog
// CRUD
router.post('/blog',auth,blogController.create)

// get all
router.get('/blog/all', auth,blogController.getAll)

// get blog by id
router.get('/blog/:id',auth, blogController.getById);

// update
router.put('/blog',auth,blogController.update);

//delete
router.delete('/blog/:id',auth,blogController.delete);
// create read update delete
// read all blogs - list
// read blog filter by id

// comment

// working on comments end points
// end points

// create

router.post('/comment',auth,commentController.create);

// get
router.get('/comment/:id',auth,commentController.getById);

// create comment {end point}
// we can also add CRUD opeations here 
// read comments by blog id {end point}

module.exports = router