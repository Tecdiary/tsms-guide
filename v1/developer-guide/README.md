# Developer Guide

[[toc]]

## What's included

Regular license doesn't come with front-end (vue), feature tests, database migrations & seed files. These all are included in standard license but standard license download file doesn't have vendor folder as you can run `composer install` and for front-end (vue) `yarn` or `npm i` I would recommend you to use yarn.

## Modify Order Templates

Order template view files can be found in these folders

-   **Invoice Templates**

    1.  **Minimal** `resources` / `views` / `invoices` / `minimal.blade.php`
    2.  **Simple** `resources` / `views` / `invoices` / `simple.blade.php`
    3.  **Modern** `resources` / `views` / `invoices` / `modern.blade.php`

-   **Purchase Templates**

    1.  **Minimal** `resources` / `views` / `purchases` / `minimal.blade.php`
    2.  **Simple** `resources` / `views` / `purchases` / `simple.blade.php`
    3.  **Modern** `resources` / `views` / `purchases` / `modern.blade.php`

-   **Payment Templates**

    1.  **Minimal** `resources` / `views` / `payments` / `minimal.blade.php`
    2.  **Simple** `resources` / `views` / `payments` / `simple.blade.php`
    3.  **Modern** `resources` / `views` / `payments` / `modern.blade.php`

## Modify Email Templates

You can modify the email templates from application but if you need to modify the main template then you can check `resources` / `views` / `mail` / `template.blade.php` as all other templates extends the main email template file.

## Standard/Extended License

If you have purchases standard/extended license then you will get the minimal download file. You can download, open the extracted folder and run the following commands to install dependencies:

```
# Install back-end (composer) dependencies with
composer install

# Install front-end (npm) dependencies with
npm i               # with npm

yarn                # if you prefer yarn

npm run dev         # to compile
npm run watch       # to compile and watch
npm run prod        # to compile for production
```

As you know the front-end is Vuejs and back-end Laravel. If you need any help regarding them, you can visit documentation for at [Laravel Docs](https://laravel.com/docs/5.6) and [Vue Docs](https://vuejs.org/v2/guide/).

### Where is the manifest file.

Manifest file is being generated with laravel route and you can check `manifest` method of the `app` / `Http` / `Controllers` / `AjaxController.php`

### Where is the service worker file.

Service worker is being generated with laravel mix and you can check the `webpack.mix.js`

## Front-end App

The front end is not api based but tradition web app and the source code can be found in `resources/assets/js/`

main app file `resources` / `assets` / `js` / `app.js`<br>
vue router file `resources` / `assets` / `js` / `routes.js`<br>
vuex store file `resources` / `assets` / `js` / `store` / `index.js`<br>
vue components folder `resources` / `assets` / `js` / `components`

main scss file `resources` / `assets` / `sass` / `app.scss`

## Support for Modifications

#### Please be informed that we can't offer support/help for modifications, you need to manage it yourself. If you don't know then you can hire developer to help you modify the item as you need.

### Do you provide customization/modification service?

Yes, we do provide customization/modification. We charge \$50/hours and availability depends on schedule. You can email to support@tecdiary.com with your requirements to get estimate.

### I can't find answer in docs?

If you can't find the answer here, you can email to support@tecdiary.com but please don't ask modification related questions as we might not be able to help you with modifications as mentioned above.
