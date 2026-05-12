-- =============================================================
-- MOCKDB — SQL SEED DATA
-- Same sample world as seed/*.json — IDs match across all formats.
-- =============================================================

-- Roles
INSERT INTO roles (id, name, description) VALUES
  ('role_admin',  'admin',  'Full access to all resources'),
  ('role_member', 'member', 'Standard project access'),
  ('role_viewer', 'viewer', 'Read-only access');

-- Permissions
INSERT INTO permissions (id, name, resource, action) VALUES
  ('perm_read_projects',   'read:projects',   'projects', 'read'),
  ('perm_write_projects',  'write:projects',  'projects', 'write'),
  ('perm_delete_projects', 'delete:projects', 'projects', 'delete'),
  ('perm_manage_users',    'manage:users',    'users',    'manage');

-- Role → Permission
INSERT INTO role_permissions (role_id, permission_id) VALUES
  ('role_admin',  'perm_read_projects'),
  ('role_admin',  'perm_write_projects'),
  ('role_admin',  'perm_delete_projects'),
  ('role_admin',  'perm_manage_users'),
  ('role_member', 'perm_read_projects'),
  ('role_member', 'perm_write_projects'),
  ('role_viewer', 'perm_read_projects');

-- Teams
INSERT INTO teams (id, name, owner_id, created_at) VALUES
  ('tm_001', 'Core Team', 'usr_001', '2025-01-01T00:00:00Z');

-- Users
INSERT INTO users (id, name, email, role, team_id, created_at) VALUES
  ('usr_001', 'Sam Rivera', 'admin@example.com', 'admin',  'tm_001', '2025-01-01T00:00:00Z'),
  ('usr_002', 'Jamie Lee',  'jamie@example.com', 'member', 'tm_001', '2025-01-03T09:00:00Z'),
  ('usr_003', 'Alex Chen',  'alex@example.com',  'member', 'tm_001', '2025-01-05T11:30:00Z');

-- Team members
INSERT INTO team_members (team_id, user_id) VALUES
  ('tm_001', 'usr_001'),
  ('tm_001', 'usr_002'),
  ('tm_001', 'usr_003');

-- User roles
INSERT INTO user_roles (user_id, role_id) VALUES
  ('usr_001', 'role_admin'),
  ('usr_002', 'role_member'),
  ('usr_003', 'role_member');

-- Profiles
INSERT INTO profiles (id, user_id, title, bio, location, avatar) VALUES
  ('prf_001', 'usr_001', 'Project Lead', 'Placeholder bio for layout testing.', 'Manila',    '/assets/avatars/usr_001.jpg'),
  ('prf_002', 'usr_002', 'Designer',     'Placeholder bio for layout testing.', 'Remote',    '/assets/avatars/usr_002.jpg'),
  ('prf_003', 'usr_003', 'Developer',    'Placeholder bio for layout testing.', 'Singapore', '/assets/avatars/usr_003.jpg');

-- Projects
INSERT INTO projects (id, name, owner_id, team_id, status, created_at) VALUES
  ('prj_001', 'Demo Project',   'usr_001', 'tm_001', 'active',      '2025-01-10T08:00:00Z'),
  ('prj_002', 'Marketing Site', 'usr_002', 'tm_001', 'in-progress', '2025-01-15T10:00:00Z');

-- Tasks
INSERT INTO tasks (id, project_id, assignee_id, title, status, due_date, created_at) VALUES
  ('tsk_001', 'prj_001', 'usr_001', 'Set up base template',  'done',        '2025-01-12T00:00:00Z', '2025-01-10T08:30:00Z'),
  ('tsk_002', 'prj_001', 'usr_002', 'Configure supercss',    'in-progress', '2025-01-20T00:00:00Z', '2025-01-10T09:00:00Z'),
  ('tsk_003', 'prj_002', 'usr_003', 'Write landing copy',    'todo',        '2025-01-30T00:00:00Z', '2025-01-15T10:30:00Z'),
  ('tsk_004', 'prj_002', 'usr_002', 'Design mockups',        'todo',        '2025-01-28T00:00:00Z', '2025-01-15T11:00:00Z');

-- Products
INSERT INTO products (id, name, description, price, currency, category, in_stock) VALUES
  ('prd_001', 'Starter Kit',     'Everything you need to launch your first project quickly.',          49.00,  'USD', 'Templates', 1),
  ('prd_002', 'Pro Bundle',      'Advanced templates, premium themes, and priority support.',          149.00, 'USD', 'Templates', 1),
  ('prd_003', 'Enterprise Plan', 'Unlimited projects, custom connectors, and dedicated onboarding.',   499.00, 'USD', 'Plans',     1);

-- Orders
INSERT INTO orders (id, user_id, product_id, amount, currency, status, created_at) VALUES
  ('ord_001', 'usr_002', 'prd_001', 49.00,  'USD', 'paid', '2025-01-20T14:00:00Z'),
  ('ord_002', 'usr_003', 'prd_002', 149.00, 'USD', 'paid', '2025-01-22T16:30:00Z');

-- Messages
INSERT INTO messages (id, from_user_id, to_user_id, body, read_at, created_at) VALUES
  ('msg_001', 'usr_001', 'usr_002', 'Welcome to the team. Let me know if you need anything.', '2025-01-03T09:30:00Z', '2025-01-03T09:00:00Z'),
  ('msg_002', 'usr_002', 'usr_001', 'Thanks! Ready to start. Where should I begin?',         '2025-01-03T10:00:00Z', '2025-01-03T09:45:00Z'),
  ('msg_003', 'usr_001', 'usr_003', 'Your first task is tsk_002 — check the project board.',  NULL,                  '2025-01-05T12:00:00Z');

-- Notifications
INSERT INTO notifications (id, user_id, type, body, read, created_at) VALUES
  ('ntf_001', 'usr_001', 'project_created', 'Demo Project was created successfully.',  1, '2025-01-10T08:00:01Z'),
  ('ntf_002', 'usr_002', 'project_joined',  'You have been added to Demo Project.',    1, '2025-01-10T08:01:00Z'),
  ('ntf_003', 'usr_003', 'task_assigned',   'You have been assigned to tsk_002.',      0, '2025-01-10T09:00:01Z');

-- Settings
INSERT INTO settings (id, user_id, theme, language, notifications, updated_at) VALUES
  ('stg_001', 'usr_001', 'dark',  'en', 1, '2025-01-01T00:00:00Z'),
  ('stg_002', 'usr_002', 'dark',  'en', 1, '2025-01-03T09:00:00Z'),
  ('stg_003', 'usr_003', 'light', 'en', 0, '2025-01-05T11:30:00Z');

-- Activity logs
INSERT INTO activity_logs (id, user_id, action, target_type, target_id, created_at) VALUES
  ('log_001', 'usr_001', 'created_project', 'project', 'prj_001', '2025-01-10T08:00:00Z'),
  ('log_002', 'usr_002', 'joined_project',  'project', 'prj_001', '2025-01-10T08:01:00Z'),
  ('log_003', 'usr_001', 'created_task',    'task',    'tsk_001', '2025-01-10T08:30:00Z'),
  ('log_004', 'usr_002', 'created_project', 'project', 'prj_002', '2025-01-15T10:00:00Z'),
  ('log_005', 'usr_002', 'placed_order',    'order',   'ord_001', '2025-01-20T14:00:00Z');
