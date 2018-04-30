'use strict';

goog.provide('Blockly.JavaScript.http');

goog.require('Blockly.JavaScript');

Blockly.JavaScript.http_all = function (g) {
    var f = g.getFieldValue("method");
    var b = Blockly.JavaScript.valueToCode(g, "url", Blockly.JavaScript.ORDER_ATOMIC);
    var d = Blockly.JavaScript.statementToCode(g, "callback");
    var c = "";
    if (f == "GET") {
        c = "http_GET(" + b + ",function(responseCode, responseBody) {\n";
        c += d + "});\n"
    } else {
        var a = Blockly.JavaScript.valueToCode(g, "params", Blockly.JavaScript.ORDER_ATOMIC);
        var e = g.getFieldValue("contentType");
        c = "http_POST({\n";
        c += "        url: " + b + ",\n";
        c += "        method: 'POST',\n";
        c += "        params: " + a + ",\n";
        c += "        contentType: '" + e + "',\n";
        c += "}, function(responseCode, responseBody) {\n";
        c += d + "});\n"
    }
    return c
};
Blockly.JavaScript.http_all_responsecode = function (b) {
    var a = "responseCode";
    return [a, Blockly.JavaScript.ORDER_ATOMIC]
};
Blockly.JavaScript.http_all_responsebody = function (b) {
    var a = "responseBody";
    return [a, Blockly.JavaScript.ORDER_ATOMIC]
};