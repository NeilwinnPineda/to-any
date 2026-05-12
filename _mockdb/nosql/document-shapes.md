# NoSQL Document Shapes

## MongoDB vs Firestore decisions

### Embedding vs referencing

| Entity | MongoDB | Firestore | Reason |
|---|---|---|---|
| `profile` | Embedded in `user` document | Separate top-level collection (keyed by userId) | Firestore charges per read — keeping profiles separate avoids loading profile data on every auth check |
| `settings` | Embedded in `user` document | Subcollection under `users/{id}/settings/` | Settings change infrequently; Firestore subcollection avoids polluting the user document |
| `tasks` | Embedded array inside `project` | Subcollection under `projects/{id}/tasks/` | MongoDB: tasks are almost always read with their project. Firestore: subcollections allow independent querying without loading the full project |
| `notifications` | Top-level collection | Subcollection under `users/{id}/notifications/` | Firestore: notifications are always queried per-user, so user-scoped subcollection is natural |
| `roles/permissions` | Embedded arrays of IDs in `user` and `role` | Not modelled as subcollections — kept flat | RBAC data changes infrequently; embedding reduces read cost |

---

## MongoDB — key decisions

- Tasks are embedded inside projects because they are always fetched together
- Profile and settings are embedded in the user document (single read = full user)
- Orders embed a product snapshot (`{ id, name, price }`) to avoid joins at query time
- Roles embed permission IDs; permissions are a separate collection for reference
- Activity logs are a separate collection — high write volume, append-only, queried independently

## Firestore — key decisions

- Every entity that needs independent querying gets its own top-level collection
- User-scoped data (notifications, settings) lives in subcollections to enable per-user reads without collection group queries
- Tasks live in `projects/{id}/tasks/` — query with `collectionGroup('tasks')` for cross-project views
- No embedded arrays for relational data — Firestore arrays cannot be queried efficiently
- Orders reference productId, not embedded product data (Firestore reads are cheap per document)

---

## ID consistency

All document IDs match across formats:
- `usr_001`, `usr_002`, `usr_003`
- `prj_001`, `prj_002`
- `tsk_001` through `tsk_004`
- `prd_001` through `prd_003`
- `ord_001`, `ord_002`
- `msg_001` through `msg_003`

This makes it straightforward to cross-reference between the SQL seed, MongoDB collections, and Firestore collections during development and testing.
