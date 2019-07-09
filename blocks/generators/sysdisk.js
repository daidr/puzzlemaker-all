'use strict';

goog.provide('Blockly.JavaScript.sysdisk');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['sysdisk_getlocalpath'] = function (block) {
  var code = "getLocalpath()";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sysdisk_writefile'] = function (block) {
  var value_filepath = Blockly.JavaScript.valueToCode(block, 'filepath', Blockly.JavaScript.ORDER_ATOMIC);
  var value_filecontent = Blockly.JavaScript.valueToCode(block, 'filecontent', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "writeFile(" + value_filepath + "," + value_filecontent + ");\n";
  return code;
};

Blockly.JavaScript['sysdisk_readfile'] = function (block) {
  var value_filepath = Blockly.JavaScript.valueToCode(block, 'filepath', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "readFile(" + value_filepath + ")";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sysdisk_setkeytext'] = function (block) {
  var value_inipath = Blockly.JavaScript.valueToCode(block, 'inipath', Blockly.JavaScript.ORDER_ATOMIC);
  var value_inisection = Blockly.JavaScript.valueToCode(block, 'inisection', Blockly.JavaScript.ORDER_ATOMIC);
  var value_inikey = Blockly.JavaScript.valueToCode(block, 'inikey', Blockly.JavaScript.ORDER_ATOMIC);
  var value_inicontent = Blockly.JavaScript.valueToCode(block, 'inicontent', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "setKeyText(" + value_inipath + "," + value_inisection + "," + value_inikey + "," + value_inicontent + ");\n";
  return code;
};

Blockly.JavaScript['sysdisk_getkeytext'] = function (block) {
  var value_inipath = Blockly.JavaScript.valueToCode(block, 'inipath', Blockly.JavaScript.ORDER_ATOMIC);
  var value_inisection = Blockly.JavaScript.valueToCode(block, 'inisection', Blockly.JavaScript.ORDER_ATOMIC);
  var value_inikey = Blockly.JavaScript.valueToCode(block, 'inikey', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "getKeyText(" + value_inipath + "," + value_inisection + "," + value_inikey + ")";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sysdisk_hasfile'] = function (block) {
  var value_filepath = Blockly.JavaScript.valueToCode(block, 'filepath', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'hasFile(' + value_filepath + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sysdisk_deletefile'] = function (block) {
  var value_filepath = Blockly.JavaScript.valueToCode(block, 'filepath', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'deleteFile(' + value_filepath + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};