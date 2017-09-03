## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `topic_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `seeder_last_seen` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(topic_id)` |
