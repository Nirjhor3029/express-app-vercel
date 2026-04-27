const express = require("express");
const app = express();

const PORT = 3000;

// middleware (json parse)
app.use(express.json());

// route
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// api route
app.get("/api/user", (req, res) => {
  res.json({
    name: "Sazzad",
    role: "Developer",
  });
});

// server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
