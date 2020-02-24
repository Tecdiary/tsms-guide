# Users & Settings

[[toc]]

## Users

Users are the `owner`/`partners`/`staff` of the `company`/`organization`.

There are 3 user roles at this moment in SMB

1.  **Super** (super admin)
    -   Can perform all actions
2.  **Admin** (administrator)
    -   Can't delete any data/records
    -   Can add/edit/view almost all data except settings & users
3.  **Staff** (sales staff)
    -   Can't edit any data/records
    -   Can't delete any data/records
    -   Can only view own added records for invoices, purchases & payments
    -   Can add products, customers, vendors, invoices, purchases & payments
4.  **Customer** (site customer)
    -   Can update customer company details
    -   Can view own invoice, recurring invoice and payments
5.  **Vendor** (site vendor)
    -   Can update vendor company details
    -   Can view own purchases and payments

## Settings

Settings module can perform many system related configuration and has the following sub-sections.

### App Settings

Application settings are the front-end app configuration with the following options

1.  **App Name** - Whatever you want to call your business application
2.  **Date format** - The date format to be used in the application
3.  **Initial table row** - The number of table row to be display on page load
4.  **Main navigation position** - Position of your navigation menu to top or left
5.  **Hide ID column** - If you would like to id ID columns on all tables

### Invoice Settings

Invoice settings are the invoicing/seller company details with following

1.  Company Name
2.  Company Registration Number
3.  Phone Number
4.  Email Address
5.  Address
6.  Country
7.  State
8.  5 Extra detail fields with label and value option
9.  Invoice footer - to display at the end of the invoice
10. Logo - if you want to change the logo
11. Template - 3 templates to choose from

### System Settings

System level settings with following

1.  App Name
2.  App URL
3.  Timezone
4.  Default Account
5.  Enable/Disable Stock
6.  Email Settings
    -   From Name
    -   From Address
    -   Email Driver
        1.  Amazon SES
        2.  Mailgun
        3.  SendMail
        4.  SMTP
        5.  SparkPost
7.  Currency Code - 3 digit ISO currency code
8.  Enable/Disable PayPal
9.  Accept credit/debit card payments with
    1.  Stripe
    2.  PayPal Pro
    3.  PayPal Rest APIs
    4.  Authorize.net

If you need any other card processing payment gateway, we can add it for fixed $250 charges (only for you) and$100 for shared (will be added to app for all others).

### Email Templates

This page will help you to update email template, the template can be selected from top right and then you can modify it as you need. Please make sure to not left any tags opened.

**Available variables** will be display at the bottom of edit area, you can use any of these in the template code.

### Taxes

You can add all taxes before adding any products and then assign then to products as you need. Taxes have the following fields

1.  Code
2.  Name
3.  Rate
4.  Tax Number
5.  Details
6.  Compound Tax
7.  Recoverable Tax
8.  State related Tax
    -   Same State Tax
    -   Different State Tax

For state related tax, only those will be applied who match the same/different state of invoice settings and customer/vendor settings.

_For Indian GST, if same state then CGST and SGST will be applied while for different state IGST will be applied._

### Categories

To add category for products, incomes and expenses. Only category name is required.

### Custom Fields

Custom fields allow you to add more form fields to any of the available model of the application with following

1.  Name
2.  Slug
3.  Type
4.  Required
5.  Sort Order
6.  Entities
    -   Account
    -   Customer
    -   Expense
    -   Income
    -   Invoice
    -   Product
    -   Purchase
    -   Vendor
7.  Description
