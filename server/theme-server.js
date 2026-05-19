const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT       = 3001;
const STATE_FILE = path.join(__dirname, 'theme.json');

const DEFAULT_STATE = {
  core: {
    mode: 'dark',
    colors: { base: '#0a1628', surface: '#00d4aa', accent: '#00d4aa', tint: '#ff6b6b' },
  },
  fonts: { primary: 'Inter', secondary: 'Merriweather' },
};

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function readState() {
  try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); }
  catch { return DEFAULT_STATE; }
}

function writeState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

http.createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS);
    res.end();
    return;
  }

  if (req.url !== '/theme') {
    res.writeHead(404, CORS);
    res.end(JSON.stringify({ error: 'Not found' }));
    return;
  }

  if (req.method === 'GET') {
    res.writeHead(200, { ...CORS, 'Content-Type': 'application/json' });
    res.end(JSON.stringify(readState()));
    return;
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        writeState(JSON.parse(body));
        res.writeHead(200, { ...CORS, 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch {
        res.writeHead(400, CORS);
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
    return;
  }

  res.writeHead(405, CORS);
  res.end(JSON.stringify({ error: 'Method not allowed' }));
}).listen(PORT, () => console.log(`Theme server → http://localhost:${PORT}/theme`));
