exports.header = {
    height: '1.5cm',
    contents: function(pageNum, numPages) {
        return (
            "<p style='font-size: 10px; display: block; font-family: sans-serif; border-bottom: 1px dotted #CCC; padding-bottom: 10px; margin-bottom: 20px;'><a style='color: #007bff; font-weight: bold; text-decoration: none;' href='https://tecdiary.net/products/tailor-shop-management-system-tsms'>Tailor Shop Management System (TSMA)</a> <span style='float:right'>" +
            pageNum +
            ' / ' +
            numPages +
            '</span></p>'
        );
    },
};

exports.footer = {
    height: '0.8cm',
    contents: function(pageNum, numPages) {
        if (pageNum == numPages) {
            return '';
        }
        return (
            "<p style='font-size: 10px; font-family: sans-serif; border-top: 1px dotted #CCC; padding-top: 4px;'><span style='float:right'>" +
            pageNum +
            ' / ' +
            numPages +
            '</span> © ' +
            new Date().getFullYear() +
            ' <a style="color: #007bff; font-weight: bold; text-decoration: none;" href="https://tecdiary.net">Tecdiary.net</a> All Rights Reserved.</p>'
        );
    },
};
