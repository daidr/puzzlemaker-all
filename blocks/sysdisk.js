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
  },
  {
    "type": "sysdisk_appendfile",
    "message0": "文件追加 %1 完整路径 %2 追加内容 %3",
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
        "name": "appendcontent",
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
  },
  {
    "type": "sysdisk_hasfile",
    "message0": "文件 %1 是否存在",
    "args0": [
      {
        "type": "input_value",
        "name": "filepath",
        "check": "String"
      }
    ],
    "output": "Boolean",
    "colour": 180,
    "tooltip": "检测磁盘上某个文件是否存在，返回逻辑型",
    "helpUrl": ""
  },
  {
    "type": "sysdisk_deletefile",
    "message0": "删除文件 %1",
    "args0": [
      {
        "type": "input_value",
        "name": "filepath",
        "check": "String"
      }
    ],
    "output": "Boolean",
    "colour": 180,
    "tooltip": "删除磁盘上的某个文件，返回逻辑型",
    "helpUrl": ""
  },
  {
    "type": "sysdisk_openFileStream",
    "message0": "打开文件流 %1 文件名 %2",
    "args0": [
      {
        "type": "input_dummy"
      }, {
        "type": "input_value",
        "name": "filepath",
        "check": "String",
        "align": "RIGHT"
      }
    ],
    "output": "Number",
    "colour": 180,
    "tooltip": "打开磁盘上的某个文件，返回用于确定文件的整数型文件流索引",
    "helpUrl": ""
  },
  {
    "type": "sysdisk_closeFileStream",
    "message0": "关闭文件流 %1 文件流索引 %2",
    "args0": [
      {
        "type": "input_dummy"
      }, {
        "type": "input_value",
        "name": "fileindex",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "output": "Boolean",
    "colour": 180,
    "tooltip": "关闭已经打开的文件流，返回逻辑型数据代表是否成功",
    "helpUrl": ""
  },
  {
    "type": "sysdisk_getFileStreamCurPos",
    "message0": "取文件流读写位置 %1 文件流索引 %2",
    "args0": [
      {
        "type": "input_dummy"
      }, {
        "type": "input_value",
        "name": "fileindex",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "output": "Number",
    "colour": 180,
    "tooltip": "获取已经打开的文件流当前的读写位置，返回整数型数据",
    "helpUrl": ""
  },
  {
    "type": "sysdisk_moveFileStreamCurPos",
    "message0": "移动文件流读写位置 %1 文件流索引 %2 起始位置 %3 移动距离 %4",
    "args0": [
      {
        "type": "input_dummy"
      }, {
        "type": "input_value",
        "name": "fileindex",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "initialpos",
        "check": "Number",
        "align": "RIGHT"
      },
      {
        "type": "input_value",
        "name": "movedistance",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "output": "Number",
    "colour": 180,
    "tooltip": "移动已经打开的文件流当前的读写位置，返回逻辑型数据代表是否成功\n起始位置：0 -> 文件首；1 -> 当前位置；2 -> 文件尾\n移动距离：从起始位置开始移动的字节数",
    "helpUrl": ""
  }, {
    "type": "sysdisk_isFileStreamEOF",
    "message0": "判断是否文件尾 %1 文件流索引 %2",
    "args0": [
      {
        "type": "input_dummy"
      }, {
        "type": "input_value",
        "name": "fileindex",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "output": "Boolean",
    "colour": 180,
    "tooltip": "判断读写位置是否处于文件尾，返回逻辑型数据",
    "helpUrl": ""
  }, {
    "type": "sysdisk_writeFileStream",
    "message0": "文件流写入 %1 文件流索引 %2 写入内容 %3",
    "args0": [
      {
        "type": "input_dummy"
      }, {
        "type": "input_value",
        "name": "fileindex",
        "check": "Number",
        "align": "RIGHT"
      }, {
        "type": "input_value",
        "name": "filedata",
        "check": ["Number", "String"],
        "align": "RIGHT"
      }
    ],
    "output": "Boolean",
    "colour": 180,
    "tooltip": "将数据写入文件流，返回逻辑型数据代表是否成功",
    "helpUrl": ""
  }, {
    "type": "sysdisk_readFileStream",
    "message0": "文件流读取 %1 文件流索引 %2 读取长度 %3",
    "args0": [
      {
        "type": "input_dummy"
      }, {
        "type": "input_value",
        "name": "fileindex",
        "check": "Number",
        "align": "RIGHT"
      }, {
        "type": "input_value",
        "name": "readlength",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "output": "String",
    "colour": 180,
    "tooltip": "从文件流读出数据，返回数据内容",
    "helpUrl": ""
  }, {
    "type": "sysdisk_getFileStreamLength",
    "message0": "获取文件流长度 %1 文件流索引 %2",
    "args0": [
      {
        "type": "input_dummy"
      }, {
        "type": "input_value",
        "name": "fileindex",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "output": "Number",
    "colour": 180,
    "tooltip": "获取文件流的长度，返回整数型数据",
    "helpUrl": ""
  }, {
    "type": "sysdisk_gotoFileStreamBOF",
    "message0": "移动读写位置到文件首 %1 文件流索引 %2",
    "args0": [
      {
        "type": "input_dummy"
      }, {
        "type": "input_value",
        "name": "fileindex",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "output": "Number",
    "colour": 180,
    "tooltip": "将读写位置移动到文件首，返回逻辑型数据代表是否成功",
    "helpUrl": ""
  }, {
    "type": "sysdisk_gotoFileStreamEOF",
    "message0": "移动读写位置到文件尾 %1 文件流索引 %2",
    "args0": [
      {
        "type": "input_dummy"
      }, {
        "type": "input_value",
        "name": "fileindex",
        "check": "Number",
        "align": "RIGHT"
      }
    ],
    "output": "Number",
    "colour": 180,
    "tooltip": "将读写位置移动到文件尾，返回逻辑型数据代表是否成功",
    "helpUrl": ""
  }, {
    "type": "sysdisk_findFileStreamBytes",
    "message0": "寻找内容出现位置 %1 文件流索引 %2 欲寻找内容 %3",
    "args0": [
      {
        "type": "input_dummy"
      }, {
        "type": "input_value",
        "name": "fileindex",
        "check": "Number",
        "align": "RIGHT"
      }, {
        "type": "input_value",
        "name": "filedata",
        "check": ["Number", "String"],
        "align": "RIGHT"
      }
    ],
    "output": "String",
    "colour": 180,
    "tooltip": "在文件流寻找指定内容出现位置，返回出现位置(整数型)，未找到返回-1",
    "helpUrl": ""
  }
]);