## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `session_id` | `string` | `NULL` |  | - | `CHAR(20) NOT NULL COLLATE utf8mb4_bin` |
| `search_type` | `smallint` | `0` |  | - | `SMALLINT DEFAULT 0 NOT NULL` |
| `search_id` | `string` | `NULL` |  | - | `VARCHAR(12) NOT NULL COLLATE utf8mb4_bin` |
| `search_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `search_settings` | `text` | `NULL` |  | - | `TEXT NOT NULL COLLATE utf8mb4_unicode_ci` |
| `search_array` | `text` | `NULL` |  | - | `TEXT NOT NULL COLLATE utf8mb4_unicode_ci` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(session_id, search_type)` |
| `INDEX` | `search_id` | `(search_id)` |
