## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `id` | `bigint` | `NULL` | + | - | `BIGINT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `log_type_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `log_user_id` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `log_user_ip` | `string` | `0` |  | - | `VARCHAR(42) DEFAULT '0' NOT NULL COLLATE utf8mb4_bin` |
| `log_forum_id` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `log_forum_id_new` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `log_topic_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `log_topic_id_new` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `log_topic_title` | `string` | `''` |  | - | `VARCHAR(250) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `log_topic_title_new` | `string` | `''` |  | - | `VARCHAR(250) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `log_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `log_msg` | `text` | `NULL` |  | - | `TEXT NOT NULL COLLATE utf8mb4_unicode_ci` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(id)` |
| `INDEX` | `log_time` | `(log_time)` |
| `FULLTEXT INDEX` | `log_topic_title` | `(log_topic_title)` |
