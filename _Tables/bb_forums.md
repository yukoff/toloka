## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `forum_id` | `smallint` | `NULL` | + | - | `SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `cat_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `forum_name` | `string` | `''` |  | - | `VARCHAR(150) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `forum_desc` | `text` | `NULL` |  | - | `MEDIUMTEXT NOT NULL COLLATE utf8mb4_unicode_ci` |
| `forum_status` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `forum_order` | `smallint` | `1` |  | - | `SMALLINT UNSIGNED DEFAULT 1 NOT NULL` |
| `forum_posts` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `forum_topics` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `forum_last_post_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `forum_tpl_id` | `smallint` | `0` |  | - | `SMALLINT DEFAULT 0 NOT NULL` |
| `prune_days` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `auth_view` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `auth_read` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `auth_post` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `auth_reply` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `auth_edit` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `auth_delete` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `auth_sticky` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `auth_announce` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `auth_vote` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `auth_pollcreate` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `auth_attachments` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `auth_download` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `allow_reg_tracker` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `allow_porno_topic` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `self_moderated` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `forum_parent` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `show_on_index` | `boolean` | `1` |  | - | `TINYINT(1) DEFAULT '1' NOT NULL` |
| `forum_display_sort` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `forum_display_order` | `smallint` | `0` |  | - | `SMALLINT DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(forum_id)` |
| `INDEX` | `forums_order` | `(forum_order)` |
| `INDEX` | `cat_id` | `(cat_id)` |
| `INDEX` | `forum_last_post_id` | `(forum_last_post_id)` |
| `INDEX` | `forum_parent` | `(forum_parent)` |
| `INDEX` | `auth_view` | `(auth_view)` |
| `INDEX` | `auth_read` | `(auth_read)` |
