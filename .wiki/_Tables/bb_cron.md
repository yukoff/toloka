## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `cron_id` | `smallint` | `NULL` | + | - | `SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `cron_active` | `boolean` | `1` |  | - | `TINYINT(1) DEFAULT '1' NOT NULL` |
| `cron_title` | `string` | `''` |  | - | `CHAR(120) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `cron_script` | `string` | `''` |  | - | `CHAR(120) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `schedule` | `enumcronschedule` | `daily` |  | - | `ENUM('hourly','daily','weekly','monthly','interval') DEFAULT 'daily' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `run_day` | `enumcronrunday` | `NULL` |  | + | `ENUM('1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28') DEFAULT NULL COLLATE utf8mb4_unicode_ci` |
| `run_time` | `time` | `04:00:00` |  | + | `TIME DEFAULT '04:00:00'` |
| `run_order` | `smallint` | `0` |  | - | `SMALLINT UNSIGNED DEFAULT 0 NOT NULL` |
| `last_run` | `datetime` | `0000-00-00 00:00:00` |  | - | `DATETIME DEFAULT '0000-00-00 00:00:00' NOT NULL` |
| `next_run` | `datetime` | `0000-00-00 00:00:00` |  | - | `DATETIME DEFAULT '0000-00-00 00:00:00' NOT NULL` |
| `run_interval` | `time` | `00:00:00` |  | + | `TIME DEFAULT '00:00:00'` |
| `log_enabled` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `log_file` | `string` | `''` |  | - | `CHAR(120) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `log_sql_queries` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `disable_board` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `run_counter` | `bigint` | `0` |  | - | `BIGINT UNSIGNED DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(cron_id)` |
| `UNIQUE INDEX` | `title` | `(cron_title)` |
| `UNIQUE INDEX` | `script` | `(cron_script)` |
