## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `privmsgs_id` | `integer` | `NULL` | + | - | `INT UNSIGNED AUTO_INCREMENT NOT NULL` |
| `privmsgs_type` | `boolean` | `0` |  | - | `TINYINT(1) DEFAULT '0' NOT NULL` |
| `privmsgs_subject` | `string` | `0` |  | - | `VARCHAR(255) DEFAULT '0' NOT NULL COLLATE utf8mb4_unicode_ci` |
| `privmsgs_from_userid` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `privmsgs_to_userid` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `privmsgs_date` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `privmsgs_ip` | `string` | `0` |  | - | `VARCHAR(42) DEFAULT '0' NOT NULL COLLATE utf8mb4_bin` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(privmsgs_id)` |
| `INDEX` | `privmsgs_from_userid` | `(privmsgs_from_userid)` |
| `INDEX` | `privmsgs_to_userid` | `(privmsgs_to_userid)` |
