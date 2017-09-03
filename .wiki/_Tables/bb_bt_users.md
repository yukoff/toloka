## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `user_id` | `integer` | `NULL` |  | - | `INT NOT NULL` |
| `auth_key` | `string` | `''` |  | - | `CHAR(10) DEFAULT '' NOT NULL COLLATE utf8mb4_bin` |
| `u_up_total` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `u_down_total` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `u_up_release` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `u_up_bonus` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `up_today` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `down_today` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `up_release_today` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `up_bonus_today` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `points_today` | `float` | `0.00` |  | - | `DOUBLE PRECISION DEFAULT '0.00' NOT NULL` |
| `up_yesterday` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `down_yesterday` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `up_release_yesterday` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `up_bonus_yesterday` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |
| `points_yesterday` | `float` | `0.00` |  | - | `DOUBLE PRECISION DEFAULT '0.00' NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(user_id)` |
| `UNIQUE INDEX` | `auth_key` | `(auth_key)` |
| `INDEX` | `user_id_down` | `(user_id, u_down_total)` |
