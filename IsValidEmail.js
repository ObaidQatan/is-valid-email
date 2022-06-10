"use strict";
exports.__esModule = true;
var isValidEmail = function (email) {
    if (!email || email.indexOf('@') < 1)
        return false;
    var reciepient = email.slice(0, email.indexOf('@'));
    if (reciepient.length > 64 ||
        /!|#|\$|%|\^|&|\*|\(|\)|-|\+|=|:|;|{|}|\?|\./.test(reciepient[0]) ||
        /!|#|\$|%|\^|&|\*|\(|\)|-|\+|=|:|;|{|}|\?|\./.test(reciepient[reciepient.length - 1]) ||
        /[-\!\#\$\%\^\&\*\(\)\+\=\:\;\{\}\?\.]{2}/.test(reciepient))
        return false;
    var domain = email.slice(email.indexOf('@') + 1, email.lastIndexOf('.'));
    if (/(\.\.)|(--)/.test(domain) || domain == '-' || domain === '.')
        return false;
    if (!(domain &&
        domain.length <= 253 &&
        /^[-\. a-zA-Z0-9]*$/.test(domain)))
        return false;
    var topDomain = email.slice(email.lastIndexOf('.') + 1);
    if (!(topDomain &&
        /^[a-zA-Z]*$/.test(topDomain)))
        return false;
    return true;
};
exports["default"] = isValidEmail;
