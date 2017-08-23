## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `topic_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `user_id` | `integer` | `NULL` |  | - | `INT NOT NULL` |
| `notify_status` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(topic_id, user_id)` |
| `INDEX` | `user_id` | `(user_id)` |
| `INDEX` | `notify_status` | `(notify_status)` |
