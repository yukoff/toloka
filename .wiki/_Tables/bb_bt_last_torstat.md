## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `topic_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `user_id` | `integer` | `NULL` |  | - | `INT NOT NULL` |
| `dl_status` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `up_add` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `down_add` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `release_add` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `bonus_add` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `speed_up` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `speed_down` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(topic_id, user_id)` |
