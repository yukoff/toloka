## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `rank_id` | `smallint` | `NULL` | + | - | `SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `rank_title` | `string` | `''` |  | - | `VARCHAR(50) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `rank_image` | `string` | `''` |  | - | `VARCHAR(255) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `rank_style` | `string` | `''` |  | - | `VARCHAR(255) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `rank_group` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(rank_id)` |
