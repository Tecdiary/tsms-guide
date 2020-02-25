# Frequently Asked Questions

#### We have tried to list some frequently asked questions. This page will be updated time to time with new FAQs.

[[toc]]

## General

### How many services can be managed with this Tailor Shop Management System?

You can have any number of service but in most of the tailor shop they won't have much services but few general ones.

### Can I modify the item?

Yes, as per license.

### Can I sell the item?

No. You can't sell the item under any license. However if you have purchased Extended license, you can use it for SaaS (software as a Service) or can create an end product that can be installed unlimited times. You will need separate license for each SaaS use or end product.

### Can I manage multiple business/companies?

No, you can only manage single business with single installation.

### Can I white label it to have my company name and logo?

No, there is no option to change logo. Please update the Name in settings, you can upload the order logo (will be used on view order page)

### How can I change the order logo?

Please upload the new logo from settings.

### How can I translate into other language?

No, version 1 only have English language and not translate-able. We add this feature in future updates.

### How can I enable Taxes?

You can add taxes on order page as you need or set the default in settings

### Can I install this item on localhost?

Yes, you can install this item on localhost with any web platform xampp, mamp, lamp, wamp or easyphp. Internet connectivity is required for installation to verify the purchase. Once installed, you can use it without Internet.

### Can I use it offline if I have installed it on live server?

TSMS has option to cache the get requests only. You won't be able to post any data but if you have visited the page before and Internet is down, you will be able to view the page (it will be loaded from cache).

### Will I get the full source code?

Yes, for Standard and Extended Licenses. For Regular license, you will only get back-end code and won't be able to modify the front-end.

### How can I setup cron job?

You can setup cron job as following:

```
* * * * * cd path/to/your/tsms && php artisan schedule:run >> /dev/null 2>&1
```

If you need help, please check with your host and ask them how you can setup cron job for Laravel, docs can be found at [https://laravel.com/docs/6.x/scheduling](https://laravel.com/docs/6.x/scheduling)

### Why I need to set cron job?

Cron job need to be set to generate recurring salaries and send payment requests for due payments.

## Users

### How many user roles are available?

TSMS has 3 User Roles

1.  Owner (super admin)
    -   Can perform all actions
2.  Tailor (taff)
    -   Can't delete any data/records
    -   Can add/edit/view almost all data except settings & users

### Which one is the default user role?

Tailor role will be default, if you have not checked the owner check box while adding the user.

### Where can I assign role to user?

You can edit the user to change the role.

### Can I add new user role?

No, you can't add new user role.

## Payments

### What payment gateways are available in TSMS?

Only offline payment and option can be set in settings. We will add online payment such as PayPal and credit/debit card using Stripe, PayPal Pro, PayPal Rest APIs and Authorize.net

## Errors

### Why am I getting CloudFlare Security or Blank error on verification while installation the item?

If you are not getting any error but blank red alert or CloudFlare Security error mean your request is no reaching to verification server. Please check that you server is not blocking the curl request and secondly there are chances that CloudFlare might be challenging your request due to various reasons. Please check with your host and request them to white list CloudFlare IPs https://www.cloudflare.com/ips Updating your Anti-Virus and Browser might help. You can check with your host too.

You can try different host and/or install it locally with any web platform `easyphp` / `lamp` / `mamp` / `wamp` / `xampp`.

### Why am I getting 500 Internal Server Error?

You shouldn't get such error if the server requirements were fine while installing the item.

500 are server internal errors and you can check your server error log to get more details of the error, if you are on live server and not sure, you
can check with your host. Once you have the error details please post on support portal (https://tecdiary.net/support) with details, we will check and suggest you the solution.

### MySQL cannot connect via "localhost" but only "127.0.0.1"?

MySQL will try to connect to the unix socket if you tell it to connect to "localhost". If you tell it to connect to 127.0.0.1 you are forcing it to connect to the network socket. So probably you have MySQL configured to only listen to the network socket and not to the file system socket.

What exactly is wrong with your unix socket is hard to tell. But I recommend you to [read this page](http://dev.mysql.com/doc/refman/5.5/en/can-not-connect-to-server.html) on the MySQL reference guide.

### Why I can't send emails?

Please double check your email configuration details in settings.

### Why I am getting db error and can't login?

Please make sure that your database server is up and running, then check .env file in main directory for database details.

### Why some services are missing from order when I add 50+ services?

There is no restriction in TSMS code on the number of order services. If you are having such issue, please check your PHP configuration file (php.ini) for `max_input_vars` and set it to higher number i.e, 20000. You might need to increase `max_input_time` and `max_execution_time` too.
