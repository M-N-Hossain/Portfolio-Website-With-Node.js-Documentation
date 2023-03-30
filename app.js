import express from "express";
import path from "path";
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Remeber to use extention
import templateEngine from "./util/templateEngine.js";
import loginSignUpCredenntials from "./util/loginSignUpCredenntials.js";

// Pages
const loginSignUp = templateEngine.readPage(
  "./public/pages/loginSignUp/loginSignUp.html"
);
const loginSignUpPage = templateEngine.renderLoginSignUpPage(loginSignUp);

const frontpage = templateEngine.readPage(
  "./public/pages/frontpage/frontpage.html"
);
const frontpagePage = templateEngine.renderPage(frontpage, {
  name: "MD Nayeem Hossain",
  officialTitle: "/ SOFTWARE DEVELOPER",
  pageTitle: "Homepage",
  cssLink: `<link href="/pages/frontpage/frontpage.css" rel="stylesheet" />`,
});

const nodes = templateEngine.readPage("./public/pages/nodes/nodes.html");
const nodesPage = templateEngine.renderPage(nodes, {
  pageTitle: "Nodes",
  cssLink: `<link href="/pages/nodes/nodes.css" rel="stylesheet" />`,
});

const documentation = templateEngine.readPage(
  "./public/pages/documentation/documentation.html"
);
const documentationPage = templateEngine.renderPage(documentation, {
  pageTitle: "Documentation",
  cssLink: `<link href="/pages/documentation/documentation.css" rel="stylesheet" />`,
});

// Nodes pages PAGE
const overview = templateEngine.readPage(
  "./public/pages/nodes/overview/overview.html"
);
const overviewPage = templateEngine.renderPageInNodePage(overview, {
  pageTitle: "Nodes | Overview",
  documentationTitle: "Overview",
  cssLink: `<link href="/pages/nodes/nodes.css" rel="stylesheet" />`,
  subPageCssLink: `<link href="/pages/nodes/overview/overview.css" rel="stylesheet" />`,
});
const gettingStarted = templateEngine.readPage(
  "./public/pages/nodes/gettingStarted/gettingStarted.html"
);
const gettingStartedPage = templateEngine.renderPageInNodePage(gettingStarted, {
  pageTitle: "Nodes | Get's Start",
  documentationTitle: "Get's Start",
  cssLink: `<link href="/pages/nodes/nodes.css" rel="stylesheet" />`,
  subPageCssLink: `<link href="/pages/nodes/gettingStarted/gettingStarted.css" rel="stylesheet" />`,
});

const packageDotJson = templateEngine.readPage(
  "./public/pages/nodes/packageDotJson/packageDotJson.html"
);
const packageDotJsonPage = templateEngine.renderPageInNodePage(packageDotJson, {
  pageTitle: "Nodes | Package.Json",
  documentationTitle: "Package.Json",
  cssLink: `<link href="/pages/nodes/nodes.css" rel="stylesheet" />`,
  subPageCssLink: `<link href="/pages/nodes/packageDotJson/packageDotJson.css" rel="stylesheet" />`,
});

const dependencies = templateEngine.readPage(
  "./public/pages/nodes/dependencies/dependencies.html"
);
const dependenciesPage = templateEngine.renderPageInNodePage(dependencies, {
  pageTitle: "Nodes | Dependencies",
  documentationTitle: "Dependencies",
  cssLink: `<link href="/pages/nodes/nodes.css" rel="stylesheet" />`,
  subPageCssLink: `<link href="/pages/nodes/dependencies/dependencies.css" rel="stylesheet" />`,
});

const expresspage = templateEngine.readPage(
  "./public/pages/nodes/express/express.html"
);
const expresspagePage = templateEngine.renderPageInNodePage(expresspage, {
  pageTitle: "Nodes | Express",
  documentationTitle: "Express",
  cssLink: `<link href="/pages/nodes/nodes.css" rel="stylesheet" />`,
  subPageCssLink: `<link href="/pages/nodes/express/express.css" rel="stylesheet" />`,
});

const nodemon = templateEngine.readPage(
  "./public/pages/nodes/nodemon/nodemon.html"
);
const nodemonPage = templateEngine.renderPageInNodePage(nodemon, {
  pageTitle: "Nodes | Nodemon",
  documentationTitle: "Nodemon",
  cssLink: `<link href="/pages/nodes/nodes.css" rel="stylesheet" />`,
  subPageCssLink: `<link href="/pages/nodes/nodemon/nodemon.css" rel="stylesheet" />`,
});

const terminalCommand = templateEngine.readPage(
  "./public/pages/nodes/terminalCommand/terminalCommand.html"
);
const terminalCommandPage = templateEngine.renderPageInNodePage(
  terminalCommand,
  {
    pageTitle: "Nodes | Terminal Commands",
    documentationTitle: "Terminal Commands",
    cssLink: `<link href="/pages/nodes/nodes.css" rel="stylesheet" />`,
    subPageCssLink: `<link href="/pages/nodes/terminalCommand/terminalCommand.css" rel="stylesheet" />`,
  }
);

//Sending pages in url

app.get("/", (req, res) => {
  res.send(frontpagePage);
});

app.get("/resume", (req, res) => {
  res.sendFile(path.resolve("public/pages/resumePage/resumePage.html"));
});

app.get("/documentation", (req, res) => {
  res.send(documentationPage);
});

app.get("/nodes", (req, res) => {
  res.send(nodesPage);
});
app.get("/adminPanel", (req, res) => {
  res.send(loginSignUpPage);
});

// sending sub pages

app.get("/gettingStarted", (req, res) => {
  res.send(gettingStartedPage);
});

app.get("/overview", (req, res) => {
  res.send(overviewPage);
});

app.get("/packageDotJson", (req, res) => {
  res.send(packageDotJsonPage);
});

app.get("/dependencies", (req, res) => {
  res.send(dependenciesPage);
});

app.get("/express", (req, res) => {
  res.send(expresspagePage);
});

app.get("/nodemon", (req, res) => {
  res.send(nodemonPage);
});

app.get("/terminalCommand", (req, res) => {
  res.send(terminalCommandPage);
});

// API

app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (
    loginSignUpCredenntials.user.username === username &&
    loginSignUpCredenntials.user.password === password
  ) {
    res.redirect("/");
  } else {
    res.redirect("/adminPanel");
  }
});

const PORT = 8080;
app.listen(PORT);
