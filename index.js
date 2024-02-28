const express = require("express");
const { marked } = require("marked");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

// Serve static files from the public directory
app.use(express.static("public"));

let totalHtml = ``;

// Create a route for each Markdown post
fs.readdir("./posts", (err, files) => {
  files.forEach((file) => {
    const name = file.split(".")[0];
    const filePath = path.join(__dirname, "posts", file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const html = marked(fileContents);
    totalHtml += html;
    totalHtml += "<br/>";
    app.get(`/${name}`, (req, res) => {
      res.render("post", { title: name, content: html });
    });
  });
  totalHtml = marked(totalHtml);
});

app.get("/:filename", (req, res) => {
  const filename = req.params.filename;
  const markdown = `./posts/${filename}.md`;
  fs.readFile(markdown, "utf8", (err, data) => {
    if (err) {
      res.send("File not found");
    } else {
      const html = marked(data.toString());
      res.render("post", { title: filename, content: html });
    }
  });
});

// WORKING APPROACH
app.get("/", (req, res) => {
  // Render the HTML content using EJS
  res.render("index", { content: totalHtml });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
