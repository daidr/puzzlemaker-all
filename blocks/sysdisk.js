'use strict';

goog.provide('Blockly.Blocks.sysdisk');  // Deprecated
goog.provide('Blockly.Constants.sysdisk');

goog.require('Blockly.Blocks');

Blockly.defineBlocksWithJsonArray([
  {
    "type": "sysdisk_getlocalpath",
    "message0": "获取酷Q运行目录",
    "output": null,
    "colour": "%{BKY_SYSDISK_HUE}",
    "tooltip": "输出酷Q目录，末尾不带 /",
    "helpUrl": ""
  }
  ,
  {
    "type": "sysdisk_writefile",
    "message0": "写文件 %1 完整路径 %2 文件内容 %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "filepath",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "filecontent",
        "check": "String",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_SYSDISK_HUE}",
    "tooltip": "将文本写入本地文件",
    "helpUrl": ""
  }
  ,
  {
    "type": "sysdisk_readfile",
    "message0": "读文件 %1 完整路径 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "filepath",
        "check": "String",
        "align": "RIGHT"
      }
    ],
    "output": null,
    "colour": "%{BKY_SYSDISK_HUE}",
    "tooltip": "从本地读取文件内容",
    "helpUrl": ""
  }
  ,
  {
    "type": "sysdisk_setkeytext",
    "message0": "写配置 %1 完整路径 %2 配置节 %3 配置键(项) %4 配置内容 %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "inipath",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "inisection",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "inikey",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "inicontent",
        "check": "String",
        "align": "RIGHT"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_SYSDISK_HUE}",
    "tooltip": "写入一个配置到指定ini文件",
    "helpUrl": ""
  }
  ,
  {
    "type": "sysdisk_getkeytext",
    "message0": "读配置 %1 完整路径 %2 配置节 %3 配置键(项) %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "inipath",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "inisection",
        "check": "String",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "inikey",
        "check": "String",
        "align": "RIGHT"
      }
    ],
    "output": null,
    "colour": "%{BKY_SYSDISK_HUE}",
    "tooltip": "从指定ini文件读入配置",
    "helpUrl": ""
  }
]);