'use strict';

goog.provide('Blockly.Blocks.rotcode');  // Deprecated
goog.provide('Blockly.Constants.rotcode');

goog.require('Blockly.Blocks');

Blockly.defineBlocksWithJsonArray([{
  "type": "rotcode_at",
  "message0": "@QQ号为 %1 %2 的人，at后 %3 空格",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "QQID",
      "check": [
        "String",
        "Number"
      ],
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
  "colour": "%{BKY_ROTCODE_HUE}",
  "tooltip": "返回at指定QQ的动态码",
  "helpUrl": ""
},
{
  "type": "rotcode_shake",
  "message0": "窗口抖动(戳一戳)",
  "output": "String",
  "colour": "%{BKY_ROTCODE_HUE}",
  "tooltip": "返回抖动(戳一戳)的动态码",
  "helpUrl": ""
},
/* {
  "type": "cqcode_contact",
  "message0": "分享 %1 为 %2 %3 的名片",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "群号",
          "group"
        ],
        [
          "QQ号",
          "qq"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "number",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": "%{BKY_ROTCODE_HUE}",
  "tooltip": "输出名片CQ码",
  "helpUrl": ""
}, */
{
  "type": "rotcode_emoji_1",
  "message0": "一部分常用Emoji代码： %1",
  "args0": [{
    "type": "field_dropdown",
    "name": "emojiid",
    "options": [
      ["😀", "128512"],
      ["😁", "128513"],
      ["😂", "128514"],
      ["😱", "128561"],
      ["😒", "128530"],
      ["😎", "128526"],
      ["😍", "128525"],
      ["🙄", "128580"],
      ["🤑", "129297"],
      ["😝", "128541"]
    ]
  }],
  "output": "String",
  "colour": "%{BKY_ROTCODE_HUE}",
  "tooltip": "返回emoji表情动态码",
  "helpUrl": ""
}, /* {
	"type": "cqcode_emoji_2",
	"message0": "Emoji的Unicode编码： %1",
	"args0": [{
		"type": "field_input",
		"name": "emojiid",
		"text": "128512"
	}],
	"output": "String",
	"colour": "%{BKY_ROTCODE_HUE}",
	"tooltip": "输出emoji表情CQ码",
	"helpUrl": ""
},  */{
  "type": "rotcode_sface_1",
  "message0": "QQ小表情编码： %1",
  "args0": [{
    "type": "field_input",
    "name": "sfaceid",
    "text": "0"
  }],
  "output": "String",
  "colour": "%{BKY_ROTCODE_HUE}",
  "tooltip": "返回qq表情动态码",
  "helpUrl": ""
},
{
  "type": "rotcode_record",
  "message0": "发送语音 %1 %2 音频文件名 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "magic",
      "options": [
        [
          "添加「变声」标记",
          "true"
        ],
        [
          "不添加「变声」标记",
          "false"
        ]
      ]
    },
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
  "colour": "%{BKY_ROTCODE_HUE}",
  "tooltip": "返回发送语音的动态码，「音频文件名」需存放在机器人目录的「data\\record\\」下。",
  "helpUrl": ""
}
]);

Blockly.Blocks['rotcode_image'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("发送图片")
      .appendField("来自")
      .appendField(new Blockly.FieldDropdown([["磁盘", "1"], ["URL", "2"]], function (a) {
        this.sourceBlock_.updateShape_(a)
      }), "type");
    this.appendValueInput("cache")
      .setCheck("Boolean")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("是否开启缓存");
    this.appendValueInput("path")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("图片路径");
    this.setInputsInline(false);
    this.setOutput(true, "String");
    this.setColour(Blockly.Msg["ROTCODE_HUE"]);
    this.setTooltip("返回指定图片的动态码");
    this.setHelpUrl("");
  }, updateShape_: function (b) {
    var a = this.getFieldValue("type");
    if (b != a) {
      if (b == "1") {
        this.removeInput("path");
        this.appendValueInput("path")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("图片路径");
        this.setTooltip("返回指定磁盘路径下图片的动态码");
      } else if (b == "2") {
        this.removeInput("path");
        this.appendValueInput("path")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("图片URL");
        this.setTooltip("返回指定URL地址下图片的动态码");
      }
    }
  }
};