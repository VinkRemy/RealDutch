export default async function handler(req, res) {
  const { tag } = req.query;
  const response = await fetch(`https://api.brawlstars.com/v1/clubs/${encodeURIComponent(tag)}/members`, {
    headers: {
      Authorization: `Bearer ${process.env.BRAWL_API_KEY}`
    }
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
