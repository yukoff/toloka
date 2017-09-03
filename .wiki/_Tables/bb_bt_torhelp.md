## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `user_id` | `integer` | `NULL` |  | - | `INT NOT NULL` |
| `topic_id_csv` | `text` | `NULL` |  | - | `TEXT NOT NULL COLLATE utf8mb4_unicode_ci` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(user_id)` |
