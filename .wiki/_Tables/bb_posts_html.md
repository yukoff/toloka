## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `post_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `post_html_time` | `datetime` | `CURRENT_TIMESTAMP` |  | - | `DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL` |
| `post_html` | `text` | `NULL` |  | - | `MEDIUMTEXT NOT NULL COLLATE utf8mb4_unicode_ci` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(post_id)` |
