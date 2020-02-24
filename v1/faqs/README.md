# Frequently Asked Questions

#### We have tried to list some frequently asked questions. This page will be updated time to time with new FAQs.

[[toc]]

## General

### How many products can be managed with this Simple Business Manager?

You can have any number of products.

### Can I modify the item?

Yes, as per license.

### Can I sell the item?

No. You can't sell the item under any license. However if you have purchased Extended license, you can use it for SaaS (software as a Service) or can create an end product that can be installed unlimited times. You will need separate license for each SaaS use or end product.

### Can I manage multiple business/companies?

No, you can only manage single business with single installation.

### Can I white label it to have my company name and logo?

Yes, you can. Please update the App Name in system settings.

### How can I change the invoice logo?

Please upload the new logo from invoices settings.

### How can I translate into other language?

No, version 1 only have English language and not translate-able. We add this feature in future updates.

### How can I enable Indian GST?

You don't have to enable it, just add taxes and then assign those to your products. System will automatically calculate the correct taxes for you depending on the invoice and customer/vendor states. This is useful for all other countries those uses state related taxes such as Canada.

### Can I install this item on localhost?

Yes, you can install this item on localhost with any web platform xampp, mamp, lamp, wamp or easyphp. Internet connectivity is required for installation to verify the purchase. Once installed, you can use it without Internet.

### Can I use it offline if I have installed it on live server?

SBM has option to cache the get requests only. You won't be able to post any data but if you have visited the page before and Internet is down, you will be able to view the page (it will be loaded from cache).

### Will I get the full source code?

Yes, for Standard and Extended Licenses. For Regular license, you will only get back-end code and won't be able to modify the front-end.

### Can I can sell the products even if I don't have stock?

Yes, you can sell the product even if it's out of stock, system will set the quantity to -ve and adjust it on purchase.

### How can I setup cron job?

You can setup cron job as following:

```
* * * * * cd path/to/your/sbm && php artisan schedule:run >> /dev/null 2>&1
```

If you need help, please check with your host and ask them how you can setup cron job for Laravel, docs can be found at [https://laravel.com/docs/5.8/scheduling](https://laravel.com/docs/5.8/scheduling)

### Why I need to set cron job?

Cron job need to be set to generate recurring invoices and send payment requests for due payments.

### How can I change the view bill promo content?

You can edit the code of `resources` / `views` / `invoices` | `purchases` | `payments` / `minimal` | `simple` | `modern` `.blade.php`

## Users

### How many user roles are available?

SBM has 3 User Roles

1.  Super (super admin)
    -   Can perform all actions
2.  Admin (administrator)
    -   Can't delete any data/records
    -   Can add/edit/view almost all data except settings & users
3.  Staff (sales staff)
    -   Can't edit any data/records
    -   Can't delete any data/records
    -   Can only view own added records for invoices, purchases & payments
    -   Can add products, customers, vendors, invoices, purchases & payments
4.  Customer (site customer)
    -   Can update customer company details
    -   Can view own invoice, recurring invoice and payments
5.  Vendor (site vendor)
    -   Can update vendor company details
    -   Can view own purchases and payments

### Which one is the default user role?

No one is default, after you have added the user, please edit to assign roles.

### Where can I assign role to user?

After you have added the user, please edit new added user to assign roles as you need.

### Can I add new user role?

No, you can't add new user role.

## Payments

### What payment gateways are available in SBM?

PayPal for online payments while for credit/debit card you can choose from Stripe, PayPal Pro, PayPal Rest APIs and Authorize.net

### Can I have recurring invoice or subscription?

Yes, you can add recurring invoice and system will generate invoice and payment request automatically once the cron job run.

## Errors

### Why am I getting CloudFlare Security or Blank error on verification while installation the item?

If you are not getting any error but blank red alert or CloudFlare Security error mean your request is no reaching to verification server. Please check that you server is not blocking the curl request and secondly there are chances that CloudFlare might be challenging your request due to various reasons. Please check with your host and request them to white list CloudFlare IPs https://www.cloudflare.com/ips Updating your Anti-Virus and Browser might help. You can check with your host too.

You can try different host and/or install it locally with any web platform `easyphp` / `lamp` / `mamp` / `wamp` / `xampp`.

### Why am I getting 500 Internal Server Error?

You shouldn't get such error if the server requirements were fine while installing the item.

500 are server internal errors and you can check your server error log to get more details of the error, if you are on live server and not sure, you
can check with your host. Once you have the error details please email to support@tecdiary.com with details, we will check and suggest you the solution.

### MySQL cannot connect via "localhost" but only "127.0.0.1"?

MySQL will try to connect to the unix socket if you tell it to connect to "localhost". If you tell it to connect to 127.0.0.1 you are forcing it to connect to the network socket. So probably you have MySQL configured to only listen to the network socket and not to the file system socket.

What exactly is wrong with your unix socket is hard to tell. But I recommend you to [read this page](http://dev.mysql.com/doc/refman/5.5/en/can-not-connect-to-server.html) on the MySQL reference guide.

### Why I can't send emails?

Please double check your email configuration details in system settings.

### Why I am getting db error and can't login?

Please make sure that your database server is up and running, then check .env file in main directory for database details.

### Why some products are missing from order when I add 100+ products?

There is no restriction in SBM code on the number of order items. If you are having such issue, please check your PHP configuration file (php.ini) for `max_input_vars` and set it to higher number i.e, 10000. You might need to increase `max_input_time` and `max_execution_time` too.
