<?php

namespace Database\Entities;

/**
 * BbCron
 */
class BbCron
{
    /**
     * @var integer
     */
    private $cronId;

    /**
     * @var boolean
     */
    private $cronActive = '1';

    /**
     * @var string
     */
    private $cronTitle = '';

    /**
     * @var string
     */
    private $cronScript = '';

    /**
     * @var string
     */
    private $schedule = 'daily';

    /**
     * @var string
     */
    private $runDay;

    /**
     * @var \DateTime
     */
    private $runTime = '04:00:00';

    /**
     * @var boolean
     */
    private $runOrder = '0';

    /**
     * @var \DateTime
     */
    private $lastRun = '0000-00-00 00:00:00';

    /**
     * @var \DateTime
     */
    private $nextRun = '0000-00-00 00:00:00';

    /**
     * @var \DateTime
     */
    private $runInterval = '00:00:00';

    /**
     * @var boolean
     */
    private $logEnabled = '0';

    /**
     * @var string
     */
    private $logFile = '';

    /**
     * @var boolean
     */
    private $logSqlQueries = '0';

    /**
     * @var boolean
     */
    private $disableBoard = '0';

    /**
     * @var integer
     */
    private $runCounter = '0';


}