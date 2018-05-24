/*
 * Base64编码函数：doEncode(欲编码内容)
 * Base64解码函数：doDecode(欲解码内容)
 * des加密：des("密钥", "加密文本", 1, 0);
 * des解密：des("密钥", "解密文本", 0, 0);
*/

var reverseStr = function (s) {
    return s.split("").reverse().join("");
}

var encrypt = function (word) {
    var key = CryptoJS.enc.Utf8.parse("tizazpmssuhlekie");
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.toString();
}

var aes_encrypt = function (key, word) {

    var ikey = reverseStr(encrypt(reverseStr(key)));
    if (ikey.length < 16) {
        for (var i = ikey.length; i < 16; i++) {
            ikey = ikey + "0";
        }
    } else if (ikey.length > 16) {
        ikey = ikey.substr(0, 16);
    }
    var ikey = reverseStr(ikey);
    var ikey = CryptoJS.enc.Utf8.parse(ikey);
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, ikey, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.toString();
}

var aes_decrypt = function (key, word) {
    var ikey = reverseStr(encrypt(reverseStr(key)));
    if (ikey.length < 16) {
        for (var i = ikey.length; i < 16; i++) {
            ikey = ikey + "0";
        }
    } else if (ikey.length > 16) {
        ikey = ikey.substr(0, 16);
    }
    var ikey = reverseStr(ikey);
    var ikey = CryptoJS.enc.Utf8.parse(ikey);
    var decrypt = CryptoJS.AES.decrypt(word, ikey, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

/* 前端直接创建并下载文件 */
var createAndDownloadFile = function (fileName, content) {
    var aTag = document.createElement('a');
    var blob = new Blob([content]);
    aTag.download = fileName;
    aTag.href = URL.createObjectURL(blob);
    aTag.click();
    URL.revokeObjectURL(blob);
}


var PuzzleMaker = {
    Plugin: {
        /* 判断是否为插件 */
        isPlugin: function (content) {
            /* content参数为插件原始字节集 */
            if (content.length > 10) {
                var header = content.substring(0, 10);
                if (header == "PMSR?     ") {
                    var filecontent = doDecode(reverseStr(content.replace("PMSR?     ", "")));
                    try {
                        var plugincontent = JSON.parse(filecontent);
                    } catch (err) {
                    }
                    if (plugincontent == "") {
                        return false; //无法解密为json，判定无效
                    } else {
                        try {
                            var pluginheader = plugincontent.type;
                        } catch (err) {
                        }
                        if (pluginheader == "PuzzlePlugin") {
                            return true; //有效
                        } else {
                            return false; //插件内无辨识头，判定无效
                        }
                    }
                } else {
                    return false; //无拼图插件文件头，判定无效
                }
            } else {
                return false; //字符数量少于10个(文件头字符数)，直接判定无效
            }
        },
        /* 判断是否有主人密码 */
        hasPassword: function (content) {
            /* content参数为插件原始字节集 */
            var filecontent = doDecode(reverseStr(content.replace("PMSR?     ", "")));
            try {
                var plugincontent = JSON.parse(filecontent);
            } catch (err) {
            }
            try {
                var pluginhasPassword = plugincontent.hasPassword;
            } catch (err) {
            }
            return pluginhasPassword;
        },
        /* 获取插件拼图xml结构原始内容 */
        getPluginXmlsrc: function (content) {
            /* content参数为插件原始字节集 */
            if (content.length > 10) {
                var header = content.substring(0, 10);
                if (header == "PMSR?     ") {
                    var filecontent = doDecode(reverseStr(content.replace("PMSR?     ", "")));
                    try {
                        var plugincontent = JSON.parse(filecontent);
                    } catch (err) {
                    }
                    if (plugincontent == "") {
                        return ""; //无法解密为json，返回空
                    } else {
                        try {
                            var puzzlexml = plugincontent.puzzlexml;
                        } catch (err) {
                        }
                        return puzzlexml;
                    }
                } else {
                    return ""; //无拼图插件文件头，返回空
                }
            } else {
                return ""; //字符数量少于10个(文件头字符数)，返回空
            }
        },
        /* 获取插件基本信息 */
        getPluginInfo: function (content) {
            /* content参数为插件原始字节集 */
            /* 返回值：
             * {
             *      name : "插件名称",
             *      version : "插件版本",
             *      author : "插件作者",
             *      description : "插件描述"
             * }
            */
            if (content.length > 10) {
                var header = content.substring(0, 10);
                if (header == "PMSR?     ") {
                    var filecontent = doDecode(reverseStr(content.replace("PMSR?     ", "")));
                    try {
                        var plugincontent = JSON.parse(filecontent);
                    } catch (err) {
                    }
                    if (plugincontent == "") {
                        return ""; //无法解密为json，返回空
                    } else {
                        try {
                            var pluginname = doDecode(plugincontent.name);
                            var pluginversion = doDecode(plugincontent.version);
                            var pluginauthor = doDecode(plugincontent.author);
                            var plugindescription = doDecode(plugincontent.description);
                        } catch (err) {
                        }
                        return {
                            name: pluginname,
                            version: pluginversion,
                            author: pluginauthor,
                            description: plugindescription
                        };
                    }
                } else {
                    return ""; //无拼图插件文件头，返回空
                }
            } else {
                return ""; //字符数量少于10个(文件头字符数)，返回空
            }
        },
        /* 插件加密函数 */
        doEncode: function (content) {
            /* content参数格式：
             * {
             *      name : "插件名称",
             *      version : "插件版本",
             *      author : "插件作者",
             *      description : "插件描述",
             *      password : "二次编辑密码"
             * }
             */
            /* 返回值：
             * 返回完成加密的插件字节集
            */
            var hasPassword = "";
            if (content.password === "") {
                hasPassword = false;
            } else {
                hasPassword = true;
            }
            var puzzlexml = "";
            if (content.password === "") {
                puzzlexml = doEncode(Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace)))
            } else {
                puzzlexml = aes_encrypt(content.password, doEncode(Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace))))
            }
console.log(doEncode(content.name));
            var Plugin = {
                type: "PuzzlePlugin", //确保插件不被第三方生成
                name: doEncode(content.name),
                version: doEncode(content.version),
                author: doEncode(content.author),
                description: doEncode(content.description),
                puzzlecode: doEncode(Blockly.JavaScript.workspaceToCode(Code.workspace)),
                hasPassword: hasPassword,
                puzzlexml: puzzlexml,
            };

            var Plugin_Encode = "PMSR?     " + reverseStr(doEncode(JSON.stringify(Plugin)));
            //return Plugin_Encode;
            var RE = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g;
            createAndDownloadFile(content.name.replace(RE, "") + ".pmsr", Plugin_Encode);
            cusnotify("success", "mini", true, 4000, "成功导出拼图插件", false, true);
        },
        /* 插件xml解密函数 */
        doDecode: function (content) {
            /* content参数格式：
             * {
             *      xmlcontent : "插件xml部分原始内容",
             *      password : "二次编辑密码"
             */
            /* 返回值：
             * 返回解密后的xml数据
            */
            try {
                var xmlcontenta = doDecode(content.xmlcontent);
            } catch (error) {

            }
            if (xmlcontenta.indexOf("<xml xmlns=\"http://www.w3.org/1999/xhtml\">") !== -1) {
                console.log(xmlcontenta);
                return xmlcontenta;
            }
            var xmlcontent = doDecode(aes_decrypt(content.password, content.xmlcontent));
            if (xmlcontent.indexOf("<xml xmlns=\"http://www.w3.org/1999/xhtml\">") === -1) {
                return false;
            } else {
                return xmlcontent;

            }
        },
    }
};

function plugin_doDecode(content) {
    return PuzzleMaker.Plugin.doDecode(content);
}

function plugin_doEncode(content) {
    return PuzzleMaker.Plugin.doEncode(content);
}

function plugin_getPluginInfo(content) {
    return PuzzleMaker.Plugin.getPluginInfo(content);
}

function plugin_getPluginXmlsrc(content) {
    return PuzzleMaker.Plugin.getPluginXmlsrc(content);
}

function plugin_isPlugin(content) {
    return PuzzleMaker.Plugin.isPlugin(content);
}

function plugin_hasPassword(content) {
    return PuzzleMaker.Plugin.hasPassword(content);
}