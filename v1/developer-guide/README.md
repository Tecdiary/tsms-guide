# Developer Guide

[[toc]]

## What's included

Regular license doesn't come with front-end (vue), feature tests, database migrations & seed files. These all are included in standard license but standard license download file doesn't have vendor folder as you can run `composer install` and for front-end (vue) `yarn` or `npm i` I would recommend you to use yarn.

## Modify Order Templates

Order view file is `resources/js/Pages/Orders/Show.vue`

## Modify Notification Templates

You can modify the notifications from `app/Notifications/` folder.

## Standard/Extended License

If you have purchases standard/extended license then you will get the minimal download file. You can download, open the extracted folder and run the following commands to install dependencies:

```
# Install back-end (composer) dependencies with
composer install

# Install front-end (npm) dependencies with
npm install

npm run dev         # to compile
npm run watch       # to compile and watch
npm run prod        # to compile for production
```

As you know the front-end is Vuejs and back-end Laravel. If you need any help regarding them, you can visit documentation for at [Laravel Docs](https://laravel.com/docs/5.6) and [Vue Docs](https://vuejs.org/v2/guide/).

### Where is the manifest file.

Manifest file `resources/sw/manifest.json`

### Where is the service worker file.

Service worker is being generated with laravel mix and you can check the `webpack.mix.js`

## Front-end App

The front end source code can be found in `resources/js/`

main app file `resources/js/app.js`<br>
page files `resources/js/Pages`<br>

main scss file `resources/css/app.css`

## Support for Modifications

#### Please be informed that we can't offer support/help for modifications, you need to manage it yourself. If you don't know then you can hire developer to help you modify the item as you need.

### Do you provide customization/modification service?

Yes, we do provide customization/modification. We charge \$50/hours and availability depends on schedule. You can email to support@tecdiary.com with your requirements to get estimate.

### I can't find answer in docs?

If you can't find the answer here, you can post at official support portal [https://tecdiary.net/support](https://tecdiary.net/support).
