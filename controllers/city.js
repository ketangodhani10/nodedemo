const city = require("../models/city.js");

exports.create = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "Please send data"
        });
    }

    const _city = new city({
        Name : req.body.Name,
        CountryCode : req.body.CountryCode,
        District : req.body.District,
        Population : req.body.Population,
    });

    city.create(_city, (err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        }else{
            res.status(200).send({ data });
        }
    });
};


exports.getAll = (req, res) => {
    // const bearerHeader = req.headers['authorization'];
    // console.log(bearerHeader);

    city.getAll(req.params.limit, (err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        }else{
            res.status(200).send({ data });
        }
    });
};


exports.get = (req, res) => {
    city.getById(req.params.cityId, (err, data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: "city does not exists"
                });
            }else{
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        }
        }else{
            res.status(200).send({ data });
        }
    });
};


exports.update = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "Please send data"
        });
    }

    city.updateById(req.params.cityId, new city(req.body),(err, data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: "city does not exists"
                });
            }else{
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        }
        }else{
            res.status(200).send({ data });
        }
    });
};


exports.delete = (req, res) => {
    city.delete(req.params.cityId, (err, data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: "city does not exists"
                });
            }else{
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        }
        }else{
            res.status(200).send({ data });
        }
    });
};


exports.deleteAll = (req, res) => {
    city.deleteAll((err, data) => {
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: "city does not exists"
                });
            }else{
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        }
        }else{ 
            res.status(200).send({ data });
        }
    });
};