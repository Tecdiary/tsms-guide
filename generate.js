const through2 = require('through2'),
    markdownpdf = require('markdown-pdf');

function preProcessMd() {
    return through2((data, enc, cb) => {
        let pageBreak = "\n\n<div style='page-break-before: always;'></div>\n\n";
        let nd = data
            .toString()
            .replace(
                /\!\[Table Image\]\(\/sbm-guide\/\assets\/\img\/table-design.png "Table Design"\)/,
                '<div class="table-image"><img src="assets/assets/img/table-design.png" alt="Table Image" title="Table Design"></div>'
            )
            .replace(/## Table Design/, pageBreak + '## Table Design')
            .replace(/\/sbm-guide\/assets\/img/gs, 'assets/assets/img')
            .replace(/::: tip/gs, '<div class="tip">')
            .replace(/::: warning/gs, '<div class="warning">')
            .replace(/:::/gs, '</div>')
            .replace(/`composer install`/gs, '<code>composer install</code>')
            .replace(/\[\[toc\]\]/, '');
        cb(null, new Buffer(nd + pageBreak));
    });
}

var mdDocs = [
        'README.md',
        'v1/install/README.md',
        'v1/install/service.md',
        'v1/credit/README.md',
        'v1/guide/README.md',
        'v1/guide/products-customers-vendors.md',
        'v1/guide/invoices-purchases.md',
        'v1/guide/expenses-incomes.md',
        'v1/guide/accounts-transfers.md',
        'v1/guide/users-settings.md',
        'v1/faqs/README.md',
        'v1/developer-guide/README.md'
    ],
    bookPath = 'documentation.pdf';

var options = {
    preProcessMd,
    runningsPath: './runnings.js',
    remarkable: {
        html: true,
        breaks: true,
        syntax: ['header', 'footer']
    },
    cssPath: 'assets/style.css',
    paperBorder: { top: '1cm', left: '2cm', bottom: '1cm', right: '2cm' }
};
markdownpdf(options)
    .concat.from(mdDocs)
    .to(bookPath, function() {
        console.log('Created', bookPath);
    });
