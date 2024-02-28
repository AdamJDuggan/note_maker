const express = require('express');
const {marked} = require('marked');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const app = express();
const PORT = 3000;
// Set the view engine to EJS
app.set('view engine', 'ejs');
// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));
// Create a route for each Markdown post
fs.readdir('./posts', (err, files) => {
  files.forEach(file => {
    const name = file.split('.')[0];
    const filePath = path.join(__dirname, 'posts', file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const html = marked(fileContents);
    app.get(`/${name}`, (req, res) => {
      res.render('post', { title: name, content: html });
    });
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/:filename", (req, res) => {
  const filename = req.params.filename;
  const markdown = `./posts/${filename}.md`;
  fs.readFile(markdown, "utf8", (err, data) => {
    if (err) {
      res.send("File not found");
    } else {
      const html = marked(data.toString());
      res.send(html);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
