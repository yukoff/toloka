## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `ban_id` | `integer` | `NULL` | + | - | `INT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `ban_userid` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `ban_ip` | `string` | `0` |  | - | `VARCHAR(42) DEFAULT '0' NOT NULL COLLATE utf8mb4_bin` |
| `ban_email` | `string` | `''` |  | - | `VARCHAR(255) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(ban_id)` |
| `INDEX` | `ban_ip_user_id` | `(ban_ip, ban_userid)` |
