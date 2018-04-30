'use strict';

goog.provide('Blockly.Blocks.rotevent');  // Deprecated
goog.provide('Blockly.Constants.rotevent');

goog.require('Blockly.Blocks');


Blockly.defineBlocksWithJsonArray([{
	"type": "rotevent_allevent",
	"lastDummyAlign0": "RIGHT",
	"message0": "创建机器人事件 响应 %1 %2 将消息 %3",
	"args0": [
		{
			"type": "input_value",
			"name": "eventTypeInput",
			"check": "eventType"
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
	"colour": "%{BKY_ROTEVENT_HUE}",
	"tooltip": "机器人收到群消息会调用本函数",
	"helpUrl": ""
}
]);


//申明动态变量
Blockly.Blocks.event_rotqq = {
	init: function () {
		this.appendDummyInput().appendField("机器人QQ");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("收到该消息的机器人QQ")
	},
	onchange: function (b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) { }
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ROTEVENT_WARNING);
		}
	},
	EVENT_TYPES: ["ROTGroupMsg", "ROTFriendMsg", "ROTDiscussMsg"]
};

Blockly.Blocks.event_time = {
	init: function () {
		this.appendDummyInput().appendField("收到消息的时间(时间戳)");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("收到消息时的时间")
	},
	onchange: function (b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) { }
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ROTEVENT_WARNING);
		}
	},
	EVENT_TYPES: ["ROTGroupMsg", "ROTFriendMsg", "ROTDiscussMsg"]
};

Blockly.Blocks.event_msgtype = {
	init: function () {
		this.appendDummyInput('content').appendField("消息类型");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("相应的消息类型");
	},
	onchange: function (b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					switch (c.inputList[0].connection.targetBlock().getFieldValue("event_type")) {
						case "ROTFriendMsg":
							this.removeInput('content');
							this.appendDummyInput('content').appendField("私聊消息类型(详细请悬浮查看)");
							this.setTooltip("1/来自好友 2/来自群 3/来自讨论组 4/来自在线状态");
							break;
						case "ROTGroupMsg":
							this.removeInput('content');
							this.appendDummyInput('content').appendField("消息类型(群聊暂时没有用)");
							this.setTooltip("群聊暂时没有用");
							break;
						case "ROTDiscussMsg":
							this.removeInput('content');
							this.appendDummyInput('content').appendField("消息类型(讨论组暂时没有用)");
							this.setTooltip("讨论组暂时没有用");
							break;
						default:
							this.removeInput('content');
							this.appendDummyInput('content').appendField("私聊消息类型");
							this.setTooltip("相应的消息类型");
							break;
					}
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) { }
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ROTEVENT_WARNING);
		}
	},
	EVENT_TYPES: ["ROTGroupMsg", "ROTFriendMsg", "ROTDiscussMsg"]
};

Blockly.Blocks.event_msgid = {
	init: function () {
		this.appendDummyInput().appendField("消息ID(用于撤回/回复)");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("酷Q输出消息ID，IR输出消息ID");
	},
	onchange: function (b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) { }
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ROTEVENT_WARNING);
		}
	},
	EVENT_TYPES: ["ROTGroupMsg", "ROTFriendMsg", "ROTDiscussMsg"]
};

Blockly.Blocks.event_msgnum = {
	init: function () {
		this.appendDummyInput().appendField("消息序号(用于撤回/回复)");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("酷Q恒为0，IR输出消息序号");
	},
	onchange: function (b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) { }
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ROTEVENT_WARNING);
		}
	},
	EVENT_TYPES: ["ROTGroupMsg", "ROTFriendMsg", "ROTDiscussMsg"]
};

Blockly.Blocks.event_msgfrom = {
	init: function () {
		this.appendDummyInput('content').appendField("消息来源");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("私聊: 消息类型不为1时返回群号或讨论组号\n群聊或讨论组: 返回群号或讨论组号");
	},
	onchange: function (b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					switch (c.inputList[0].connection.targetBlock().getFieldValue("event_type")) {
						case "ROTFriendMsg":
							this.removeInput('content');
							this.appendDummyInput('content').appendField("消息来源");
							this.setTooltip("私聊: 消息类型不为1时返回群号或讨论组号");
							break;
						case "ROTGroupMsg":
							this.removeInput('content');
							this.appendDummyInput('content').appendField("消息来源群");
							this.setTooltip("群聊: 返回群号");
							break;
						case "ROTDiscussMsg":
							this.removeInput('content');
							this.appendDummyInput('content').appendField("消息来源讨论组");
							this.setTooltip("讨论组: 返回讨论组号");
							break;
						default:
							this.removeInput('content');
							this.appendDummyInput('content').appendField("消息来源");
							this.setTooltip("私聊: 消息类型不为1时返回群号或讨论组号\n群聊或讨论组: 返回群号或讨论组号");
							break;
					}
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) { }
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ROTEVENT_WARNING);
		}
	},
	EVENT_TYPES: ["ROTGroupMsg", "ROTFriendMsg", "ROTDiscussMsg"]
};

Blockly.Blocks.event_person = {
	init: function () {
		this.appendDummyInput().appendField("消息发送者");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("发送该消息的人(QQ号)");
	},
	onchange: function (b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) { }
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ROTEVENT_WARNING);
		}
	},
	EVENT_TYPES: ["ROTGroupMsg", "ROTFriendMsg", "ROTDiscussMsg"]
};

Blockly.Blocks.event_msg = {
	init: function () {
		this.appendDummyInput().appendField("消息内容");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("消息的具体内容");
	},
	onchange: function (b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) { }
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ROTEVENT_WARNING);
		}
	},
	EVENT_TYPES: ["ROTGroupMsg", "ROTFriendMsg", "ROTDiscussMsg"]
};


/* 
//群添加事件的参数拼图申明

Blockly.Blocks.subtype_addgroup = {
	init: function() {
		this.appendDummyInput().appendField("请求的类型");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在机器人群添加事件内部（1/他人申请入群 2/自己受邀入群）")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ADDGROUP_WARNING);
		}
	},
	EVENT_TYPES: ["ROTAddGroup"]
};

Blockly.Blocks.fromtime_addgroup = {
	init: function() {
		this.appendDummyInput().appendField("发送消息的时间(时间戳)");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在机器人群添加事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ADDGROUP_WARNING);
		}
	},
	EVENT_TYPES: ["ROTAddGroup"]
};

Blockly.Blocks.fromgroup_addgroup = {
	init: function() {
		this.appendDummyInput().appendField("请求来源的群");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在机器人群添加事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ADDGROUP_WARNING);
		}
	},
	EVENT_TYPES: ["ROTAddGroup"]
};

Blockly.Blocks.fromqq_addgroup = {
	init: function() {
		this.appendDummyInput().appendField("请求来源的QQ");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在机器人群添加事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ADDGROUP_WARNING);
		}
	},
	EVENT_TYPES: ["ROTAddGroup"]
};

Blockly.Blocks.responseFlag_addgroup = {
	init: function() {
		this.appendDummyInput().appendField("请求的唯一标识");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在机器人群添加事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ADDGROUP_WARNING);
		}
	},
	EVENT_TYPES: ["ROTAddGroup"]
};

Blockly.Blocks.msg_addgroup = {
	init: function() {
		this.appendDummyInput().appendField("请求的附加消息");
		this.setOutput(true, "String");
		this.setColour(210);
		this.setTooltip("只能用在机器人群添加事件内部")
	},
	onchange: function(b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				try {
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (b) {}
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ADDGROUP_WARNING);
		}
	},
	EVENT_TYPES: ["ROTAddGroup"]
};

*/

Blockly.Blocks.event_rotsys = {
	init: function () {
		this.appendDummyInput().appendField("机器人").appendField(new Blockly.FieldDropdown([
			["收到群消息", "ROTGroupMsg"],
			["收到私聊消息", "ROTPrivateMsg"],
			["收到讨论组消息", "ROTDiscussMsg"],
			//["收到群添加事件", "ROTAddGroup"]
		]), "event_type");
		this.setOutput(true, "eventType");
		this.setColour(210);
		this.setTooltip("机器人相关的事件");
	}
}; 