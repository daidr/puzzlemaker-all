'use strict';

goog.provide('Blockly.JavaScript.ircode');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['ircode_at'] = function(block) {
  var text_qqid = Blockly.JavaScript.valueToCode(block, 'QQID', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_isnospace = block.getFieldValue('isNoSpace');
  if (dropdown_isnospace == "true") {
		var code2 = "'[IR:at='+" + text_qqid + "+']'";
	} else {
		var code2 = "'[IR:at='+" + text_qqid + "+'] '";
	}
  return [code2, Blockly.JavaScript.ORDER_NONE];
}; //OK

Blockly.JavaScript['ircode_emoji'] = function(block) {
  var text_emojiid = block.getFieldValue('emojiid');
  var code = "'[emoji='+" + text_emojiid + "+']'";
  return [code, Blockly.JavaScript.ORDER_NONE];
}; //OK

Blockly.JavaScript['ircode_sface'] = function(block) {
  var text_sfaceid = block.getFieldValue('sfaceid');
  var code = "'[Face'+" + text_sfaceid + "+'.gif]'";
  return [code, Blockly.JavaScript.ORDER_NONE];
}; //OK

/* 
Blockly.JavaScript['cqcode_record'] = function(block) {
  var dropdown_magic = block.getFieldValue('magic');
  var value_filename = Blockly.JavaScript.valueToCode(block, 'filename', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "'[CQ:record,file=' + " + value_filename + " + ',magic=" +dropdown_magic + "]'";
  return [code, Blockly.JavaScript.ORDER_NONE];
}; */