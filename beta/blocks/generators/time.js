'use strict';

goog.provide('Blockly.JavaScript.time');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['rot_timestamptostr'] = function (block) {
  var value_timestamp = Blockly.JavaScript.valueToCode(block, 'timestamp', Blockly.JavaScript.ORDER_ATOMIC);
  var functionName = Blockly.JavaScript.provideFunction_(
    'sliceValue',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
      '(value) {',
      '  return value.slice(0, value.length / 3 * 2 - 9);',
      '}']);
  var code = functionName+'(timestampToStr(' + value_timestamp + '))';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rot_timestamptoweekday'] = function (block) {
  var value_timestamp = Blockly.JavaScript.valueToCode(block, 'timestamp', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'new Date(parseInt(' + value_timestamp + ')).getDay()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rot_timestamptostrx'] = function (block) {
  var value_timestamp = Blockly.JavaScript.valueToCode(block, 'timestamp', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dateformat = Blockly.JavaScript.valueToCode(block, 'dateformat', Blockly.JavaScript.ORDER_ATOMIC);
  var value_timeformat = Blockly.JavaScript.valueToCode(block, 'timeformat', Blockly.JavaScript.ORDER_ATOMIC);
  var functionName = Blockly.JavaScript.provideFunction_(
    'sliceValue',
    ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
      '(value) {',
      '  return value.slice(0, value.length / 3 * 2 - 9);',
      '}']);
  var code = functionName+'(timestampToStrX(' + value_timestamp + "," + value_dateformat + "," + value_timeformat + '))';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rot_sleep'] = function (block) {
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'sleep(' + value_time + ');\n';
  return code;
};

Blockly.JavaScript['rot_gettimestamp'] = function () {
  var code = 'new Date().getTime()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

function formatFunction(text) {
  return text.replace(/(?<!\\)\"/g, "\\\"").replace(/\n/g, "");
}

Blockly.JavaScript['rot_timestamptogmtstring'] = function (block) {
  var value_timestamp = Blockly.JavaScript.valueToCode(block, 'timestamp', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'new Date(' + value_timestamp + ').toUTCString()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['time_timer_folder'] = function (block) {
  var value_timeout = Blockly.JavaScript.valueToCode(block, 'timeout', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_actions = Blockly.JavaScript.statementToCode(block, 'actions');
  // TODO: Assemble JavaScript into code variable.
  var code = "time_Timer(\"(function (){var eventarray = BdLQAWLWDxkDJQUy2i.split('|,|,|,|,|');" + formatFunction(statements_actions) + "})()\"," + value_timeout + ",eventarray[8],event);\n";
  return code;
};
