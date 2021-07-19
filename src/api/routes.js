
const path = require('path')
const middleware = require(path.join(__dirname, './middleware'))

function home(req, res) {
  res.render("home", {
    title: "Home",
  });
}

function load(options) {
  const { app, hbs } = options

  app.get("/", middleware.exposeTemplates({app, hbs}), home);
}

exports.load = load
