import fetch from 'node-fetch';

export default async function handler(req, res) {
    const clubTag = req.query.tag || '2RY829PP0';
    const url = `https://brawlify.com/stats/club/${clubTag}`;

    try {
        const response = await fetch(url);
        const html = await response.text();

        // Stuur de HTML terug naar frontend
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(html);
    } catch (err) {
        res.status(500).json({ error: 'Kan clubpagina niet ophalen', details: err.toString() });
    }
}
