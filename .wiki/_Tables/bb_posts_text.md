## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `post_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `post_text` | `text` | `NULL` |  | - | `MEDIUMTEXT NOT NULL COLLATE utf8mb4_unicode_ci` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(post_id)` |
