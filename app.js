const express = require("express");
const path = require("path");
const app = express();

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
    res.render("home");
});

// Sample PTE article pages
app.get("/post", (req, res) => res.render("post"));
app.get("/post1", (req, res) => res.render("post1"));
app.get("/post2", (req, res) => res.render("post2"));
app.get("/post3", (req, res) => res.render("post3"));
app.get("/post4", (req, res) => res.render("post4"));
app.get("/post5", (req, res) => res.render("post5"));

// Speaking & Writing Video Page
app.get("/speaking-writing", (req, res) => res.render("speaking-writing"));

// Dynamic port for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
