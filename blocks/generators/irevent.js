'use strict';

goog.provide('Blockly.JavaScript.irevent');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['ir_irevent_allevent'] = function(block) {
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  var dropdown_dispose = block.getFieldValue('dispose');
  var code = "function IREvent(event){\nvar eventarray = event.split('|,|,|,|,|');\n" + statements_action;
  code = code + "return \"" + dropdown_dispose + "\";" + "\n}\n";
  return code;
};

Blockly.JavaScript['ir_var_rotqq'] = function(b){var a="eventarray[0]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['ir_var_msgtype'] = function(b){var a="eventarray[1]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['ir_var_msgctype'] = function(b){var a="eventarray[2]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['ir_var_msgfrom'] = function(b){var a="eventarray[3]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['ir_var_trigger_active'] = function(b){var a="eventarray[4]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['ir_var_trigger_passive'] = function(b){var a="eventarray[5]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['ir_var_msgcontent'] = function(b){var a="eventarray[6]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['ir_var_msgnum'] = function(b){var a="eventarray[7]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['ir_var_msgid'] = function(b){var a="eventarray[8]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['ir_var_rawdata'] = function(b){var a="eventarray[9]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['ir_var_json'] = function(b){var a="eventarray[10]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};
Blockly.JavaScript['ir_var_pointer'] = function(b){var a="eventarray[11]";return[a,Blockly.JavaScript.ORDER_ATOMIC]};