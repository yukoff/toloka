## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `group_id` | `integer` | `NULL` | + | - | `INT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `avatar_ext_id` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `group_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `mod_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `group_type` | `boolean` | `1` |  | - | `TINYINT(1) DEFAULT '1' NOT NULL` |
| `release_group` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `group_name` | `string` | `''` |  | - | `VARCHAR(40) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `group_description` | `text` | `NULL` |  | - | `TEXT NOT NULL COLLATE utf8mb4_unicode_ci` |
| `group_signature` | `text` | `NULL` |  | - | `TEXT NOT NULL COLLATE utf8mb4_unicode_ci` |
| `group_moderator` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `group_single_user` | `boolean` | `1` |  | - | `TINYINT(1) DEFAULT '1' NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(group_id)` |
| `INDEX` | `group_single_user` | `(group_single_user)` |
| `INDEX` | `group_name` | `(group_name)` |
