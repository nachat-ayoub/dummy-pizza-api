const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello, World!",
  });
});

// Port:
const PORT = process.env.port || 9000;

app.listen(PORT, () =>
  console.log(`Server Running On http://localhost:${PORT}/`)
);
