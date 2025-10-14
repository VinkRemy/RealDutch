import express from "express";
import fetch from "node-fetch";
const app = express();

const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImVkYTg3NjVhLTE2MmQtNGZhNi1iODU1LWJkOWQwMzYxMGE1MyIsImlhdCI6MTc2MDQ3NTMxMiwic3ViIjoiZGV2ZWxvcGVyLzI4ODk3YjRiLTllNDUtNDQ3ZC1iYzkzLWE2MzUwMWMyNzEwMSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMjEyLjEyNy4yMDkuNjAiXSwidHlwZSI6ImNsaWVudCJ9XX0.lYuyJQ9KZuZftTfHb3uEkS7z5EGoAVzRXEr2eC4A7kqRvsmbLc21U0FSHQkRg8uI2eqXT5PG8zb_ZRq2ftW9Bg"; // blijf geheim houden!

app.get("/api/club/:tag", async (req, res) => {
  const tag = encodeURIComponent(req.params.tag);
  const response = await fetch(`https://api.brawlstars.com/v1/clubs/${tag}/members`, {
    headers: { Authorization: `Bearer ${API_KEY}` }
  });
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("Proxy draait op http://localhost:3000"));
