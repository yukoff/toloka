## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `attach_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `post_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `privmsgs_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `user_id_1` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `user_id_2` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(attach_id, post_id, privmsgs_id)` |
| `INDEX` | `attach_id_privmsgs_id` | `(attach_id, privmsgs_id)` |
| `INDEX` | `post_id` | `(post_id)` |
| `INDEX` | `privmsgs_id` | `(privmsgs_id)` |
