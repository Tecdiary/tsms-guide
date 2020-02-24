# Update Guide

#### Please backup database and all files/folders before starting to update.

[[toc]]

## Update Instructions

Please download the latest file and update the follow files & folder of your TSMS install:

-   `app/`
-   `database/`
-   `public/`
-   `resources/`
-   `routes/`
-   `vendor/`
-   `composer.json`
-   `composer.lock`

Now if you can login as `owner` then you can visit `http://yourTSMSURL/update/database` otherwise you will need to update the database by running the following command from your main TSMS folder.

```
cd path/to/your/tsms
php artisan app:update
```

## Request Update

We encourage you to try updating yourself. However if you need update service then you can [Pay \$40](https://www.paypal.me/tecdiary/40usd) and email your `License Key`, `Server Details` (access to files and database) along with TSMS owner user login credentials. We will required 1 working day to perform update.
