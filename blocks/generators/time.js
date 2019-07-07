'use strict';

goog.provide('Blockly.JavaScript.time');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['rot_timestamptostr'] = function (block) {
  var value_timestamp = Blockly.JavaScript.valueToCode(block, 'timestamp', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'timestampToStr(' + value_timestamp + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rot_timestamptostrx'] = function (block) {
  var value_timestamp = Blockly.JavaScript.valueToCode(block, 'timestamp', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dateformat = Blockly.JavaScript.valueToCode(block, 'dateformat', Blockly.JavaScript.ORDER_ATOMIC);
  var value_timeformat = Blockly.JavaScript.valueToCode(block, 'timeformat', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'timestampToStrX(' + value_timestamp + "," + value_dateformat + "," + value_timeformat + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
