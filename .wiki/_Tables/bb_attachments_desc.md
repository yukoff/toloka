## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `attach_id` | `integer` | `NULL` | + | - | `INT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `physical_filename` | `string` | `''` |  | - | `VARCHAR(255) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `real_filename` | `string` | `''` |  | - | `VARCHAR(255) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `download_count` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `comment` | `string` | `''` |  | - | `VARCHAR(255) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `extension` | `string` | `''` |  | - | `VARCHAR(100) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `mimetype` | `string` | `''` |  | - | `VARCHAR(100) DEFAULT '' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `filesize` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `filetime` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `thumbnail` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `tracker_status` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `thanks_count` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `rating_sum` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `rating_count` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `force_private` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(attach_id)` |
| `INDEX` | `filetime` | `(filetime)` |
| `INDEX` | `filesize` | `(filesize)` |
| `INDEX` | `physical_filename` | `(physical_filename)` |
