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
    "message0": "%{BKY_ROTFUNC_SENDMSG}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "type",
        "options": [
          [
            "%{BKY_ROTFUNC_GROUP}",
            "group"
          ],
          [
            "%{BKY_ROTFUNC_PRIVATE}",
            "private"
          ],
          [
            "%{BKY_ROTFUNC_DISCUSS}",
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
    "tooltip": "%{BKY_ROTFUNC_SENDMSG_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "rot_sendvoicemsg",
    "message0": "%{BKY_ROTFUNC_SENDVOICEMSG}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "type",
        "options": [
          [
            "%{BKY_ROTFUNC_GROUP}",
            "group"
          ],
          [
            "%{BKY_ROTFUNC_PRIVATE}",
            "private"
          ],
          [
            "%{BKY_ROTFUNC_DISCUSS}",
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
    "tooltip": "%{BKY_ROTFUNC_SENDVOICEMSG_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "rot_sendlike",
    "message0": "%{BKY_ROTFUNC_SENDLIKE}",
    "args0": [
      {
        "type": "input_dummy"
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
    "tooltip": "%{BKY_ROTFUNC_SENDLIKE_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "rot_addlog",
    "message0": "%{BKY_ROTFUNC_ADDLOG}",
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
    "tooltip": "%{BKY_ROTFUNC_ADDLOG_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "rot_jinyan",
    "message0": "%{BKY_ROTFUNC_JINYAN}",
    "args0": [
      {
        "type": "input_dummy",
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
    "tooltip": "%{BKY_ROTFUNC_JINYAN_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "rot_getgrouplist",
    "lastDummyAlign0": "RIGHT",
    "message0": "%{BKY_ROTFUNC_GETGROUPLIST}",
    "args0": [
    ],
    "inputsInline": false,
    "output": null,
    "colour": "%{BKY_ROTFUNC_HUE}",
    "tooltip": "%{BKY_ROTFUNC_GETGROUPLIST_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "rot_deleteMsg",
    "message0": "%{BKY_ROTFUNC_DELETEMSG}",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "groupnum",
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
    "tooltip": "%{BKY_ROTFUNC_DELETEMSG_TOOLTIP}",
    "helpUrl": ""
  }
]);

Blockly.Blocks['rot_getusername'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg["ROTFUNC_GETUSERNAME_GET"])
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
      .appendField(Blockly.Msg["ROTFUNC_GETUSERNAME_NICKNAME"]);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.rotfunc.HUE);
    this.setTooltip(Blockly.Msg["ROTFUNC_GETUSERNAME_TOOLTIP"]);
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
        .appendField(Blockly.Msg["ROTFUNC_GETUSERNAME_NICKNAME"]);
    } else {
      this.appendDummyInput('content')
        .appendField(Blockly.Msg["ROTFUNC_GETUSERNAME_GROUPNAME"]);
    }
  }
};