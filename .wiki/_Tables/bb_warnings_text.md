## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `warning_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `bbcode_uid` | `string` | `''` |  | - | `VARCHAR(10) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `warning_text` | `text` | `NULL` |  | + | `TEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(warning_id)` |
