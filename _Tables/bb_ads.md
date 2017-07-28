## Columns
| Column           | Data Type          | AI? | NULL? | Doctrine Data Type | FK |
|------------------|--------------------|:---:|:-----:|:-------------------|:--:|
| `ad_id`          | MEDIUMINT UNSIGNED | + | - | integer, unsigned
| `ad_block_ids`   | VARCHAR(255)       | | -
| `ad_start_time`  | DATETIME           | | -
| `ad_active_days` | SMALLINT           | | - | smallint, unsigned
| `ad_status`      | TINYINT(1)         | | - | boolean
| `ad_desc`        | VARCHAR(255)       | | -
| `ad_html`        | TEXT               | | -

## Column Defaults
| Column       | Default Value |
|-------------:|:--------------|
| `ad_start_time`  | `'0000-00-00 00:00:00'`
| `ad_active_days` | `'0'`
| `ad_status`      | `'1'`
| `ad_desc`        | `''`

## Indexes
| Index Type  | Index Name | Index Columns |
|-------------|------------|---------------|
| PRIMARY KEY | PRIMARY    | `ad_id`
