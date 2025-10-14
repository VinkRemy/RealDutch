import express from "express";
import fetch from "node-fetch";
const app = express();

const API_KEY = process.env.BRAWL_API_KEY; // blijf geheim houden!

app.get("/api/club/:tag", async (req, res) => {
  const tag = encodeURIComponent(req.params.tag);
  const response = await fetch(`https://api.brawlstars.com/v1/clubs/${tag}/members`, {
    headers: { Authorization: `Bearer ${API_KEY}` }
  });
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("Proxy draait op http://localhost:3000"));
