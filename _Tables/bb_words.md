## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `word_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `word` | `string` | `''` |  | - | `CHAR(100) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `replacement` | `string` | `''` |  | - | `CHAR(100) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(word_id)` |
