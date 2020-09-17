const db = require("../models");

module.exports = function (app) {
    app.get("/api/sale", function (req, res) {
        db.Sale.findAll({}).then(function (dbSale) {
            res.json(dbSale);
        })
    });
};