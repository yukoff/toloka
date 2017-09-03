## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `privmsgs_text_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `privmsgs_text` | `text` | `NULL` |  | - | `MEDIUMTEXT NOT NULL COLLATE utf8mb4_unicode_ci` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(privmsgs_text_id)` |
