'use strict';

goog.provide('Blockly.JavaScript.request');

goog.require('Blockly.JavaScript');

Blockly.JavaScript.request_all = function (g) {
    var f = g.getFieldValue("method");
    var b = Blockly.JavaScript.valueToCode(g, "url", Blockly.JavaScript.ORDER_ATOMIC);
    var d = Blockly.JavaScript.statementToCode(g, "callback");
    var c = "";
    if (f == "GET") {
        c = "request_GET(" + b + ",function(responseCode, responseBody) {\n";
        c += d + "});\n"
    } else {
        var a = Blockly.JavaScript.valueToCode(g, "params", Blockly.JavaScript.ORDER_ATOMIC);
        var e = g.getFieldValue("contentType");
        c = "request_POST({\n";
        c += "        url: " + b + ",\n";
        c += "        method: 'POST',\n";
        c += "        params: " + a + ",\n";
        c += "        contentType: '" + e + "',\n";
        c += "}, function(responseCode, responseBody) {\n";
        c += d + "});\n"
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