## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `peer_hash` | `string` | `NULL` |  | - | `VARCHAR(32) NOT NULL COLLATE utf8mb4_bin` |
| `topic_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `peer_id` | `string` | `0` |  | - | `VARCHAR(20) DEFAULT '0' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `user_id` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `ip` | `string` | `0` |  | - | `VARCHAR(42) DEFAULT '0' NOT NULL COLLATE utf8mb4_bin` |
| `ipv6` | `string` | `NULL` |  | + | `VARCHAR(42) DEFAULT NULL COLLATE utf8mb4_bin` |
| `port` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `client` | `string` | `Unknown` |  | - | `VARCHAR(51) DEFAULT 'Unknown' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `seeder` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `releaser` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `tor_type` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `uploaded` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `downloaded` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `remain` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `speed_up` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `speed_down` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `up_add` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `down_add` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `update_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `complete_percent` | `bigint` | `0` |  | - | `BIGINT DEFAULT 0 NOT NULL` |
| `complete` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(peer_hash)` |
| `INDEX` | `topic_id` | `(topic_id)` |
| `INDEX` | `user_id` | `(user_id)` |
