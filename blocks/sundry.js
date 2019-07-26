'use strict';

goog.provide('Blockly.Blocks.sundry');  // Deprecated
goog.provide('Blockly.Constants.sundry');

goog.require('Blockly.Blocks');

Blockly.defineBlocksWithJsonArray([
    {
        "type": "interface_left2vertical",
        "message0": "转接口_水平转垂直 %1",
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
    }
]);