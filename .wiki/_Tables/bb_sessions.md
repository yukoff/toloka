## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `session_id` | `string` | `NULL` |  | - | `CHAR(20) NOT NULL COLLATE utf8mb4_bin` |
| `session_user_id` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `session_start` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `session_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `session_ip` | `string` | `0` |  | - | `VARCHAR(42) DEFAULT '0' NOT NULL COLLATE utf8mb4_bin` |
| `session_logged_in` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `session_admin` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(session_id)` |
