## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `post_id` | `integer` | `NULL` | + | - | `INT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `topic_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `forum_id` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `poster_id` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `post_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `post_created` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `poster_ip` | `string` | `0` |  | - | `VARCHAR(42) DEFAULT '0' NOT NULL COLLATE utf8mb4_bin` |
| `poster_rg_id` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `attach_rg_sig` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `post_username` | `string` | `''` |  | - | `VARCHAR(25) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `post_edit_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `post_edit_count` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `post_attachment` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `user_post` | `boolean` | `1` |  | - | `TINYINT(1) DEFAULT '1' NOT NULL` |
| `mc_comment` | `text` | `NULL` |  | + | `TEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci` |
| `mc_type` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `mc_user_id` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(post_id)` |
| `INDEX` | `topic_id` | `(topic_id)` |
| `INDEX` | `poster_id` | `(poster_id)` |
| `INDEX` | `post_time` | `(post_time)` |
| `INDEX` | `forum_id_post_time` | `(forum_id, post_time)` |
| `INDEX` | `forum_id` | `(forum_id)` |
| `INDEX` | `topic_time` | `(topic_id, post_time)` |
