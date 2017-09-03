## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `topic_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `user_id` | `integer` | `NULL` |  | - | `INT NOT NULL` |
| `vote_ip` | `string` | `0` |  | - | `VARCHAR(42) DEFAULT '0' NOT NULL COLLATE utf8mb4_bin` |
| `vote_dt` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(topic_id, user_id)` |
