-- =============================================================
-- MOCKDB — SQL SCHEMA
-- Relational structure for the super-project sample world.
-- Compatible with SQLite, PostgreSQL, and MySQL (with minor tweaks).
-- =============================================================

-- Roles
CREATE TABLE roles (
  id          TEXT PRIMARY KEY,
  name        TEXT NOT NULL UNIQUE,
  description TEXT
);

-- Permissions
CREATE TABLE permissions (
  id       TEXT PRIMARY KEY,
  name     TEXT NOT NULL UNIQUE,
  resource TEXT NOT NULL,
  action   TEXT NOT NULL
);

-- Role → Permission junction
CREATE TABLE role_permissions (
  role_id       TEXT NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  permission_id TEXT NOT NULL REFERENCES permissions(id) ON DELETE CASCADE,
  PRIMARY KEY (role_id, permission_id)
);

-- Teams
CREATE TABLE teams (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  owner_id   TEXT NOT NULL,
  created_at TEXT NOT NULL
);

-- Users
CREATE TABLE users (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  email      TEXT NOT NULL UNIQUE,
  role       TEXT NOT NULL DEFAULT 'member',
  team_id    TEXT REFERENCES teams(id),
  created_at TEXT NOT NULL
);

-- Team → User junction (for multi-team support)
CREATE TABLE team_members (
  team_id TEXT NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  PRIMARY KEY (team_id, user_id)
);

-- User → Role junction
CREATE TABLE user_roles (
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role_id TEXT NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, role_id)
);

-- Profiles (one per user)
CREATE TABLE profiles (
  id       TEXT PRIMARY KEY,
  user_id  TEXT NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  title    TEXT,
  bio      TEXT,
  location TEXT,
  avatar   TEXT
);

-- Projects
CREATE TABLE projects (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  owner_id   TEXT NOT NULL REFERENCES users(id),
  team_id    TEXT REFERENCES teams(id),
  status     TEXT NOT NULL DEFAULT 'active',
  created_at TEXT NOT NULL
);

-- Tasks
CREATE TABLE tasks (
  id          TEXT PRIMARY KEY,
  project_id  TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  assignee_id TEXT REFERENCES users(id),
  title       TEXT NOT NULL,
  status      TEXT NOT NULL DEFAULT 'todo',
  due_date    TEXT,
  created_at  TEXT NOT NULL
);

-- Products
CREATE TABLE products (
  id          TEXT PRIMARY KEY,
  name        TEXT NOT NULL,
  description TEXT,
  price       REAL NOT NULL,
  currency    TEXT NOT NULL DEFAULT 'USD',
  category    TEXT,
  in_stock    INTEGER NOT NULL DEFAULT 1
);

-- Orders
CREATE TABLE orders (
  id         TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL REFERENCES users(id),
  product_id TEXT NOT NULL REFERENCES products(id),
  amount     REAL NOT NULL,
  currency   TEXT NOT NULL DEFAULT 'USD',
  status     TEXT NOT NULL DEFAULT 'pending',
  created_at TEXT NOT NULL
);

-- Messages
CREATE TABLE messages (
  id           TEXT PRIMARY KEY,
  from_user_id TEXT NOT NULL REFERENCES users(id),
  to_user_id   TEXT NOT NULL REFERENCES users(id),
  body         TEXT NOT NULL,
  read_at      TEXT,
  created_at   TEXT NOT NULL
);

-- Notifications
CREATE TABLE notifications (
  id         TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type       TEXT NOT NULL,
  body       TEXT NOT NULL,
  read       INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL
);

-- Settings (one per user)
CREATE TABLE settings (
  id            TEXT PRIMARY KEY,
  user_id       TEXT UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  theme         TEXT NOT NULL DEFAULT 'dark',
  language      TEXT NOT NULL DEFAULT 'en',
  notifications INTEGER NOT NULL DEFAULT 1,
  updated_at    TEXT NOT NULL
);

-- Activity logs
CREATE TABLE activity_logs (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id),
  action      TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id   TEXT NOT NULL,
  created_at  TEXT NOT NULL
);
