| Column           | Data Type          | NULL? | Suggested Doctrine Data Type | FK |
|------------------|--------------------|:-----:|------------------------------|----|
| `user_id`        | INT(10)            | - | integer
| `group_id`       | INT(10) UNSIGNED   | - | integer, unsigned
| `quota_type`     | SMALLINT(5)        | - | smallint, unsigned
| `quota_limit_id` | INT(10) UNSIGNED   | - | integer, unsigned

#### Column Defaults

* `ad_start_time`: `'0000-00-00 00:00:00'`
* `ad_active_days`: `'0'`
* `ad_status`: `'1'`
* `ad_desc`: `''`

#### Indexes
+ `PRIMARY KEY(quota_limit_id)`
