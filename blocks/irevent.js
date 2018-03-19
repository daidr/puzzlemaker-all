'use strict';

goog.provide('Blockly.Blocks.irevent');  // Deprecated
goog.provide('Blockly.Constants.irevent');

goog.require('Blockly.Blocks');


Blockly.defineBlocksWithJsonArray([{
  "type": "ir_irevent_allevent",
  "lastDummyAlign0": "RIGHT",
  "message0": "创建IR通用事件 %1 %2 将消息 %3",
  "args0": [
	{
		"type": "input_dummy",
		"align": "CENTRE"
	},
    {
      "type": "input_statement",
      "name": "action",
      "check": "Action"
    },
    {
      "type": "field_dropdown",
      "name": "dispose",
      "options": [
        [
          "拦截",
          "1"
        ],
        [
          "忽略",
          "0"
        ]
      ]
    }
  ],
  "colour": "%{BKY_IREVENT_HUE}",
  "tooltip": "IR处理事件会调用本函数",
  "helpUrl": ""
}
]);


//申明动态变量

Blockly.Blocks.ir_var_rotqq = {
	init: function() {
		this.appendDummyInput().appendField("机器人QQ");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("多Q版用于判定哪个QQ接收到该消息")
	}
};

Blockly.Blocks.ir_var_msgtype = {
	init: function() {
		this.appendDummyInput().appendField("消息类型");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("接收到消息类型，该类型可在常量表中查询具体定义，此处仅列举： -1,未定义事件 0,在线状态临时会话 1,好友信息 2,群信息 3,讨论组信息 4,群临时会话 5,讨论组临时会话 6,财付通转账 7,好友验证回复会话")
	}
};

Blockly.Blocks.ir_var_msgctype = {
	init: function() {
		this.appendDummyInput().appendField("消息子类型");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("此参数在不同消息类型下，有不同的定义，暂定：接收财付通转账时 1为好友 4为群临时会话 5为讨论组临时会话\n有人请求入群时，不良成员这里为1")
	}
};

Blockly.Blocks.ir_var_msgfrom = {
	init: function() {
		this.appendDummyInput().appendField("消息来源");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("此消息的来源，如：群号、讨论组ID、临时会话QQ、好友QQ等")
	}
};

Blockly.Blocks.ir_var_trigger_active = {
	init: function() {
		this.appendDummyInput().appendField("触发对象_主动");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("主动发送这条消息的QQ，踢人时为踢人管理员QQ")
	}
};

Blockly.Blocks.ir_var_trigger_passive = {
	init: function() {
		this.appendDummyInput().appendField("触发对象_被动");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("被动触发的QQ，如某人被踢出群，则此参数为被踢出人QQ")
	}
};

Blockly.Blocks.ir_var_msgcontent = {
	init: function() {
		this.appendDummyInput().appendField("消息内容");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("此参数有多重含义，常见为：对方发送的消息内容，但当消息类型为 某人申请入群，则为入群申请理由")
	}
};

Blockly.Blocks.ir_var_msgnum = {
	init: function() {
		this.appendDummyInput().appendField("消息序号");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("此参数暂定用于消息回复，消息撤回")
	}
};

Blockly.Blocks.ir_var_msgid = {
	init: function() {
		this.appendDummyInput().appendField("消息ID");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("此参数暂定用于消息回复，消息撤回")
	}
};

Blockly.Blocks.ir_var_rawdata = {
	init: function() {
		this.appendDummyInput().appendField("原始信息");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("UDP收到的原始信息，特殊情况下会返回JSON结构")
	}
};

Blockly.Blocks.ir_var_json = {
	init: function() {
		this.appendDummyInput().appendField("Json");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("JSON格式转账解析")
	}
};

Blockly.Blocks.ir_var_pointer = {
	init: function() {
		this.appendDummyInput().appendField("信息回传文本指针_Out");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("在PuzzleMaker中暂时无法使用")
	}
};

