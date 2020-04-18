'use strict';

goog.provide('Blockly.JavaScript.request');

goog.require('Blockly.JavaScript');

function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));

    }
    return pwd;
}

Blockly.JavaScript.request_all = function (g) {
    var f = g.getFieldValue("method");
    var b = Blockly.JavaScript.valueToCode(g, "url", Blockly.JavaScript.ORDER_ATOMIC);
    var d = Blockly.JavaScript.statementToCode(g, "callback");
    var c = "";
    var getCompareFunctionName = Blockly.JavaScript.provideFunction_(
        'HTTP_CALLBACK_' + randomString(10),
        ["function(responseCode, responseBody) {\n" + d + "}"]);
    if (f == "GET") {
        c = "request_GET(" + b + ",\"\",\"";
        c += getCompareFunctionName + "\");\n"
    } else {
        var a = Blockly.JavaScript.valueToCode(g, "params", Blockly.JavaScript.ORDER_ATOMIC);
        var e = g.getFieldValue("contentType");
        c = "request_POST({\n";
        c += "        url: " + b + ",\n";
        c += "        method: 'POST',\n";
        c += "        params: " + a + ",\n";
        c += "        contentType: '" + e + "',\n";
        c += "}, \"";
        c += getCompareFunctionName + "\");\n";
    }
    return c
};
Blockly.JavaScript.request_all_responsecode = function (b) {
    var a = "responseCode";
    return [a, Blockly.JavaScript.ORDER_ATOMIC]
};
Blockly.JavaScript.request_all_responsebody = function (b) {
    var a = "responseBody";
    return [a, Blockly.JavaScript.ORDER_ATOMIC]
};