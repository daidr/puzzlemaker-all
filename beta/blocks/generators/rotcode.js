'use strict';

goog.provide('Blockly.JavaScript.rotcode');
goog.require('Blockly.JavaScript');

Blockly.JavaScript['rotcode_at'] = function (block) {
  var text_qqid = Blockly.JavaScript.valueToCode(block, 'QQID', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_isnospace = block.getFieldValue('isNoSpace');
  var functionName = Blockly.JavaScript.provideFunction_(
    'sliceValue',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
      '(value) {',
      '  return value.slice(0, value.length / 2);',
      '}']);
  var code = functionName+"(rotcode_at(" + text_qqid + "," + dropdown_isnospace + "))";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rotcode_shake'] = function (block) {
  var code = "rotcode_shake()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/* Blockly.JavaScript['cqcode_contact'] = function (block) {
  var dropdown_type = block.getFieldValue('TYPE');
  var text_id = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "'[CQ:contact,type=' + '" + dropdown_type + "' + ',id=' + " + text_id + " + ']'";
  return [code, Blockly.JavaScript.ORDER_NONE];
}; */

Blockly.JavaScript['rotcode_emoji_1'] = function (block) {
  var dropdown_emojiid = block.getFieldValue('emojiid');
  var functionName = Blockly.JavaScript.provideFunction_(
    'sliceValue',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
      '(value) {',
      '  return value.slice(0, value.length / 2);',
      '}']);
  var code = functionName+"(rotcode_emoji(" + dropdown_emojiid + "))";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

/* Blockly.JavaScript['cqcode_emoji_2'] = function (block) {
  var text_emojiid = block.getFieldValue('emojiid');
  var code = "'[CQ:emoji,id='+" + text_emojiid + "+']'";
  return [code, Blockly.JavaScript.ORDER_NONE];
}; */

Blockly.JavaScript['rotcode_sface_1'] = function (block) {
  var text_sfaceid = block.getFieldValue('sfaceid');
  var functionName = Blockly.JavaScript.provideFunction_(
    'sliceValue',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
      '(value) {',
      '  return value.slice(0, value.length / 2);',
      '}']);
  var code = functionName+"(rotcode_sface(" + text_sfaceid + "))";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rotcode_record'] = function (block) {
  var dropdown_magic = block.getFieldValue('magic');
  var value_filename = Blockly.JavaScript.valueToCode(block, 'filename', Blockly.JavaScript.ORDER_ATOMIC);
  var functionName = Blockly.JavaScript.provideFunction_(
    'sliceValue',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
      '(value) {',
      '  return value.slice(0, value.length / 2);',
      '}']);
  var code = functionName+"(rotcode_record(" + dropdown_magic + "," + value_filename + "))";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rotcode_image'] = function (block) {
  var dropdown_type = block.getFieldValue('type');
  var value_cache = Blockly.JavaScript.valueToCode(block, 'cache', Blockly.JavaScript.ORDER_ATOMIC);
  var value_path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
  var functionName = Blockly.JavaScript.provideFunction_(
    'sliceValue',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
      '(value) {',
      '  return value.slice(0, value.length / 2);',
      '}']);
  var code = functionName+"(rotcode_image(" + dropdown_type + "," + value_cache + "," + value_path + "))";
  return [code, Blockly.JavaScript.ORDER_NONE];
};