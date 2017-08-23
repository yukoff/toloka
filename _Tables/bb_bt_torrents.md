## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `info_hash` | `binary` | `NULL` |  | - | `VARBINARY(20) NOT NULL` |
| `post_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `poster_id` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `topic_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `forum_id` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `attach_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `size` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `reg_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `call_seed_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `complete_count` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `seeder_last_seen` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `tor_status` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `checked_user_id` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `checked_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `tor_type` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `speed_up` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `speed_down` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `topic_check_orig_fid` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `topic_check_dup_tid` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(info_hash)` |
| `UNIQUE INDEX` | `post_id` | `(post_id)` |
| `UNIQUE INDEX` | `topic_id` | `(topic_id)` |
| `UNIQUE INDEX` | `attach_id` | `(attach_id)` |
| `INDEX` | `reg_time` | `(reg_time)` |
| `INDEX` | `forum_id` | `(forum_id)` |
| `INDEX` | `poster_id` | `(poster_id)` |
| `INDEX` | `size` | `(size)` |
| `INDEX` | `checked_user_id` | `(checked_user_id)` |
