## Columns
| Column           | Data Type          | AI? | NULL? | Doctrine Data Type | FK |
|------------------|--------------------|:---:|:-----:|--------------------|:--:|
| `user_id`        | INT(10)            | | - | integer
| `group_id`       | INT(10) UNSIGNED   | | - | integer, unsigned
| `quota_type`     | SMALLINT(5)        | | - | smallint, unsigned
| `quota_limit_id` | INT(10) UNSIGNED   | | - | integer, unsigned

## Column Defaults
| Column       | Default Value |
|-------------:|:--------------|
| `user_id`    | `'0'`
| `group_id`   | `'0'`
| `quota_type` | `'0'`

## Indexes
| Index Type  | Index Name | Index Columns |
|-------------|------------|---------------|
| PRIMARY KEY | PRIMARY    | quota_limit_id
| Non-Unique  | quota_type | quota_type

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
