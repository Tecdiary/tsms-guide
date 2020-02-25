const through2 = require('through2'),
    markdownpdf = require('markdown-pdf');

function preProcessMd() {
    return through2((data, enc, cb) => {
        let pageBreak = "\n\n<div style='page-break-before: always;'></div>\n\n";
        let nd = data
            .toString()
            .replace(
                /\!\[Customer Table Image\]\(\/tsms-guide\/\assets\/\img\/table.png "Customers Table"\)/,
                '<div class="table-image"><img src="assets/assets/img/table.png" alt="Customer Table Image" title="Customers"></div>'
            )
            .replace(/## Customers Table/, pageBreak + '## Customers Table')
            .replace(
                /\!\[Order Table Image\]\(\/tsms-guide\/\assets\/\img\/orders.png "Orders Table"\)/,
                '<div class="table-image"><img src="assets/assets/img/orders.png" alt="Order Table Image" title="Orders"></div>'
            )
            .replace(/## Orders Table/, pageBreak + '## Orders Table')
            .replace(/\/tsms-guide\/assets\/img/gs, 'assets/assets/img')
            .replace(/::: tip/gs, '')
            .replace(/::: warning/gs, '')
            .replace(/:::/gs, '')
            .replace(/`composer install`/gs, '<code>composer install</code>')
            .replace(/\[\[toc\]\]/, '');
        cb(null, new Buffer.from(nd + pageBreak));
    });
}

var mdDocs = [
        'README.md',
        'v1/install/README.md',
        'v1/install/service.md',
        'v1/update/README.md',
        'v1/credit/README.md',
        'v1/guide/README.md',
        'v1/guide/customers-payments.md',
        'v1/guide/orders.md',
        'v1/guide/expenses.md',
        'v1/guide/contacts.md',
        'v1/guide/users-settings.md',
        'v1/faqs/README.md',
        'v1/developer-guide/README.md',
    ],
    bookPath = 'documentation.pdf';

var options = {
    preProcessMd,
    runningsPath: './runnings.js',
    remarkable: {
        html: true,
        breaks: true,
        syntax: ['header', 'footer'],
    },
    cssPath: 'assets/style.css',
    paperBorder: { top: '1cm', left: '2cm', bottom: '1cm', right: '2cm' },
};
markdownpdf(options)
    .concat.from(mdDocs)
    .to(bookPath, function() {
        console.log('Created', bookPath);
    });
