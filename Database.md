Опис структури БД

# Документування БД

Для документування планується використовувати команду `doc:build:database` (WIP), яка в свою чергу буде будувати описи таблиць/стовпців, спираючись на коментарі БД та типи даних з сутностей Doctrine. Ідея взята з публікації _["Documenting Your PostgreSQL Database"](http://www.craigkerstiens.com/2013/07/29/documenting-your-postgres-database/)_.

Додавання коментаря для таблиці:
```sql
CREATE TABLE `table` (...) ... COMMENT 'This table is used for storing data'
ALTER TABLE `table` COMMENT 'This table is used for storing data';
```

Додавання коментаря для стовпця:
```sql
ALTER TABLE `table` CHANGE `poster_id` INT NOT NULL COMMENT 'This column stores user id';
```

Детальніше - у документації MySQL щодо [`CREATE TABLE`](https://dev.mysql.com/doc/refman/5.7/en/create-table.html) та [`ALTER TABLE`](https://dev.mysql.com/doc/refman/5.7/en/alter-table.html)

## Таблиці

* [`bb_attach_quota`](bb_attach_quota)
* [`bb_attachments`](bb_attachments)
* [`bb_attachments_config`](bb_attachments_config)
* [`bb_attachments_desc`](bb_attachments_desc)
* [`bb_attachments_rating`](bb_attachments_rating)
* [`bb_auth_access`](bb_auth_access)
* [`bb_auth_access_snap`](bb_auth_access_snap)
* [`bb_banlist`](bb_banlist)
* [`bb_bt_dlstatus`](bb_bt_dlstatus)
* [`bb_bt_dlstatus_snap`](bb_bt_dlstatus_snap)
* [`bb_bt_last_torstat`](bb_bt_last_torstat)
* [`bb_bt_last_userstat`](bb_bt_last_userstat)
* [`bb_bt_tor_dl_stat`](bb_bt_tor_dl_stat)
* [`bb_bt_torhelp`](bb_bt_torhelp)
* [`bb_bt_torrents`](bb_bt_torrents)
* [`bb_bt_torstat`](bb_bt_torstat)
* [`bb_bt_tracker`](bb_bt_tracker)
* [`bb_bt_tracker_snap`](bb_bt_tracker_snap)
* [`bb_bt_user_settings`](bb_bt_user_settings)
* [`bb_bt_users`](bb_bt_users)
* [`bb_categories`](bb_categories)
* [`bb_config`](bb_config)
* [`bb_cron`](bb_cron)
* [`bb_disallow`](bb_disallow)
* [`bb_extension_groups`](bb_extension_groups)
* [`bb_extensions`](bb_extensions)
* [`bb_forums`](bb_forums)
* [`bb_groups`](bb_groups)
* [`bb_log`](bb_log)
* [`bb_poll_users`](bb_poll_users)
* [`bb_poll_votes`](bb_poll_votes)
* [`bb_posts`](bb_posts)
* [`bb_posts_edit`](bb_posts_edit)
* [`bb_posts_html`](bb_posts_html)
* [`bb_posts_search`](bb_posts_search)
* [`bb_posts_text`](bb_posts_text)
* [`bb_privmsgs`](bb_privmsgs)
* [`bb_privmsgs_text`](bb_privmsgs_text)
* [`bb_quota_limits`](bb_quota_limits)
* [`bb_ranks`](bb_ranks)
* [`bb_search_rebuild`](bb_search_rebuild)
* [`bb_search_results`](bb_search_results)
* [`bb_sessions`](bb_sessions)
* [`bb_smilies`](bb_smilies)
* [`bb_topic_tpl`](bb_topic_tpl)
* [`bb_topics`](bb_topics)
* [`bb_topics_watch`](bb_topics_watch)
* [`bb_user_group`](bb_user_group)
* [`bb_users`](bb_users)
* [`bb_warnings`](bb_warnings)
* [`bb_warnings_text`](bb_warnings_text)
* [`bb_words`](bb_words)
* [`buf_last_seeder`](buf_last_seeder)
* [`buf_topic_view`](buf_topic_view)
* [`migrations`](migrations)
