'use strict';
var thisBlock, isQQ;

goog.provide('Blockly.Blocks.rotfunc');  // Deprecated
goog.provide('Blockly.Constants.rotfunc');

goog.require('Blockly.Blocks');

Blockly.Constants.rotfunc.HUE = Blockly.Msg["ROTFUNC_HUE"];
Blockly.Blocks.rotfunc.HUE = Blockly.Constants.rotfunc.HUE;

Blockly.defineBlocksWithJsonArray([
  {
    "type": "rot_sendmsg",
    "message0": "机器人_发送 %1 消息 %2 机器人QQ %3 号码 %4 消息内容 %5",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "type",
        "options": [
          [
            "群",
            "group"
          ],
          [
            "私聊",
            "private"
          ],
          [
            "讨论组",
            "discuss"
          ]
        ]
      },
      {
        "type": "input_dummy",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "rotqq",
        "check": [
          "Number",
          "String"
        ],
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "idnumber",
        "check": [
          "Number",
          "String"
        ],
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "msg",
        "check": "String",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_ROTFUNC_HUE}",
    "tooltip": "发送各类QQ消息",
    "helpUrl": ""
  },
  {
    "type": "rot_sendlike",
    "message0": "发送赞 %1 机器人QQ %2 号码 %3 次数 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "rotqq",
        "check": [
          "Number",
          "String"
        ],
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "idnumber",
        "check": [
          "Number",
          "String"
        ],
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "times",
        "check": [
          "Number",
          "String"
        ],
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_ROTFUNC_HUE}",
    "tooltip": "向指定QQ发送赞，最多10次",
    "helpUrl": ""
  },
  {
    "type": "rot_addlog",
    "message0": "输出 %1 日志 %2 日志内容 %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "type",
        "options": [
          [
            "信息",
            "info"
          ],
          [
            "调试",
            "debug"
          ],
          [
            "警告",
            "warning"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "content",
        "check": "String",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_ROTFUNC_HUE}",
    "tooltip": "输出各类型的日志，方便调试",
    "helpUrl": ""
  },
  {
    "type": "rot_jinyan",
    "message0": "禁言指定Q号 %1 机器人QQ %2 群号 %3 Q号 %4 时长(秒) %5",
    "args0": [
      {
        "type": "input_dummy",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "rotqq",
        "check": [
          "Number",
          "String"
        ],
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "groupnumber",
        "check": [
          "Number",
          "String"
        ],
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "idnumber",
        "check": [
          "Number",
          "String"
        ],
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "time",
        "check": [
          "Number",
          "String"
        ],
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_ROTFUNC_HUE}",
    "tooltip": "禁言指定QQ号，时间单位为秒。如果时间为0则为解禁。本参数无返回值",
    "helpUrl": ""
  },
  {
    "type": "rot_getgrouplist",
    "lastDummyAlign0": "RIGHT",
    "message0": "获取机器人加的所有群 %1 机器人QQ %2",
    "args0": [
      {
        "type": "input_dummy",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "rotqq",
        "check": [
          "Number",
          "String"
        ],
        "align": "RIGHT"
      }
    ],
    "inputsInline": false,
    "output": null,
    "colour": "%{BKY_ROTFUNC_HUE}",
    "tooltip": "输出机器人所加的所有群，格式为“xxxxxxx|xxxxxxx|xxxxxxx”",
    "helpUrl": ""
  },
  {
    "type": "rot_deleteMsg",
    "message0": "撤回指定消息 %1 机器人QQ %2 消息ID %3 消息序号 %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "rotqq",
        "check": [
          "Number",
          "String"
        ],
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "msgid",
        "check": [
          "Number",
          "String"
        ],
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "msgnum",
        "check": [
          "Number",
          "String"
        ],
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_ROTFUNC_HUE}",
    "tooltip": "撤回指定消息",
    "helpUrl": ""
  }
]);

Blockly.Blocks['rot_getusername'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("获取")
      .appendField(new Blockly.FieldDropdown([["QQ", "qq"]], function (value) {
        var newQQ = (value == 'qq');
        var block = this.sourceBlock_;
        block.updateAt_(newQQ);
        block.setFieldValue(value, 'type');
        return null;
      }), "type");
    this.appendValueInput("number")
      .setCheck(["Number", "String"])
      .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput('content')
      .appendField("的昵称");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.rotfunc.HUE);
    this.setTooltip("根据号码输出昵称，如果没有获取到则返回空");
    this.setHelpUrl("");
    thisBlock = this;
  },
  mutationToDom: function () {
    var container = document.createElement('mutation');
    var isQQ = this.getFieldValue('type') == "qq";
    container.setAttribute('type', isQQ);
    return container;
  },
  domToMutation: function (xmlElement) {
    var isTTSC = (xmlElement.getAttribute('type') != 'false');
    this.updateAt_(isTTSC);
  },
  updateAt_: function (isQQ) {
    this.removeInput('content');
    if (isQQ) {
      this.appendDummyInput('content')
        .appendField("的昵称");
    } else {
      this.appendDummyInput('content')
        .appendField("的群名称");
    }
  }
};