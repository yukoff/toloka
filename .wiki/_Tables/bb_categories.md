## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `cat_id` | `integer` | `NULL` | + | - | `INT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `cat_title` | `string` | `''` |  | - | `VARCHAR(100) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `cat_order` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(cat_id)` |
| `INDEX` | `cat_order` | `(cat_order)` |
