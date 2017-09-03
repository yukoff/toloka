## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `smilies_id` | `smallint` | `NULL` | + | - | `SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `code` | `string` | `''` |  | - | `VARCHAR(50) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `smile_url` | `string` | `''` |  | - | `VARCHAR(100) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `emoticon` | `string` | `''` |  | - | `VARCHAR(75) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(smilies_id)` |
