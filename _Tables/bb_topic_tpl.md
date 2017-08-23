## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `tpl_id` | `smallint` | `NULL` | + | - | `SMALLINT AUTO_INCREMENT NOT NULL` |
| `tpl_name` | `string` | `''` |  | - | `VARCHAR(60) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `tpl_src_form` | `text` | `NULL` |  | - | `MEDIUMTEXT NOT NULL COLLATE utf8mb4_unicode_ci` |
| `tpl_src_title` | `text` | `NULL` |  | - | `MEDIUMTEXT NOT NULL COLLATE utf8mb4_unicode_ci` |
| `tpl_src_msg` | `text` | `NULL` |  | - | `MEDIUMTEXT NOT NULL COLLATE utf8mb4_unicode_ci` |
| `tpl_comment` | `text` | `NULL` |  | - | `MEDIUMTEXT NOT NULL COLLATE utf8mb4_unicode_ci` |
| `tpl_rules_post_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `tpl_last_edit_tm` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `tpl_last_edit_by` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(tpl_id)` |
| `UNIQUE INDEX` | `tpl_name` | `(tpl_name)` |
