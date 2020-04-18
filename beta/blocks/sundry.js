'use strict';

goog.provide('Blockly.Blocks.sundry');  // Deprecated
goog.provide('Blockly.Constants.sundry');

goog.require('Blockly.Blocks');

Blockly.defineBlocksWithJsonArray([
    {
        "type": "interface_left2vertical",
        "message0": "%1",
        "args0": [
            {
                "type": "input_value",
                "name": "actions"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 315,
        "tooltip": "使水平接口的拼图变为垂直接口（忽略返回值）",
        "helpUrl": ""
    }, {
        "type": "interface_left2left",
        "message0": "%1",
        "args0": [
            {
                "type": "input_value",
                "name": "actions"
            }
        ],
        "output": null,
        "colour": 315,
        "tooltip": "强制转换拼图的返回值类型",
        "helpUrl": ""
    }
]);

Blockly.Blocks['verify_md5_text'] = {
  init: function() {
    this.jsonInit({
      "message0": "校验字符串MD5 %1",
      "args0": [
        {
          "type": "input_value",
          "name": "string",
          "check": "String"
        }
      ],
      "output": "String",
      "colour": 315,
      "tooltip": "计算一个字符串的MD5并输出",
      "helpUrl": ""
    });
  }
};