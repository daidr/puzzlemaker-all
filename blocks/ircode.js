'use strict';

goog.provide('Blockly.Blocks.ircode');  // Deprecated
goog.provide('Blockly.Constants.ircode');

goog.require('Blockly.Blocks');

Blockly.defineBlocksWithJsonArray([{
    "type": "ircode_at",
    "message0": "@QQ号为 %1 %2 的人，at后 %3 空格",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "QQID",
            "check": "Number",
            "align": "RIGHT"
        },
        {
            "type": "field_dropdown",
            "name": "isNoSpace",
            "options": [
                [
                    "加",
                    "false"
                ],
                [
                    "不加",
                    "true"
                ]
            ]
        }
    ],
    "inputsInline": true,
    "output": "String",
    "colour": "%{BKY_IRCODE_HUE}",
    "tooltip": "输出at指定QQ的IR动态变量",
    "helpUrl": ""
},  //ircode - at 处理完成

{
    "type": "ircode_emoji",
    "message0": "Emoji的表情编码： %1",
    "args0": [{
        "type": "field_input",
        "name": "emojiid",
        "text": "F09F989D"
    }],
    "output": "String",
    "colour": "%{BKY_IRCODE_HUE}",
    "tooltip": "输出emoji表情的IR动态变量",
    "helpUrl": ""
},  //ircode - emoji 处理完成

{
    "type": "ircode_sface",
    "message0": "QQ小表情编码： %1",
    "args0": [{
        "type": "field_input",
        "name": "sfaceid",
        "text": "1"
    }],
    "output": "String",
    "colour": "%{BKY_IRCODE_HUE}",
    "tooltip": "输出qq表情的IR动态变量",
    "helpUrl": ""
},  //ircode - face表情 处理完成

{
    "type": "ircode_record",
    "message0": "发送语音 %1 音频ID %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "filename",
            "check": "String",
            "align": "RIGHT"
        }
    ],
    "output": "String",
    "colour": "%{BKY_IRCODE_HUE}",
    "tooltip": "输出语音的IR动态变量",
    "helpUrl": ""
}

]);