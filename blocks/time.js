'use strict';

goog.provide('Blockly.Blocks.time');  // Deprecated
goog.provide('Blockly.Constants.time');

goog.require('Blockly.Blocks');

Blockly.defineBlocksWithJsonArray([{
  "type": "rot_timestamptostr",
  "message0": "时间戳转时间 %1 时间戳 %2",
  "args0": [
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "timestamp",
      "check": [
        "Number",
        "String"
      ],
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": "String",
  "colour": "%{BKY_TIME_HUE}",
  "tooltip": "将时间戳转为文本。输出格式为“2017-11-01 11:11:11”",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([{
  "type": "rot_timestamptoweekday",
  "message0": "时间戳转星期 %1 时间戳 %2",
  "args0": [
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "timestamp",
      "check": [
        "Number",
        "String"
      ],
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": "String",
  "colour": "%{BKY_TIME_HUE}",
  "tooltip": "将时间戳转为星期。输出0-6的整数，0为周日，1为周一，2为周二，以此类推",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([{
  "type": "rot_timestamptostrx",
  "message0": "时间戳转时间 %1 时间戳 %2 日期格式 %3 时间格式 %4",
  "args0": [
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "timestamp",
      "check": [
        "Number",
        "String"
      ],
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "dateformat",
      "check": [
        "String"
      ],
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "timeformat",
      "check": [
        "String"
      ],
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": "String",
  "colour": "%{BKY_TIME_HUE}",
  "tooltip": "将时间戳转为文本。输出格式按照你的设定而定",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([{
  "type": "rot_sleep",
  "message0": "延时 %1 毫秒",
  "args0": [
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_TIME_HUE}",
  "tooltip": "sleep - 暂停当前插件并停止处理一段时间",
  "helpUrl": ""
},
{
  "type": "rot_gettimestamp",
  "message0": "获取实际时间戳",
  "output": ["String", "Number"],
  "colour": "%{BKY_TIME_HUE}",
  "tooltip": "获取运行时的实际时间戳(13位)",
  "helpUrl": ""
}
]);

Blockly.defineBlocksWithJsonArray([{
  "type": "rot_timestamptogmtstring",
  "message0": "时间戳转GMT时间 %1 时间戳 %2",
  "args0": [
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "timestamp",
      "check": [
        "Number",
        "String"
      ],
      "align": "RIGHT"
    }
  ],
  "inputsInline": false,
  "output": "String",
  "colour": "%{BKY_TIME_HUE}",
  "tooltip": "将时间戳转为GMT时间格式。输出格式为“Wed, 01 Nov 2017 03:11:11 GMT”",
  "helpUrl": ""
}
]);

Blockly.Blocks['time_timer_folder'] = {
  init: function () {
    this.appendValueInput("timeout")
      .setCheck(["Number", "String"])
      .appendField("在");
    this.appendDummyInput()
      .appendField("毫秒后执行");
    this.appendStatementInput("actions")
      .setCheck("Action")
      .appendField("计时器");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("根据设定的时间延迟执行内部拼图，不会阻塞后面拼图的执行");
    this.setHelpUrl("");
  }
};