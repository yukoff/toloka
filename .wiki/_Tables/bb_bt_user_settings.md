## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `user_id` | `integer` | `NULL` |  | - | `INT NOT NULL` |
| `tor_search_set` | `text` | `NULL` |  | - | `TEXT NOT NULL COLLATE utf8mb4_unicode_ci` |
| `last_modified` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(user_id)` |
