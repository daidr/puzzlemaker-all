'use strict';

goog.provide('Blockly.Blocks.http');  // Deprecated
goog.provide('Blockly.Constants.http');

goog.require('Blockly.Blocks');

Blockly.Constants.http.HUE = Blockly.Msg["HTTP_HUE"];
Blockly.Blocks.http.HUE = Blockly.Constants.http.HUE;

Blockly.Blocks.http_all = {
    init: function () {
        this.appendDummyInput().appendField("HTTP网络访问");
        this.appendDummyInput().appendField("请求方法：").appendField(new Blockly.FieldDropdown([["GET", "GET"], ["POST", "POST"]], function (a) {
            this.sourceBlock_.updateShape_(a)
        }), "method");
        this.appendValueInput("url").setCheck("String").appendField("请求地址");
        this.appendStatementInput("callback").appendField("响应处理");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.http.HUE);
        this.setTooltip("HTTP网络访问");
        this.setHelpUrl("")
    }, mutationToDom: function () {
        var a = document.createElement("mutation");
        a.setAttribute("method", this.getFieldValue("method"));
        return a
    }, domToMutation: function (a) {
        var b = a.getAttribute("method");
        this.updateShape_(b)
    }, updateShape_: function (b) {
        var a = this.getFieldValue("method");
        if (b != a) {
            if (b == "GET") {
                this.removeInput("params");
                this.removeInput("contentTypeInput");
                this.unplug(true, true)
            } else {
                this.unplug(true, true);
                this.removeInput("callback");
                this.appendValueInput("params").setCheck(["String", "map"]).appendField("请求参数");
                this.appendDummyInput("contentTypeInput").appendField("请求媒体类型：").appendField(new Blockly.FieldDropdown([["application/json", "application/json"], ["application/x-www-form-urlencoded", "application/x-www-form-urlencoded"]]), "contentType");
                this.appendStatementInput("callback").appendField("响应处理");
                this.setPreviousStatement(true)
            }
        }
    }
};
Blockly.Blocks.http_all_responsebody = {
    init: function () {
        this.appendDummyInput().appendField("HTTP响应内容");
        this.setOutput(true);
        this.setColour(200);
        this.setTooltip("HTTP响应内容");
        this.setOutput(true, "String");
        this.setHelpUrl("")
    },
    onchange: function () {
        var a = false;
        var b = this;
        do {
            if (b.type == "http_all") {
                a = true;
                break
            } b = b.getSurroundParent()
        } while (b);
        if (a) {
            this.setWarningText(null)
        } else {
            this.setWarningText(Blockly.Msg.EVENT_HTTP_WARNING)
        }
    }
};
Blockly.Blocks.http_all_responsecode = {
    init: function () {
        this.appendDummyInput().appendField("HTTP响应状态码");
        this.setOutput(true);
        this.setColour(200);
        this.setTooltip("HTTP响应状态码");
        this.setOutput(true, "Number");
        this.setHelpUrl("")
    },
    onchange: function () {
        var a = false;
        var b = this;
        do {
            if (b.type == "http_all") {
                a = true;
                break
            }
            b = b.getSurroundParent()
        } while (b);
        if (a) {
            this.setWarningText(null)
        } else {
            this.setWarningText(Blockly.Msg.EVENT_HTTP_WARNING)
        }
    }
};