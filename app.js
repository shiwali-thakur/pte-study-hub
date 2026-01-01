const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => res.render("home"));
app.get("/blog", (req, res) => res.render("blog"));
app.get("/post1", (req, res) => res.render("post1"));
app.get("/post2", (req, res) => res.render("post2"));
app.get("/post3", (req, res) => res.render("post3"));
app.get("/post4", (req, res) => res.render("post4"));
app.get("/post5", (req, res) => res.render("post5"));
app.get("/videos", (req, res) => res.render("videos"));

app.listen(port, () => {
  console.log(`Website running on http://localhost:${port}`);
});
const articles = [
  {id: 1, title: "How to Score 65+ in PTE", content: "Scoring 65+ ..."},
  {id: 2, title: "Top Tips for PTE Reading", content: "Reading section ..."},
  {id: 3, title: "Improve PTE Speaking Fast", content: "Speaking section ..."},
  {id: 4, title: "Effective Writing Strategies", content: "Writing tips ..."},
  {id: 5, title: "Listening Tips to Boost Your Score", content: "Listening tips ..."}
];

app.get("/post/:id", (req, res) => {
  const article = articles.find(a => a.id == req.params.id);
  if (!article) return res.send("Article not found");
  res.render("post", {article});
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

