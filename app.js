"use strict";
// index.ts file
exports.__esModule = true;
var express = require("express");
var Eta = require("eta");
var myTemplate = '<p>My favorite kind of cake is: <%= it.favoriteCake %></p>';
Eta.render(myTemplate, { favoriteCake: 'Chocolate!' });
// Returns: '<p>My favorite kind of cake is: Chocolate!</p>'
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.setRoutes();
    }
    App.prototype.setRoutes = function () {
        this.app.get("/file", function (req, res) {
            res.sendFile("index.html", { root: __dirname });
        });
        this.app.get("/eta", function (req, res) {
            res.send(Eta.render(myTemplate, { favoriteCake: "Chocolate!" }));
        });
        this.app.get("/", function (req, res) {
            return res.send("Welcome to Node.js and TypeScript!");
        });
    };
    return App;
}());
exports["default"] = new App().app;
