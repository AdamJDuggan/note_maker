const fs = require("fs");
const path = require("path");
var colors = require("colors");

colors.enable();

const printError = (message) => {
  console.log();
  console.error(message.red);
  console.log();
};

const printSuccess = (message) => {
  console.log();
  console.error(message.green);
  console.log();
};

const createPost = async (fileName, _title, _keywords) => {
  const filePath = path.join(__dirname, `./posts/${fileName}.md`);
  if (fs.existsSync(filePath)) {
    return printError("A file with that name already exists");
  }

  const date = new Date();
  const title = _title || "";
  // const keywords = _keywords ? _keywords.replace(",", " ") : "";
  let keywords = "";
  if (_keywords)
    _keywords.split(",").forEach((word) => (keywords += word + " "));

  const content = `---
    title: ${title}
    keywords: ${keywords}
    createdAt: ${date}
---`;

  await fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      printError("Error writing to file");
    } else {
      printSuccess("Markdown file created successfully.");
    }
  });
};

module.exports = { createPost };
