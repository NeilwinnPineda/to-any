# _mockdb — Mock Database Layer

Part of the Super Project Template System.

---

## Purpose

Provides the same sample domain across multiple storage formats.

Use this for:
- development without a real database
- template layout and UI testing
- API scaffolding and response mocking
- demonstrating relational, document, key-value, and JSON patterns side by side

---

## The sample world

Three users, one team, two projects, four tasks, three products, two orders, three messages.

| Entity | IDs |
|---|---|
| Users | `usr_001`, `usr_002`, `usr_003` |
| Profiles | `prf_001`, `prf_002`, `prf_003` |
| Teams | `tm_001` |
| Projects | `prj_001`, `prj_002` |
| Tasks | `tsk_001` – `tsk_004` |
| Products | `prd_001`, `prd_002`, `prd_003` |
| Orders | `ord_001`, `ord_002` |
| Messages | `msg_001`, `msg_002`, `msg_003` |
| Notifications | `ntf_001`, `ntf_002`, `ntf_003` |
| Activity Logs | `log_001` – `log_005` |
| Roles | `role_admin`, `role_member`, `role_viewer` |
| Permissions | `perm_read_projects`, `perm_write_projects`, `perm_delete_projects`, `perm_manage_users` |

IDs are consistent across **all formats** — SQL, MongoDB, Firestore, Redis, and JSON.

---

## Format guide

| Folder | Format | Use for |
|---|---|---|
| `schema/` | JSON | Entity definitions and relationship map |
| `seed/` | JSON | Raw seed data per domain |
| `sql/` | SQL | Relational DBs (SQLite, PostgreSQL, MySQL) |
| `nosql/` | JSON + MD | MongoDB and Firestore |
| `redis/` | TXT + JSON | Redis key-value, cache, sessions |
| `json/` | JSON | Frontend mocks, json-server, API responses |

---

## Quick start

### SQL (SQLite)
```bash
sqlite3 mock.db < _mockdb/sql/schema.sql
sqlite3 mock.db < _mockdb/sql/seed.sql
sqlite3 mock.db < _mockdb/sql/queries.sql
```

### MongoDB
Import `nosql/mongodb.collections.json` via mongoimport or seed script.

### Redis
```bash
redis-cli < _mockdb/redis/redis-seed.txt
```

### JSON Server (frontend mock API)
```bash
npx json-server _mockdb/json/db.json --port 3000
```

---

## Core rule

Mock data must describe the same sample world across all formats.

SQL, NoSQL, Redis, and JSON versions represent equivalent users, projects, products, orders, messages, settings, logs, and permissions. Do not create unrelated data per format unless the storage model specifically requires it.
