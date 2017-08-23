## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `group_id` | `integer` | `NULL` | + | - | `INT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `group_name` | `string` | `''` |  | - | `VARCHAR(20) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `cat_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `allow_group` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `download_mode` | `smallint` | `1` |  | - | `SMALLINT UNSIGNED DEFAULT 1 NOT NULL` |
| `upload_icon` | `string` | `''` |  | - | `VARCHAR(100) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `max_filesize` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `forum_permissions` | `text` | `NULL` |  | - | `MEDIUMTEXT NOT NULL COLLATE utf8mb4_unicode_ci` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(group_id)` |
