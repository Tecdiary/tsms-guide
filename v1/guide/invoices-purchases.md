# Invoices & Purchases

[[toc]]

## Invoices

Invoices pages has Date, Reference, Customer, Status, Grand total and Actions columns. You can view, email, edit and delete any invoice. The invoices table can be sorted for date and reference and searched/filtered for date, reference, customer and status. There is date range input in the table footer to get the periodic invoices.

The add invoice page has the following fields

1.  Date
2.  Reference
3.  Customer
4.  Order Taxes
5.  Order discount
6.  Shipping
7.  Order products - you can search products or scan barcode
8.  Custom Fields
9.  Note
10. Draft - if invoice is still a draft
11. Add payment for invoice

Once you unchecked the draft invoice, the invoice will be finalized and the grand total amount will be added to the customer balance. If the add payment was checked, the payment will be added and customer will be notified about the invoice and payment request.

## Purchases

Purchases pages has Date, Reference, Vendor, Status, Grand total and Actions columns. You can view, email, edit and delete any purchase. The purchases table can be sorted for date and reference and searched/filtered for date, reference, customer and status. There is date range input in the table footer to get the periodic purchases.

The add purchase page has the following fields

1.  Date
2.  Reference
3.  Vendor
4.  Order Taxes
5.  Order discount
6.  Shipping
7.  Order products - you can search products or scan barcode
8.  Custom Fields
9.  Note
10. Draft - if purchase is still a draft
11. Add payment for purchase

Once you unchecked the draft purchase, the purchase will be finalized and the grand total amount will be added to the vendor balance. You can add payment from vendors list as you pay to them.

## Payments

The payments are not attached to invoices and purchases but to customers and vendors. You can add payment for invoice/purchase. If you want to add payment for more than one invoice/purchase, you can add payment from `customers`/`vendors` page and system will set the last invoices/purchases to paid as per payment. If the account of any `customer`/`vendor` is -ve then system will check all the new invoices/purchase and associate them to the last payments.

## Recurring Invoices

Recurring invoices are the invoice that will be automatically generated after selected repeat period. Recurring invoice form has the following fields

1.  Start Date
2.  Create before - number of day to generate invoice
3.  Repeat - repeat period for the invoice
    -   daily
    -   weekly
    -   monthly
    -   quarterly
    -   semiannually
    -   annually
    -   biennially
4.  Reference
5.  Customer
6.  Order Taxes
7.  Order discount
8.  Shipping
9.  Order products - you can search products or scan barcode
10. Custom Fields
11. Note
12. Active - only active recurring invoice will be generated be cron job

System will generate invoice for all active recurring invoices along with payment.
