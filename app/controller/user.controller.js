const model = require("../models");

function viewUser(req, res){
    model.User.findAll()
    .then( function(result){
        res.json(result);
    })
    .catch( function(err){
        res.json(err);
    });
}

function viewWhereUser(req, res){
    model.User.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (result){
        res.json(result);
    }).catch(function(err){
        res.json(err);
    });
}

function insertUser(req, res){
    model.User.create({
        name: req.body.name,
        label: req.body.label,
        picture: req.body.picture,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
        summary: req.body.summary,
    }).then( function(result){
        res.json(result);
    }).catch( function(err){
        res.json(err);
    });
}

function updateUser(req, res){
    model.User.update({
        name: req.body.name,
        label: req.body.label,
        picture: req.body.picture,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
        summary: req.body.summary,
    }, {
        where : {
            id : req.params.id
        }
    }).then( function(result){
        res.json(result);
    }).catch( function(err){
        res.json(err);
    })
}

function deleteUser(req, res){
    model.User.destroy({
        where: {
            id : req.params.id
        },
    }).then( function(result){
        res.json(result);
    }).catch( function(err){
        res.json(err);
    });
}

module.exports = {
    viewUser,
    viewWhereUser,
    insertUser,
    updateUser,
    deleteUser
};