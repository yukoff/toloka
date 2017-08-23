## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `rebuild_session_id` | `integer` | `NULL` | + | - | `INT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `start_post_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `end_post_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `start_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `end_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `last_cycle_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `session_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `session_posts` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `session_cycles` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `search_size` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `rebuild_session_status` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(rebuild_session_id)` |
