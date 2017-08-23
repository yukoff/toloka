## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `warning_id` | `integer` | `NULL` | + | - | `INT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `warning_type` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `warning_post_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `warning_user_id` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `warning_poster_id` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `warning_posted` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `warning_expires` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `warning_proceed` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(warning_id)` |
| `INDEX` | `warning_user_id` | `(warning_user_id)` |
