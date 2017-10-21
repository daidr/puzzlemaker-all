'use strict';

goog.provide('Blockly.JavaScript.cqcode');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['cqcode_at'] = function(block) {
  var text_qqid = Blockly.JavaScript.valueToCode(block, 'QQID', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_isnospace = block.getFieldValue('isNoSpace');
  if (dropdown_isnospace == "true") {
		var code2 = "'[CQ:at,qq='+" + text_qqid + "+']'";
	} else {
		var code2 = "'[CQ:at,qq='+" + text_qqid + "+'] '";
	}
  return [code2, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cqcode_shake'] = function(block) {
  var code = Blockly.JavaScript.quote_('[CQ:shake]');
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cqcode_contact'] = function(block) {
  var dropdown_type = block.getFieldValue('TYPE');
  var text_id = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "[CQ:contact,type=" + dropdown_type + ",id=" + text_id + "]";
  code = Blockly.JavaScript.quote_(code);
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cqcode_emoji_1'] = function(block) {
  var dropdown_emojiid = block.getFieldValue('emojiid');
  var code = "[CQ:emoji,id=" + dropdown_emojiid + "]";
  code = Blockly.JavaScript.quote_(code);
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cqcode_emoji_2'] = function(block) {
  var text_emojiid = block.getFieldValue('emojiid');
  var code = "[CQ:emoji,id=" + text_emojiid + "]";
  code = Blockly.JavaScript.quote_(code);
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['cqcode_sface_1'] = function(block) {
  var text_sfaceid = block.getFieldValue('sfaceid');
  var code = "[CQ:sface,id=" + text_sfaceid + "]";
  code = Blockly.JavaScript.quote_(code);
  return [code, Blockly.JavaScript.ORDER_NONE];
};