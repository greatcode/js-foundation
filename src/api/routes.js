
const path = require('path')
const middleware = require(path.join(__dirname, './middleware'))

function home(req, res) {
  res.render("home", {
    title: "Home",
  });
}

function blank(req, res) {
  res.render("blank", {
    title: "Blank Page"
  })
}

function load(options) {
  const { app, hbs } = options

  app.get("/", middleware.exposeTemplates({app, hbs}), home);
  app.get("/blank", middleware.exposeTemplates({app, hbs}), blank);
}

exports.load = load
