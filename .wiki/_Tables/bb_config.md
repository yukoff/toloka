## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `config_name` | `string` | `NULL` |  | - | `VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci` |
| `config_value` | `text` | `NULL` |  | - | `MEDIUMTEXT NOT NULL COLLATE utf8mb4_unicode_ci` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(config_name)` |
