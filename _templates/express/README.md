# Express Template

Part of the Super Project Template System.

## Stack

- Node.js + Express 4
- CORS configurable via environment variable
- Optional MongoDB connector (not active by default)

## Setup

```bash
cp .env.example .env     # edit values as needed
npm install
npm run dev              # http://localhost:3000 with auto-reload
# or
npm start                # http://localhost:3000
```

## Endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/health` | Health check — returns status, timestamp, environment |

Add new routes in `src/routes/` and register them in `src/routes/index.js`.

## Configuration

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `3000` | Port to listen on |
| `NODE_ENV` | `development` | Environment name |
| `CORS_ORIGIN` | `*` | Allowed frontend origin |
| `MONGO_URI` | — | MongoDB connection string (optional) |

## MongoDB (opt-in)

The connector module lives at `src/connectors/database.js` but is **not imported by default**.

To activate:

1. Add `MONGO_URI` to your `.env`
2. Install mongoose: `npm install mongoose`
3. Uncomment the `db` lines in `src/app.js`

The server runs without MongoDB. It will only fail on startup if you activate the connector and `MONGO_URI` is missing.

See `_connectors/database.md` for the full connector contract and model conventions.

## CORS

CORS is pre-configured and reads from `CORS_ORIGIN` in `.env`.

- Development: `http://localhost:4200` (Angular default)
- Production: set to your frontend domain

## Adding routes

```js
// src/routes/users.js
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.json({ users: [] }));

module.exports = router;
```

```js
// src/routes/index.js
router.use('/users', require('./users'));
```

## Frontend agnosticism

This API has no knowledge of Angular, React, or any frontend.
It speaks JSON over HTTP. Any client that can make HTTP requests can consume it.
