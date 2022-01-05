// index.ts file

import * as express from "express";

import * as Eta from 'eta';
var myTemplate = '<p>My favorite kind of cake is: <%= it.favoriteCake %></p>'

Eta.render(myTemplate, { favoriteCake: 'Chocolate!' })
// Returns: '<p>My favorite kind of cake is: Chocolate!</p>'


class App {
  public app;

  constructor() {
    this.app = express();
    this.setRoutes();
  }

    setRoutes() {
    this.app.get("/file", (req, res) => {
      res.sendFile("index.html", { root: __dirname });
    });
    this.app.get("/eta", (req, res) => {
      res.send(Eta.render(myTemplate, { favoriteCake: "Chocolate!" }));  
    })
    this.app.get("/", (req, res) =>
      res.send("Welcome to Node.js and TypeScript!")
    );
  }
}

export default new App().app;
