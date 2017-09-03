## Columns

| Column | Doctrine Data Type | Default Value | AI? | NULL? | Column DDL |
| ------ | ------------------ | ------------- | :-: | :---: | ---------- |
| `quota_limit_id` | `integer` | `NULL` |  | - | `INT UNSIGNED NOT NULL` |
| `user_id` | `integer` | `0` |  | - | `INT DEFAULT 0 NOT NULL` |
| `group_id` | `integer` | `0` |  | - | `INT UNSIGNED DEFAULT 0 NOT NULL` |
| `quota_type` | `smallint` | `0` |  | - | `SMALLINT DEFAULT 0 NOT NULL` |

## Indexes

| Index Type | Index Name | Index Columns |
| ---------- | ---------- | ------------- |
| `PRIMARY KEY` | `PRIMARY` | `(quota_limit_id)` |
| `INDEX` | `quota_type` | `(quota_type)` |

# Пропоновані зміни

## Indexes
| Index Type | Index Name | Index Columns |
|------------|------------|---------------|
| Non-Unique | idx_bb_attach_quota_userid  | user_id
| Non-Unique | idx_bb_attach_quota_groupid | group_id

## Foreign Keys
| FK Name          | Column          | Referenced Table | Referenced Column |
|------------------|-----------------|------------------|-------------------|
| fk_bb_attach_quota_bb_users  | user_id  | bb_users  | user_id  |
| fk_bb_attach_quota_bb_groups | group_id | bb_groups | group_id |
