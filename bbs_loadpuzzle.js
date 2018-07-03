/*
 * Base64编码函数：doEncode(欲编码内容)
 * Base64解码函数：doDecode(欲解码内容)
 * des加密：des("密钥", "加密文本", 1, 0);
 * des解密：des("密钥", "解密文本", 0, 0);
*/

var reverseStr = function (s) {
    return s.split("").reverse().join("");
}

var puzzleDecode = function (content) {
    var xmlsrc = inthiscase(content);
    try {
        var xmlcontent = inthiscase(content);
    } catch (error) {

    }
    if (xmlcontent === "") {
        return false;
    } else {
        return xmlcontent;

    }

}

var inthiscase = function (content) {
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
                    var puzzlexml = doDecode(plugincontent.puzzlexml);
                } catch (err) {
                }
                if (puzzlexml.indexOf("<xml xmlns=\"http://www.w3.org/1999/xhtml\">") !== -1) {
                    return puzzlexml;
                } else {
                    return ""; //无法找到插件数据，返回空
                }

            }
        } else {
            return ""; //无拼图插件文件头，返回空
        }
    } else {
        return ""; //字符数量少于10个(文件头字符数)，返回空
    }
}

var randomChar = function (l) {
    var x = "0123456789qwertyuioplkjhgfdsazxcvbnm";
    var tmp = "";
    var timestamp = new Date().getTime();
    for (var i = 0; i < l; i++) {
        tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
    }
    return timestamp + tmp;
}

function loadpuzzle(e) {
    e.parent().attr("id", "bbswp_" + randomChar());
    e.parent().addClass('open');
    var parent = e.parent();
    e.remove();
    var puzzlesrc = "https://bbs.app.daidr.me" + parent.attr("puzzle-src");

    $.get(puzzlesrc, function (result) {
        var bbsWorkspace =
            Blockly.inject(parent.attr("id"),
                {
                    readOnly: true,
                    scrollbars: true,
                    zoom:
                        {
                            controls: false,
                            wheel: true,
                            startScale: 1.0,
                            maxScale: 3,
                            minScale: 0.3,
                            scaleSpeed: 1.2
                        },
                });
        bbsWorkspace.clear();


        var xml = "";
        var theerror = "";
        try {
            var xml = Blockly.Xml.textToDom(puzzleDecode(result));
            Blockly.Xml.domToWorkspace(xml, bbsWorkspace);
        } catch (error) {
            theerror = error;
        }
        if (theerror !== "") {
            parent.removeClass("open").addClass("error");
        } else {
            setTimeout(function () { Blockly.svgResize(bbsWorkspace); parent.children(".loading").css("display", "none"); }, 2000);
        }
    });
}