const router = require('express').Router();
const userController = require("../app/controller/user.controller.js");

router.get('/tes', function(req, res) {
    res.send("router with " + req.method);
});
router.post('/tes', function(req, res) {
    res.send("router with " + req.method);
});
router.put('/tes', function(req, res) {
    res.send("router with " + req.method);
});
router.delete('/tes', function(req, res) {
    res.send("router with " + req.method);
});

// user router
router.get('/user', userController.viewUser);
router.get('/user/:id', userController.viewWhereUser);
router.post('/user', userController.insertUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;