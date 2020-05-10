'use strict';

goog.provide('Blockly.JavaScript.sysdisk');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['sysdisk_getlocalpath'] = function (block) {
  var functionName = Blockly.JavaScript.provideFunction_(
    'sliceValue',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
      '(value) {',
      '  return value.slice(0, value.length / 2);',
      '}']);
  var code = functionName + "(getLocalpath())";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sysdisk_writefile'] = function (block) {
  var value_filepath = Blockly.JavaScript.valueToCode(block, 'filepath', Blockly.JavaScript.ORDER_ATOMIC);
  var value_filecontent = Blockly.JavaScript.valueToCode(block, 'filecontent', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "writeFile(" + value_filepath + "," + value_filecontent + ");\n";
  return code;
};

Blockly.JavaScript['sysdisk_appendfile'] = function (block) {
  var value_filepath = Blockly.JavaScript.valueToCode(block, 'filepath', Blockly.JavaScript.ORDER_ATOMIC);
  var value_appendcontent = Blockly.JavaScript.valueToCode(block, 'appendcontent', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "appendFile(" + value_filepath + "," + value_appendcontent + ");\n";
  return code;
};

Blockly.JavaScript['sysdisk_readfile'] = function (block) {
  var value_filepath = Blockly.JavaScript.valueToCode(block, 'filepath', Blockly.JavaScript.ORDER_ATOMIC);
  var functionName = Blockly.JavaScript.provideFunction_(
    'sliceValue',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
      '(value) {',
      '  return value.slice(0, value.length / 2);',
      '}']);
  var code = functionName + "(readFile(" + value_filepath + "))";
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
  var functionName = Blockly.JavaScript.provideFunction_(
    'sliceValue',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
      '(value) {',
      '  return value.slice(0, value.length / 2);',
      '}']);
  var code = functionName + "(getKeyText(" + value_inipath + "," + value_inisection + "," + value_inikey + "))";
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

Blockly.JavaScript['sysdisk_openFileStream'] = function (block) {
  var value_filepath = Blockly.JavaScript.valueToCode(block, 'filepath', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'openFileStream(' + value_filepath + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sysdisk_closeFileStream'] = function (block) {
  var value_fileindex = Blockly.JavaScript.valueToCode(block, 'fileindex', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'closeFileStream(' + value_fileindex + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sysdisk_getFileStreamCurPos'] = function (block) {
  var value_fileindex = Blockly.JavaScript.valueToCode(block, 'fileindex', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'getFileStreamCurPos(' + value_fileindex + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sysdisk_moveFileStreamCurPos'] = function (block) {
  var value_fileindex = Blockly.JavaScript.valueToCode(block, 'fileindex', Blockly.JavaScript.ORDER_ATOMIC);
  var value_initialpos = Blockly.JavaScript.valueToCode(block, 'initialpos', Blockly.JavaScript.ORDER_ATOMIC);
  var value_movedistance = Blockly.JavaScript.valueToCode(block, 'movedistance', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'getFileStreamCurPos(' + value_fileindex + ',' + value_initialpos + ',' + value_movedistance + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sysdisk_sysdisk_isFileStreamEOF'] = function (block) {
  var value_fileindex = Blockly.JavaScript.valueToCode(block, 'fileindex', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'isFileStreamEOF(' + value_fileindex + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sysdisk_writeFileStream'] = function (block) {
  var value_fileindex = Blockly.JavaScript.valueToCode(block, 'fileindex', Blockly.JavaScript.ORDER_ATOMIC);
  var value_filedata = Blockly.JavaScript.valueToCode(block, 'filedata', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'writeFileStream(' + value_fileindex + ',' + value_filedata + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sysdisk_readFileStream'] = function (block) {
  var value_fileindex = Blockly.JavaScript.valueToCode(block, 'fileindex', Blockly.JavaScript.ORDER_ATOMIC);
  var value_readlength = Blockly.JavaScript.valueToCode(block, 'readlength', Blockly.JavaScript.ORDER_ATOMIC);
  var functionName = Blockly.JavaScript.provideFunction_(
    'sliceValue',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
      '(value) {',
      '  return value.slice(0, value.length / 2);',
      '}']);
  var code = functionName + '(readFileStream(' + value_fileindex + ',' + value_readlength + '))';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sysdisk_getFileStreamLength'] = function (block) {
  var value_fileindex = Blockly.JavaScript.valueToCode(block, 'fileindex', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'getFileStreamLength(' + value_fileindex + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sysdisk_gotoFileStreamBOF'] = function (block) {
  var value_fileindex = Blockly.JavaScript.valueToCode(block, 'fileindex', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'gotoFileStreamBOF(' + value_fileindex + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sysdisk_gotoFileStreamEOF'] = function (block) {
  var value_fileindex = Blockly.JavaScript.valueToCode(block, 'fileindex', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'gotoFileStreamEOF(' + value_fileindex + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};