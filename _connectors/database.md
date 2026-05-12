# Connector: Database (MongoDB)

Part of the Super Project connector system.

Connectors are reusable contracts — not implementations.
Any template that needs a database should follow this contract rather than invent its own.

---

## Environment variables

| Variable | Required | Example | Purpose |
|---|---|---|---|
| `MONGO_URI` | Yes | `mongodb://localhost:27017/myapp` | Full MongoDB connection string |

Always read from `process.env.MONGO_URI`. Never hardcode a URI.

---

## Standard connector module interface

Any template implementing this connector must export these three functions:

```js
connect()     // async — establishes connection, idempotent (safe to call multiple times)
disconnect()  // async — gracefully closes connection
getStatus()   // sync  — returns { connected: boolean, readyState: number }
```

Reference implementation: `_templates/express/src/connectors/database.js`

---

## Activation pattern

The connector is **never imported by default**. To activate in a project:

1. Ensure `mongoose` is installed: `npm install mongoose`
2. Add `MONGO_URI` to `.env`
3. Import and call `connect()` at app startup (before routes are used)

```js
const db = require('./connectors/database');

db.connect().catch((err) => {
  console.error('[db] connection failed:', err.message);
  process.exit(1);
});
```

---

## Model conventions

- One model per file in `src/models/`
- File name matches model name in kebab-case: `user.model.js`, `product.model.js`
- Always define a schema explicitly — avoid schemaless documents
- Use `timestamps: true` on all schemas
- Export the model as the default export

```js
// src/models/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name:  { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
```

---

## Connection string formats

| Scenario | URI format |
|---|---|
| Local dev | `mongodb://localhost:27017/myapp` |
| Local with auth | `mongodb://user:pass@localhost:27017/myapp` |
| Atlas (cloud) | `mongodb+srv://user:pass@cluster.mongodb.net/myapp` |
| Docker | `mongodb://mongo:27017/myapp` |

---

## Notes

- This connector uses Mongoose. Raw MongoDB driver (`mongodb`) is also valid but not the default.
- Do not share a Mongoose connection across processes — each process maintains its own.
- In serverless environments, connection pooling behaves differently — revisit this pattern if deploying to Lambda/Cloud Functions.
