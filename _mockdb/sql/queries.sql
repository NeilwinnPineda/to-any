-- =============================================================
-- MOCKDB — COMMON QUERIES
-- Reference patterns for working with the mock schema.
-- =============================================================

-- ---- Users ----

-- Get all users with their profiles
SELECT u.id, u.name, u.email, u.role, p.title, p.location
FROM users u
LEFT JOIN profiles p ON p.user_id = u.id;

-- Get a user with their roles and permissions
SELECT u.name, r.name AS role, p.name AS permission
FROM users u
JOIN user_roles ur ON ur.user_id = u.id
JOIN roles r ON r.id = ur.role_id
JOIN role_permissions rp ON rp.role_id = r.id
JOIN permissions p ON p.id = rp.permission_id
WHERE u.id = 'usr_001';

-- ---- Projects ----

-- Get all projects with owner name and task count
SELECT
  pr.id,
  pr.name,
  pr.status,
  u.name AS owner,
  COUNT(t.id) AS task_count
FROM projects pr
JOIN users u ON u.id = pr.owner_id
LEFT JOIN tasks t ON t.project_id = pr.id
GROUP BY pr.id;

-- Get all tasks for a project with assignee
SELECT t.id, t.title, t.status, t.due_date, u.name AS assignee
FROM tasks t
LEFT JOIN users u ON u.id = t.assignee_id
WHERE t.project_id = 'prj_001'
ORDER BY t.created_at;

-- Get incomplete tasks assigned to a user
SELECT t.id, t.title, t.status, pr.name AS project
FROM tasks t
JOIN projects pr ON pr.id = t.project_id
WHERE t.assignee_id = 'usr_002'
  AND t.status != 'done';

-- ---- Orders ----

-- Orders with user and product info
SELECT
  o.id,
  u.name AS customer,
  p.name AS product,
  o.amount,
  o.currency,
  o.status,
  o.created_at
FROM orders o
JOIN users u ON u.id = o.user_id
JOIN products p ON p.id = o.product_id
ORDER BY o.created_at DESC;

-- Revenue by product
SELECT
  p.name,
  COUNT(o.id) AS order_count,
  SUM(o.amount) AS total_revenue
FROM orders o
JOIN products p ON p.id = o.product_id
WHERE o.status = 'paid'
GROUP BY p.id
ORDER BY total_revenue DESC;

-- ---- Messages ----

-- Conversation between two users
SELECT
  m.id,
  sender.name AS from_user,
  recipient.name AS to_user,
  m.body,
  m.created_at,
  m.read_at
FROM messages m
JOIN users sender    ON sender.id    = m.from_user_id
JOIN users recipient ON recipient.id = m.to_user_id
WHERE (m.from_user_id = 'usr_001' AND m.to_user_id = 'usr_002')
   OR (m.from_user_id = 'usr_002' AND m.to_user_id = 'usr_001')
ORDER BY m.created_at;

-- Unread messages for a user
SELECT m.id, sender.name AS from_user, m.body, m.created_at
FROM messages m
JOIN users sender ON sender.id = m.from_user_id
WHERE m.to_user_id = 'usr_003'
  AND m.read_at IS NULL;

-- ---- Notifications ----

-- Unread notifications for a user
SELECT id, type, body, created_at
FROM notifications
WHERE user_id = 'usr_003'
  AND read = 0
ORDER BY created_at DESC;

-- ---- Activity ----

-- Recent activity across the system
SELECT
  a.id,
  u.name AS actor,
  a.action,
  a.target_type,
  a.target_id,
  a.created_at
FROM activity_logs a
JOIN users u ON u.id = a.user_id
ORDER BY a.created_at DESC
LIMIT 20;
