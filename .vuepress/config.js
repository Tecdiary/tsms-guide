module.exports = {
    base: process.env.NODE_ENV === 'production' ? '/tsms-guide/' : '/',
    title: 'TSMS Guide',
    description: 'Simple Business Manager - MPS Documentation',
    head: [
        ['link', { rel: 'icon', href: `/assets/img/icon.png` }],
        ['link', { href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,400i', rel: 'stylesheet', type: 'text/css' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#1A202C' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/assets/img/icon-152.png` }],
        ['meta', { name: 'msapplication-TileImage', content: '/assets/img/icon-144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#1A202C' }],
    ],
    dest: 'docs',
    serviceWorker: true,
    themeConfig: {
        repo: 'tecdiary/tsms-guide',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Report Bug', link: 'https://tecdiary.net/support/tailor-shop-management-system-tsms-web/report_bug' },
            { text: 'Buy Now', link: 'https://tecdiary.net/products/tailor-shop-management-system-tsms-web' },
        ],
        sidebar: [
            {
                title: 'General',
                collapsable: true,
                children: ['/', 'v1/credit/'],
            },
            {
                title: 'Installation',
                collapsable: true,
                children: ['v1/install/', 'v1/install/service'],
            },
            {
                title: 'Update',
                collapsable: true,
                children: ['v1/update/'],
            },
            {
                title: 'Manual',
                collapsable: true,
                children: [
                    'v1/guide/',
                    'v1/guide/customers-payments',
                    'v1/guide/orders',
                    'v1/guide/expenses',
                    'v1/guide/contacts',
                    'v1/guide/users-settings',
                ],
            },
            {
                title: 'FAQs',
                collapsable: true,
                children: ['v1/faqs/'],
            },
            {
                title: 'Developer Guide',
                collapsable: true,
                children: ['v1/developer-guide/'],
            },
        ],
        serviceWorker: {
            updatePopup: true,
            updatePopup: {
                message: 'A new version is available for documentation.',
                buttonText: 'Refresh',
            },
        },
    },
};
