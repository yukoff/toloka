## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `quota_limit_id` | `integer` | `NULL` | + | - | `INT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `quota_desc` | `string` | `''` |  | - | `VARCHAR(20) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `quota_limit` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(quota_limit_id)` |
