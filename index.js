const express = require("express");
const { marked } = require("marked");
const fs = require("fs");
const path = require("path");

fm = require("front-matter");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

// Serve static files from the public directory
app.use(express.static("public"));

let allPosts = [];
let numOfImages = 0;

fs.readdir("./public/images", (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }
  numOfImages = files.length;
});

const formatDate = (fileDate) => {
  const date = new Date(fileDate);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  const hours = `${date.getHours()}`.padStart(2, "0");
  const minutes = `${date.getMinutes()}`.padStart(2, "0");
  return `${hours}:${minutes} on ${day}/${month}/${year}`;
};

// Create a route for each Markdown post
fs.readdir("./posts", (err, files) => {
  files.forEach(async (file, index) => {
    const filePath = path.join(__dirname, "posts", file);
    const split = filePath.split("/");
    const link = split[split.length - 1].split(".")[0];
    const fileContents = fs.readFileSync(filePath, "utf8");
    var { attributes, body } = fm(fileContents);
    const html = marked(body.toString());
    const keywords = attributes.keywords
      ? attributes.keywords.split(" ").map((w) => w)
      : [];
    const imgIndex = index % numOfImages;
    const { ctime, mtime } = await fs.statSync(filePath);
    allPosts.push({
      title: attributes.title,
      description: attributes.description,
      link,
      image: `/images/${imgIndex}.jpg`,
      keywords,
      createdAt: formatDate(ctime),
      lastModified: formatDate(mtime),
      content: html,
    });
  });
});

app.get("/:filename", (req, res) => {
  const filename = req.params.filename;
  const markdown = `./posts/${filename}.md`;

  fs.readFile(markdown, "utf8", (err, data) => {
    if (err) {
      res.send("File not found");
    } else {
      var { attributes, body } = fm(data);
      const html = marked(body.toString());
      const keywords = attributes.keywords
        ? attributes.keywords.split(" ").map((w) => w)
        : [];
      res.render("post", {
        title: attributes.title,
        keywords,
        content: html,
      });
    }
  });
});

// WORKING APPROACH
app.get("/", (req, res) => {
  // Render the HTML content using EJS
  res.render("index", { posts: allPosts });
});

app.get("/search/:search", (req, res) => {
  const searchWords = req.params.search.split(",");
  const posts = allPosts.filter((post) =>
    searchWords.find((sw) =>
      [...post.title.split(" "), ...post.keywords].includes(sw)
    )
  );
  res.render("index", { posts: posts });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


