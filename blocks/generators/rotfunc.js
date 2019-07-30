'use strict';

goog.provide('Blockly.JavaScript.rotfunc');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['rot_sendmsg'] = function (block) {
  var dropdown_type = block.getFieldValue('type');
  var value_rotqq = Blockly.JavaScript.valueToCode(block, 'rotqq', Blockly.JavaScript.ORDER_ATOMIC);
  var value_idnumber = Blockly.JavaScript.valueToCode(block, 'idnumber', Blockly.JavaScript.ORDER_ATOMIC);
  var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);

  if (dropdown_type == "group") {
    var code = "sendGroupMsg(" + value_rotqq + "," + value_idnumber + "," + value_msg + ");\n"
  } else if (dropdown_type == "private") {
    var code = "sendPrivateMsg(" + value_rotqq + "," + value_idnumber + "," + value_msg + ");\n"
  } else if (dropdown_type == "discuss") {
    var code = "sendDiscussMsg(" + value_rotqq + "," + value_idnumber + "," + value_msg + ");\n"
  }
  return code;
};


Blockly.JavaScript['rot_sendlike'] = function (block) {
  var value_rotqq = Blockly.JavaScript.valueToCode(block, 'rotqq', Blockly.JavaScript.ORDER_ATOMIC);
  var value_idnumber = Blockly.JavaScript.valueToCode(block, 'idnumber', Blockly.JavaScript.ORDER_ATOMIC);
  var value_times = Blockly.JavaScript.valueToCode(block, 'times', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "sendLike(" + value_rotqq + "," + value_idnumber + "," + value_times + ");\n";

  return code;
};

Blockly.JavaScript['rot_addlog'] = function (block) {
  var dropdown_type = block.getFieldValue('type');
  var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "addLog(\"" + dropdown_type + "\"," + value_content + ");\n";
  return code;
};

Blockly.JavaScript['rot_jinyan'] = function (block) {
  var value_rotqq = Blockly.JavaScript.valueToCode(block, 'rotqq', Blockly.JavaScript.ORDER_ATOMIC);
  var value_groupnumber = Blockly.JavaScript.valueToCode(block, 'groupnumber', Blockly.JavaScript.ORDER_ATOMIC);
  var value_idnumber = Blockly.JavaScript.valueToCode(block, 'idnumber', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "setJinyan(" + value_rotqq + "," + value_groupnumber + "," + value_idnumber + "," + value_time + ");\n";
  return code;
};

Blockly.JavaScript['rot_getgrouplist'] = function (block) {
  var value_rotqq = Blockly.JavaScript.valueToCode(block, 'rotqq', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'getGroupList(' + value_rotqq + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rot_getgroupmanager'] = function (block) {
  var value_rotqq = Blockly.JavaScript.valueToCode(block, 'rotqq', Blockly.JavaScript.ORDER_ATOMIC);
  var value_groupnumber = Blockly.JavaScript.valueToCode(block, 'groupnumber', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'getGroupManager(' + value_rotqq + ',' + value_groupnumber + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rot_getusername'] = function (block) {
  var dropdown_type = block.getFieldValue('type');
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "GetUserName(\"" + dropdown_type + "\"," + value_number + ")";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rot_deleteMsg'] = function (block) {
  var value_rotqq = Blockly.JavaScript.valueToCode(block, 'rotqq', Blockly.JavaScript.ORDER_ATOMIC);
  var value_groupnum = Blockly.JavaScript.valueToCode(block, 'groupnum', Blockly.JavaScript.ORDER_ATOMIC);
  var value_msgid = Blockly.JavaScript.valueToCode(block, 'msgid', Blockly.JavaScript.ORDER_ATOMIC);
  var value_msgnum = Blockly.JavaScript.valueToCode(block, 'msgnum', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'deleteMsg(' + value_rotqq + ',' + value_groupnum + ',' + value_msgid + ',' + value_msgnum + ');\n';
  return code;
};

Blockly.JavaScript['rot_kickMember'] = function(block) {
  var value_rotqq = Blockly.JavaScript.valueToCode(block, 'rotqq', Blockly.JavaScript.ORDER_ATOMIC);
  var value_groupnum = Blockly.JavaScript.valueToCode(block, 'groupnum', Blockly.JavaScript.ORDER_ATOMIC);
  var value_qqnum = Blockly.JavaScript.valueToCode(block, 'qqnum', Blockly.JavaScript.ORDER_ATOMIC);
  var value_canreapply = Blockly.JavaScript.valueToCode(block, 'canReapply', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'kickMember(' + value_rotqq + ',' + value_groupnum + ',' + value_qqnum + ',' + value_canreapply + ');\n';
  return code;
};