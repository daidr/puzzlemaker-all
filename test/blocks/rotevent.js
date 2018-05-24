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
			"check": "ROTEvent"
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

Blockly.Blocks.event_rotsys = {
	init: function () {
		this.appendDummyInput().appendField(new Blockly.FieldDropdown([
			["收到群消息", "ROTGroupMsg"],
			["收到私聊消息", "ROTPrivateMsg"],
			["收到讨论组消息", "ROTDiscussMsg"]
		]), "event_type");
		this.setOutput(true, "ROTEvent");
		this.setColour(210);
		this.setTooltip("机器人相关的事件");
	}
};

Blockly.Blocks.event_values = {
	init: function () {
		this.appendDummyInput().appendField("获取事件参数").appendField(new Blockly.FieldDropdown([
			["机器人QQ", "0"], /* event_rotqq */
			["收到消息的时间", "1"], /* event_time */
			["消息类型", "2"], /* event_msgtype */
			["消息ID", "3"], /* event_msgid */
			["消息序号", "4"], /* event_msgnum */
			["消息来源", "5"], /*event_msgfrom */
			["消息发送者", "6"], /* event_person */
			["消息内容", "7"] /* event_msg */
		]), "event_values");
		this.setOutput(true, ["String", "Number"]);
		this.setColour(210);
		this.setTooltip("机器人相关的事件的参数");
	},
	onchange: function (b) {
		var a = false;
		var c = this;
		do {
			if (c.getInput("eventTypeInput") != null) {
				var l_event_type;//群1 私聊2 讨论组3 默认4
				try {
					switch (c.inputList[0].connection.targetBlock().getFieldValue("event_type")) {
						case "ROTPrivateMsg":
							l_event_type = 2;
							break;
						case "ROTGroupMsg":
							l_event_type = 1;
							break;
						case "ROTDiscussMsg":
							l_event_type = 3;
							break;
						default:
							l_event_type = 4;
							break;
					}
				} catch (error) { }
				try {
					switch (this.getFieldValue("event_values")) {
						case "0":
							this.setTooltip("收到该消息的机器人QQ");
							break;
						case "1":
							this.setTooltip("收到消息时的时间戳");
							break;
						case "2":
							if (l_event_type === 1) {
								this.setTooltip("1/来自好友 2/来自群 3/来自讨论组 4/来自在线状态");
							} else if (l_event_type === 2) {
								this.setTooltip("群聊暂时没有用");
							} else if (l_event_type === 3) {
								this.setTooltip("讨论组暂时没有用");
							} else {
								this.setTooltip("相应的消息类型");
							}
							break;
						case "3":
							this.setTooltip("酷Q输出消息ID，IR输出消息ID");
							break;
						case "4":
							this.setTooltip("酷Q恒为0，IR输出消息序号");
							break;
						case "5":
							if (l_event_type === 1) {
								this.setTooltip("私聊: 消息类型不为1时返回群号或讨论组号");
							} else if (l_event_type === 2) {
								this.setTooltip("群聊: 返回群号");
							} else if (l_event_type === 3) {
								this.setTooltip("讨论组: 返回讨论组号");
							} else {
								this.setTooltip("私聊: 消息类型不为1时返回群号或讨论组号\n群聊或讨论组: 返回群号或讨论组号");
							}
							break;
						case "6":
							this.setTooltip("发送该消息的人(QQ号)");
							break;
						case "7":
							this.setTooltip("消息的具体内容");
							break;
						default:
							this.setTooltip("机器人相关的事件的参数");
							break;
					}
					if (this.EVENT_TYPES.indexOf(c.inputList[0].connection.targetBlock().getFieldValue("event_type")) != -1) {
						a = true;
						break
					}
				} catch (error) { }
			}
			c = c.getSurroundParent()
		} while (c);
		if (a) {
			this.setWarningText(null);
		} else {
			this.setWarningText(Blockly.Msg.EVENT_ROTEVENT_WARNING);
		}
	},
	EVENT_TYPES: ["ROTGroupMsg", "ROTPrivateMsg", "ROTDiscussMsg"]
}; 