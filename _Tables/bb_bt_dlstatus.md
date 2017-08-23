## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `user_id` | `integer` | `NULL` |  | - | `INT NOT NULL` |
| `topic_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `user_status` | `smallint` | `0` |  | - | `SMALLINT DEFAULT 0 NOT NULL` |
| `compl_count` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `last_modified_dlstatus` | `datetime` | `CURRENT_TIMESTAMP` |  | - | `DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(user_id, topic_id)` |
| `INDEX` | `topic_id` | `(topic_id)` |
