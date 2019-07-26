'use strict';

goog.provide('Blockly.JavaScript.sundry');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['interface_left2vertical'] = function (block) {
  var value_actions = Blockly.JavaScript.valueToCode(block, 'actions', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_actions + ';\n';
  return code;
};