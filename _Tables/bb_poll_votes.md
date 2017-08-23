## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `topic_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `vote_id` | `smallint` | `NULL` |  | - | `SMALLINT UNSIGNED NOT NULL` |
| `vote_text` | `string` | `NULL` |  | - | `VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci` |
| `vote_result` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(topic_id, vote_id)` |
