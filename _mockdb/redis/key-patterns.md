# Redis Key Patterns

## Naming convention

```
{type}:{id}                   → single entity (string/hash)
{type}s                       → index of all entity IDs (set)
{type}:{id}:{relation}        → related IDs for an entity (set or list)
cache:{resource}              → cached query result (string, short TTL)
session:{sessionId}           → user session (hash, with EXPIRE)
unread:{userId}               → unread message count (string/integer)
unread_notifications:{userId} → unread notification count (string/integer)
rate:{userId}:{scope}         → rate limit counter (string, with EXPIRE)
conversation:{uid1}:{uid2}    → ordered message list between two users (list)
```

---

## Patterns in use

### Entity storage

| Pattern | Type | Example | Purpose |
|---|---|---|---|
| `user:{id}` | String (JSON) | `user:usr_001` | Full user object, fast lookup by ID |
| `profile:{id}` | Hash | `profile:usr_001` | Individual fields, partial reads with HGET |
| `project:{id}` | String (JSON) | `project:prj_001` | Full project object |
| `task:{id}` | String (JSON) | `task:tsk_001` | Full task object |
| `product:{id}` | String (JSON) | `product:prd_001` | Full product object |
| `order:{id}` | String (JSON) | `order:ord_001` | Full order object |
| `team:{id}` | String (JSON) | `team:tm_001` | Full team object |

### Index sets

| Pattern | Type | Example | Purpose |
|---|---|---|---|
| `users` | Set | `SMEMBERS users` | All user IDs |
| `projects` | Set | `SMEMBERS projects` | All project IDs |
| `products` | Set | `SMEMBERS products` | All product IDs |
| `user:{id}:projects` | Set | `SMEMBERS user:usr_001:projects` | Projects a user owns or belongs to |
| `user:{id}:tasks` | Set | `SMEMBERS user:usr_002:tasks` | Tasks assigned to a user |
| `user:{id}:orders` | Set | `SMEMBERS user:usr_002:orders` | Orders placed by a user |
| `project:{id}:tasks` | Set | `SMEMBERS project:prj_001:tasks` | Task IDs for a project |
| `team:{id}:members` | Set | `SMEMBERS team:tm_001:members` | User IDs in a team |
| `team:{id}:projects` | Set | `SMEMBERS team:tm_001:projects` | Project IDs for a team |

### Sessions

| Pattern | Type | TTL | Purpose |
|---|---|---|---|
| `session:{id}` | Hash | 86400s (24h) | Active session — userId, role, token, expiresAt |

### Cache

| Pattern | Type | TTL | Purpose |
|---|---|---|---|
| `cache:products` | String (JSON) | 300s (5min) | Cached product list |
| `cache:user:{id}:profile` | String (JSON) | 600s (10min) | Cached user+profile composite |

### Real-time / counters

| Pattern | Type | TTL | Purpose |
|---|---|---|---|
| `unread:{userId}` | String (int) | none | Unread message count |
| `unread_notifications:{userId}` | String (int) | none | Unread notification count |
| `rate:{userId}:{scope}` | String (int) | 60s | Rate limit counter per user per scope |

### Conversations

| Pattern | Type | Purpose |
|---|---|---|
| `conversation:{uid1}:{uid2}` | List | Ordered messages between two users. Always sort UIDs alphabetically to avoid duplicate keys. |

---

## Notes

- Use `JSON.stringify` / `JSON.parse` for string-stored entities — no raw Redis JSON module assumed
- Always set EXPIRE on session and cache keys
- Use HSET/HGET for profiles when partial field reads are common (avoids deserializing the full object)
- Conversation keys: sort user IDs alphabetically (`usr_001:usr_002`, never `usr_002:usr_001`) to avoid key duplication
- Rate limiting: increment with `INCR`, check before serving, reset on EXPIRE
