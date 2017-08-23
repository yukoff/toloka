## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `user_id` | `integer` | `NULL` | + | - | `INT AUTO_INCREMENT NOT NULL` |
| `user_active` | `boolean` | `1` |  | - | `TINYINT(1) DEFAULT '1' NOT NULL` |
| `username` | `string` | `NULL` |  | - | `VARCHAR(25) NOT NULL COLLATE utf8mb4_unicode_ci` |
| `user_password` | `string` | `NULL` |  | - | `VARCHAR(60) NOT NULL COLLATE utf8mb4_bin` |
| `user_session_time` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `user_lastvisit` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `user_last_ip` | `string` | `0` |  | - | `VARCHAR(42) DEFAULT '0' NOT NULL COLLATE utf8mb4_bin` |
| `user_regdate` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `user_reg_ip` | `string` | `0` |  | - | `VARCHAR(42) DEFAULT '0' NOT NULL COLLATE utf8mb4_bin` |
| `user_level` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `user_posts` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `user_timezone` | `decimal` | `0.00` |  | - | `NUMERIC(5, 2) DEFAULT '0.00' NOT NULL` |
| `user_lang` | `string` | `uk` |  | - | `VARCHAR(255) DEFAULT 'uk' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `user_new_privmsg` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `user_unread_privmsg` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `user_last_privmsg` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `user_opt` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `user_rank` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `avatar_ext_id` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `user_gender` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `user_birthday` | `date` | `NULL` |  | + | `DATE DEFAULT NULL` |
| `user_email` | `string` | `''` |  | - | `VARCHAR(255) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `user_skype` | `string` | `''` |  | - | `VARCHAR(32) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `user_twitter` | `string` | `''` |  | - | `VARCHAR(15) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `user_icq` | `string` | `''` |  | - | `VARCHAR(15) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `user_website` | `string` | `''` |  | - | `VARCHAR(100) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `user_from` | `string` | `''` |  | - | `VARCHAR(100) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `user_sig` | `text` | `NULL` |  | + | `TEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci` |
| `user_occ` | `string` | `''` |  | - | `VARCHAR(100) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `user_interests` | `string` | `''` |  | - | `VARCHAR(255) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `user_actkey` | `string` | `''` |  | - | `VARCHAR(32) DEFAULT '' NOT NULL COLLATE utf8mb4_bin` |
| `user_newpasswd` | `string` | `''` |  | - | `VARCHAR(60) DEFAULT '' NOT NULL COLLATE utf8mb4_bin` |
| `autologin_id` | `string` | `''` |  | - | `VARCHAR(12) DEFAULT '' NOT NULL COLLATE utf8mb4_bin` |
| `user_newest_pm_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `user_points` | `float` | `0.00` |  | - | `DOUBLE PRECISION DEFAULT '0.00' NOT NULL` |
| `tpl_name` | `string` | `default` |  | - | `VARCHAR(255) DEFAULT 'default' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `user_timer` | `integer` | `NULL` |  | - | `INT NOT NULL` |
| `user_login_tries` | `smallint` | `0` |  | - | `SMALLINT DEFAULT 0 NOT NULL` |
| `user_last_login_try` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `user_viewemail` | `boolean` | `NULL` |  | + | `TINYINT(1) DEFAULT NULL` |
| `user_attachsig` | `boolean` | `NULL` |  | + | `TINYINT(1) DEFAULT NULL` |
| `user_allow_viewonline` | `boolean` | `1` |  | - | `TINYINT(1) DEFAULT '1' NOT NULL` |
| `user_notify` | `boolean` | `1` |  | - | `TINYINT(1) DEFAULT '1' NOT NULL` |
| `user_notify_pm` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `user_popup_pm` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `user_avatar` | `string` | `NULL` |  | + | `VARCHAR(100) DEFAULT NULL COLLATE utf8_general_ci` |
| `user_avatar_type` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `user_sig_bbcode_uid` | `string` | `NULL` |  | + | `VARCHAR(10) DEFAULT NULL COLLATE utf8_general_ci` |
| `user_allow_passkey` | `boolean` | `1` |  | - | `TINYINT(1) DEFAULT '1' NOT NULL` |
| `user_from_flag` | `string` | `NULL` |  | + | `VARCHAR(25) DEFAULT NULL COLLATE utf8_general_ci` |
| `user_allowdefaultavatar` | `boolean` | `1` |  | - | `TINYINT(1) DEFAULT '1' NOT NULL` |
| `user_warnings` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `user_banned` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `bt_tor_browse_set` | `text` | `NULL` |  | + | `TEXT DEFAULT NULL COLLATE utf8_general_ci` |
| `user_unread_topics` | `text` | `NULL` |  | + | `TEXT DEFAULT NULL COLLATE utf8_general_ci` |
| `user_hide_bt_stats` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `user_hide_bt_history` | `boolean` | `1` |  | - | `TINYINT(1) DEFAULT '1' NOT NULL` |
| `user_hide_bt_activity` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `user_hide_bt_topics` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `user_bt_ssl` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(user_id)` |
| `INDEX` | `user_level` | `(user_level)` |
| `INDEX` | `user_regdate` | `(user_regdate)` |
| `INDEX` | `username` | `(username)` |
| `INDEX` | `user_email` | `(user_email)` |
