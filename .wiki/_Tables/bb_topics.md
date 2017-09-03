## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `topic_id` | `integer` | `NULL` | + | - | `INT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `forum_id` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `topic_title` | `string` | `''` |  | - | `VARCHAR(250) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `topic_poster` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `topic_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `topic_views` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `topic_replies` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `topic_status` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `topic_vote` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `topic_type` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `topic_first_post_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `topic_last_post_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `topic_moved_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `topic_attachment` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `topic_dl_type` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `topic_last_post_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `topic_show_first_post` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(topic_id)` |
| `UNIQUE INDEX` | `topic_last_post_id` | `(topic_last_post_id)` |
| `INDEX` | `forum_id` | `(forum_id)` |
| `INDEX` | `topic_last_post_time` | `(topic_last_post_time)` |
| `INDEX` | `topic_type` | `(topic_type)` |
| `INDEX` | `topic_status` | `(topic_status)` |
| `INDEX` | `topic_moved_id` | `(topic_moved_id)` |
| `INDEX` | `topic_poster` | `(topic_poster)` |
| `FULLTEXT INDEX` | `topic_title` | `(topic_title)` |
