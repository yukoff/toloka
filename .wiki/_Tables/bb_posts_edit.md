## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `post_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `user_id` | `integer` | `NULL` |  | - | `INT NOT NULL` |
| `post_edit_count` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `post_edit_time` | `integer` | `NULL` |  | + | `INT DEFAULT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(post_id, user_id)` |
| `INDEX` | `user_id` | `(user_id)` |
