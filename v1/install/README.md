# Installation Guide

#### We have added the installer for easy installation experience and it can be accessed by adding `/install` at the end url.

[[toc]]

## Step 1: Preparation

::: warning Standard License?
If you have purchased standard license, please run install dependencies before following these steps by running `composer install`
:::

::: warning Requirements
**PHP 7.1.3+ & MySQL 5.7.8+, Installer will check other requirements**
:::

::: warning Installing on cPanel?
Please don't upload the files to `public_html` directory but create `tsms` directory one level above (outside public_html) in main directory that is not accessible by public and then upload the files to this `tsms` directory. Lastly create subdomain that points to the `tsms/public` directory. Now replace the `yourdomain.com` below with `subdomain.yourdoamin.com`
:::

::: warning Installing locally?
Please add a virtual host that should point to public directory in tsms `full/path/to/tsms/public` directory then access the virtual host in browser.
:::

::: tip
If you need to install in as main domain `yourdomain.com` but not subdoamin `subdomain.yourdoamin.com`, you still follow the above instructions and then create symbolic link for public_html `ln -s /tsms/public /public_html`. You can check with your host about this and tell them that you was to secure Laravel installation.
:::

You can access the installer by adding `/install` at the end of your domain i.e,

-   `https:` // `yourdomain.com` / `install` for main domain installation
-   `https:` // `yourdomain.com` / `subfolder` / `install` for sub directory installation
-   `https:` // `subdomain.yourdomain.com` / `install` for sub domain directory installation

You will need to prepare these details (mentioned at installer page)

1.  License details:
    -   Purchased by (**username**/email)
    -   Licence Key / Purchase code
2.  Database server details:
    -   Database Hostname
    -   Database Name
    -   Database Username
    -   Database Password `User must have all the privileges on the database`

## Step 2: Licence Agreement

Please read the license details and accept.

## Step 3: Pre-Install Checklist

If there is any server config change required, you will see the details on this page. You need to resolve these before proceeding to next step. If you are not sure about any issue, simply Google it or check with your host/server administrator.

## Step 4: Verify your License

Please fill `username` and `license key`/`purchase code` and click next to verify, if you set error, please double check your purchase details and try again. It still same, please email to support@tecdiary.com with your `license key`/`purchase code`, we will check and update you.

## Step 5: Installation Configuration

Please fill the form with your database server details `hostname`, `database`, `username` and `password`.
Please make sure that

-   database is empty
-   the `hostname` is correct
-   user has all the privileges on the database

## Step 6: Create User Account

Please fill the form to create owner user account.

## Step 7: Finalize Installation

We are almost done, it's time to finalize the installation. If you need some demo data, you can generate from this page before pressing the **Finalize** button.

**You must press the `Finalize` installation button to complete the installation.**

::: tip Can I start again?
Yes, if there is any issue on any step and you can't pass then you can cancel and start over again with new database or settings.
:::

## After Install

**After install, please add system level data as following:**

1. **Settings** update settings (specially email & sms settings)
2. **Services** (add at least one)
3. **Taxes** (add at least one)
4. **Customers** (add at least one)
