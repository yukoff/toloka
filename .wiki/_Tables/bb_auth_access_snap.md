## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `user_id` | `integer` | `NULL` |  | - | `INT NOT NULL` |
| `forum_id` | `smallint` | `NULL` |  | - | `SMALLINT UNSIGNED NOT NULL` |
| `forum_perm` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(user_id, forum_id)` |
