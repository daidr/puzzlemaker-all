'use strict';

goog.provide('Blockly.JavaScript.rotfunc');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['rot_sendmsg'] = function (block) {
  var dropdown_type = block.getFieldValue('type');
  //var value_rotqq = Blockly.JavaScript.valueToCode(block, 'rotqq', Blockly.JavaScript.ORDER_ATOMIC);
  var value_idnumber = Blockly.JavaScript.valueToCode(block, 'idnumber', Blockly.JavaScript.ORDER_ATOMIC);
  var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);

  if (dropdown_type == "group") {
    var code = "sendGroupMsg(eventarray[0]," + value_idnumber + "," + value_msg + ");\n"
  } else if (dropdown_type == "private") {
    var code = "sendPrivateMsg(eventarray[0]," + value_idnumber + "," + value_msg + ");\n"
  } else if (dropdown_type == "discuss") {
    var code = "sendDiscussMsg(eventarray[0]," + value_idnumber + "," + value_msg + ");\n"
  }
  return code;
};

Blockly.JavaScript['rot_sendvoicemsg'] = function (block) {
  var dropdown_type = block.getFieldValue('type');
  //var value_rotqq = Blockly.JavaScript.valueToCode(block, 'rotqq', Blockly.JavaScript.ORDER_ATOMIC);
  var value_idnumber = Blockly.JavaScript.valueToCode(block, 'idnumber', Blockly.JavaScript.ORDER_ATOMIC);
  var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);

  if (dropdown_type == "group") {
    var code = "sendGroupVoiceMsg(eventarray[0]," + value_idnumber + "," + value_msg + ");\n"
  } else if (dropdown_type == "private") {
    var code = "sendPrivateVoiceMsg(eventarray[0]," + value_idnumber + "," + value_msg + ");\n"
  } else if (dropdown_type == "discuss") {
    var code = "sendDiscussVoiceMsg(eventarray[0]," + value_idnumber + "," + value_msg + ");\n"
  }
  return code;
};


Blockly.JavaScript['rot_sendlike'] = function (block) {
  //var value_rotqq = Blockly.JavaScript.valueToCode(block, 'rotqq', Blockly.JavaScript.ORDER_ATOMIC);
  var value_idnumber = Blockly.JavaScript.valueToCode(block, 'idnumber', Blockly.JavaScript.ORDER_ATOMIC);
  var value_times = Blockly.JavaScript.valueToCode(block, 'times', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "sendLike(eventarray[0]," + value_idnumber + "," + value_times + ");\n";

  return code;
};

Blockly.JavaScript['rot_addlog'] = function (block) {
  var dropdown_type = block.getFieldValue('type');
  var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "addLog(\"" + dropdown_type + "\"," + value_content + ");\n";
  return code;
};

Blockly.JavaScript['rot_jinyan'] = function (block) {
  //var value_rotqq = Blockly.JavaScript.valueToCode(block, 'rotqq', Blockly.JavaScript.ORDER_ATOMIC);
  var value_groupnumber = Blockly.JavaScript.valueToCode(block, 'groupnumber', Blockly.JavaScript.ORDER_ATOMIC);
  var value_idnumber = Blockly.JavaScript.valueToCode(block, 'idnumber', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "setJinyan(eventarray[0]," + value_groupnumber + "," + value_idnumber + "," + value_time + ");\n";
  return code;
};

Blockly.JavaScript['rot_getgrouplist'] = function (block) {
  //var value_rotqq = Blockly.JavaScript.valueToCode(block, 'rotqq', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'getGroupList(eventarray[0])';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rot_getusername'] = function (block) {
  var dropdown_type = block.getFieldValue('type');
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "GetUserName(\"" + dropdown_type + "\"," + value_number + ")";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rot_deleteMsg'] = function (block) {
  //var value_rotqq = Blockly.JavaScript.valueToCode(block, 'rotqq', Blockly.JavaScript.ORDER_ATOMIC);
  var value_groupnum = Blockly.JavaScript.valueToCode(block, 'groupnum', Blockly.JavaScript.ORDER_ATOMIC);
  var value_msgid = Blockly.JavaScript.valueToCode(block, 'msgid', Blockly.JavaScript.ORDER_ATOMIC);
  var value_msgnum = Blockly.JavaScript.valueToCode(block, 'msgnum', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'deleteMsg(eventarray[0],' + value_groupnum + ',' + value_msgid + ',' + value_msgnum + ');\n';
  return code;
};