const db = require("../models");

module.exports = function (app) {
    app.get("/api/sale", function (req, res) {
        db.Sale.findAll({}).then(function (dbSale) {
            res.json(dbSale);
        })
    });

    app.get("/api/uniqueGroup", function(req, res) {
        db.sequelize.query('select DISTINCT Grupo FROM Sales;').then(function (dbgroup) {
            res.json(dbgroup);
        })
    })
};