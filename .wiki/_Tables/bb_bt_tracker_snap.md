## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `topic_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `seeders` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `leechers` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `speed_up` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `speed_down` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(topic_id)` |
