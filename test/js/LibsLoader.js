/**
 * LibsLoader
 * 当前文件版本：v0.1
 * 使用blob动态加载页面所需库文件
 * ============================================
 * 作者：戴兜
 * ============================================
 * 
 * */
var theDevKey = 0, theKey = "", hasBeta = 0;
var libsConfig = {
    libs: {
        css: ["style.day.min.css", "iconfont/material-icons.css", "css/PuzzleTips.css", "css/Lobibox.min.css"],
        js: ["js/Base64.js", "face/face.js", "js/jquery-ui-1.10.4.min.js", "js/PuzzleTips.js", "blockly_compressed.js", "msg/zh-hans.js", "msg/zh-hans_2.js", "js/lobibox.min.js", "js/aes.js", "js/encrypt.min.js"],
        puzzle: ["blocks/math.js", "blocks/text.js", "blocks/loops.js", "blocks/procedures.js", "blocks/logic.js", "blocks/lists.js", "blocks/variables.js", "blocks/rotcode.js", "blocks/rotevent.js", "blocks/rotfunc.js", "blocks/sysdisk.js", "blocks/time.js", "blocks/voiceera.js", "blocks/http.js", "blocks/json.js", "javascript.js", "blocks/generators/math.js", "blocks/generators/text.js", "blocks/generators/loops.js", "blocks/generators/procedures.js", "blocks/generators/logic.js", "blocks/generators/lists.js", "blocks/generators/variables.js", "blocks/generators/rotcode.js", "blocks/generators/rotevent.js", "blocks/generators/rotfunc.js", "blocks/generators/sysdisk.js", "blocks/generators/time.js", "blocks/generators/voiceera.js", "blocks/generators/http.js", "blocks/generators/json.js", "js/code.min.js", "js/buttonevents.min.js"]
    }
}
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}



if (getCookie("test") !== "true") {
    var theDevKey = 0, theKey = "", hasBeta = 111;

    $(document).keypress(function (e) {
        if (e.shiftKey && e.keyCode == 68) {
            theDevKey = 1;
        }
        if (e.shiftKey && e.keyCode == 69 && theDevKey == 1) {
            theDevKey = 2;
        }
        if (e.shiftKey && e.keyCode == 86 && theDevKey == 2) {
            theDevKey = 0;
            theKey = randomString(32);
            console.log("进入内测模式：请输入 imADeveloper(\"" + theKey + "\") 以进入调试模式");
            Lobibox.window({
                title: '打开开发者内测模式',
                content: "<p style='color:#fff;text-align:center;font-size:20px;'>请打开Console，按照提示输入内容。</p>",
                height: 165,
                buttons: {
                    ok: {
                        text: '确定',
                        class: 'lobibox_button',
                        closeOnClick: true
                    }
                }
            });
        }
    });
} else {
    libsConfig = {
        libs: {
            css: ["test/style.day.css", "iconfont/material-icons.css", "css/PuzzleTips.css", "css/Lobibox.min.css"],
            js: ["js/Base64.js", "face/face.js", "js/jquery-ui-1.10.4.min.js", "test/js/PuzzleTips.js", "blockly_compressed.js", "test/msg/zh-hans.js", "test/msg/zh-hans_2.js", "test/js/lobibox.min.js", "test/js/aes.js", "test/js/encrypt.js"],
            puzzle: ["test/blocks/math.js", "test/blocks/text.js", "test/blocks/loops.js", "test/blocks/procedures.js", "test/blocks/logic.js", "test/blocks/lists.js", "test/blocks/variables.js", "test/blocks/rotcode.js", "test/blocks/rotevent.js", "test/blocks/rotfunc.js", "test/blocks/sysdisk.js", "test/blocks/time.js", "test/blocks/voiceera.js", "test/blocks/http.js", "test/blocks/json.js", "javascript.js", "test/blocks/generators/math.js", "test/blocks/generators/text.js", "test/blocks/generators/loops.js", "test/blocks/generators/procedures.js", "test/blocks/generators/logic.js", "test/blocks/generators/lists.js", "test/blocks/generators/variables.js", "test/blocks/generators/rotcode.js", "test/blocks/generators/rotevent.js", "test/blocks/generators/rotfunc.js", "test/blocks/generators/sysdisk.js", "test/blocks/generators/time.js", "test/blocks/generators/voiceera.js", "test/blocks/generators/http.js", "test/blocks/generators/json.js", "test/js/code.js", "test/js/buttonevents.js"]
        }
    }
}

function imADeveloper(text) {
    if (hasBeta !== 111) {
        return undefined;
    }
    if (text !== theKey || text == "") {
        return undefined;
    } else {
        setCookie("test", "true", 999999);
        location.reload();
    }
}


function outputLogo() {
    var outputjs = "var style_3d = \"text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba( 0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0 ,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15); font-size:5em;\";console.log(\"%c   PuzzleMaker\", \"padding:30px 30px;background:url('http://127.0.0.1/code/media/logo_console.svg') no-repeat;color:#4582ec;font-size:45px;line-height:30px;\");console.log(\"%c功能丰富 · 入门简单 · 操作便捷\", \"color:#4582ec;\");console.log(\"%c嘿嘿嘿你打开控制台干什么？在这里乱输入东西编辑器可是会坏掉的哦（滑稽\", \"color:#4582ec;\");console.log(\"%cLibsLoader %cv0.1 · 戴兜 · https://weibo.com/keaidaidou · https://daidr.me\", style_3d, \"\");";
    eval(outputjs);
}

function LibsLoader() {
    outputLogo();
    var loadStyle = function (url) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(link);
    }

    var loadScript = function (url) {
        var script = document.createElement("script");
        script.type = "text/javacript";
        script.src = url;
        document.body.appendChild(script);
    }

    var isCompleted = function () {
        if (isContinue === 0) {
            window.clearInterval(timer);
            return;
        }
        switch (step) {
            case "css":
                loadCSS();
                $(".loadingtext").text("正在加载样式 (" + rcss + "/" + css + ")");
                if (rcss === css) {
                    step = "js";
                }
                break;
            case "js":
                loadJS(0, js - 1);
                $(".loadingtext").text("正在加载必要库 (" + rjs + "/" + js + ")");
                if (rjs === js) {
                    step = "puzzle";
                }
                break;
            case "puzzle":
                loadPUZZLE(0, puzzle - 1);
                $(".loadingtext").text("正在加载拼图列表 (" + rpuzzle + "/" + puzzle + ")");
                if (rpuzzle === puzzle) {
                    step = "complete";
                }
                break;
            case "complete":
                complete();
                break;
        }
    }


    var css = libsConfig.libs.css.length;
    var js = libsConfig.libs.js.length;
    var puzzle = libsConfig.libs.puzzle.length;
    var step = "css";
    var isContinue = 1;
    var rcss = 0, rjs = 0, rpuzzle = 0;
    var acss = 0, ajs = 0, apuzzle = 0;
    var success = 0, error = 0;
    var timer = window.setInterval(function () { isCompleted() }, 100);

    var loadCSS = function () {
        if (acss === 0) {
            acss = 1;
        } else {
            return;
        }
        //CSS加载

        for (var i = 0, l = libsConfig.libs.css.length; i < l; i++) {
            $.ajax({
                url: libsConfig.libs.css[i],
                timeout: 5000,
                type: 'get',
                cache: false,
                async: true,
                success: function (data) {
                    success += 1;
                    var cssBlob = new Blob([data], { type: 'text/css' });
                    var blob_url = URL.createObjectURL(cssBlob);
                    loadStyle(blob_url);
                    URL.revokeObjectURL(blob_url);
                },
                complete: function (XMLHttpRequest, status) {
                    rcss += 1;
                    var style_red = "font-family:'微软雅黑';font-size:1em;background-color:#e44d26;color:#fff;padding:4px;";
                    var style_orange = "font-family:'微软雅黑';font-size:1em;background-color:#fe9d0b;color:#fff;padding:4px;";
                    if (status == 'timeout') {
                        error += 1;
                        isContinue = 0;
                        hasError();
                        console.log("%c错误%c「" + libsConfig.libs.css[i] + "」加载超时", style_red, style_orange);
                    } else if (status != "success") {
                        error += 1;
                        isContinue = 0;
                        hasError();
                        console.log("%c错误%c「" + libsConfig.libs.css[i] + "」加载失败", style_red, style_orange);
                    }
                }
            });
        }
    }

    var loadJS = function (i, t) {
        if (i === 0) {
            if (ajs === 0) {
                ajs = 1;
            } else {
                return;
            }
        }

        //JS加载
        $.ajax({
            url: libsConfig.libs.js[i],
            timeout: 5000,
            type: 'get',
            cache: false,
            async: true,
            success: function (data) {
                success += 1;
                var jsBlob = new Blob([data], { type: 'text/javacript' });
                var blob_url = URL.createObjectURL(jsBlob);
                loadScript(blob_url);
                URL.revokeObjectURL(blob_url);
            },
            complete: function (XMLHttpRequest, status) {
                rjs += 1;
                var style_red = "font-family:'微软雅黑';font-size:1em;background-color:#e44d26;color:#fff;padding:4px;";
                var style_orange = "font-family:'微软雅黑';font-size:1em;background-color:#fe9d0b;color:#fff;padding:4px;";
                if (status == 'timeout') {
                    error += 1;
                    isContinue = 0;
                    hasError();
                    console.log("%c错误%c「" + libsConfig.libs.js[i] + "」加载超时", style_red, style_orange);
                } else if (status != "success") {
                    error += 1;
                    isContinue = 0;
                    hasError();
                    console.log("%c错误%c「" + libsConfig.libs.js[i] + "」加载失败", style_red, style_orange);
                }
                if (i != t) {
                    if (isContinue === 1) {
                        loadJS(i + 1, t);
                    }
                }
            }
        });
    }

    var loadPUZZLE = function (i, t) {
        if (i === 0) {
            if (apuzzle === 0) {
                apuzzle = 1;
            } else {
                return;
            }
        }
        //PUZZLE加载
        $.ajax({
            url: libsConfig.libs.puzzle[i],
            timeout: 5000,
            cache: false,
            async: true,
            type: 'get',
            success: function (data) {
                success += 1;
                var puzzleBlob = new Blob([data], { type: 'text/javacript' });
                var blob_url = URL.createObjectURL(puzzleBlob);
                loadScript(blob_url);
                URL.revokeObjectURL(blob_url);
            },
            complete: function (XMLHttpRequest, status) {
                rpuzzle += 1;
                var style_red = "font-family:'微软雅黑';font-size:1em;background-color:#e44d26;color:#fff;padding:4px;";
                var style_orange = "font-family:'微软雅黑';font-size:1em;background-color:#fe9d0b;color:#fff;padding:4px;";
                if (status == 'timeout') {
                    error += 1;
                    isContinue = 0;
                    hasError();
                    console.log("%c错误%c「" + libsConfig.libs.puzzle[i] + "」加载超时", style_red, style_orange);
                } else if (status != "success") {
                    error += 1;
                    isContinue = 0;
                    hasError();
                    console.log("%c错误%c「" + libsConfig.libs.puzzle[i] + "」加载失败", style_red, style_orange);
                }
                if (i != t) {
                    if (isContinue === 1) {
                        loadPUZZLE(i + 1, t);
                    }
                }
            }
        });
    }

    var hasError = function () {
        $(".loadingtext").text("加载错误，请重试");
        $(".loadingpage").addClass("error");
    }

    var complete = function () {
        window.clearInterval(timer);
        autoSize_blocklyToolboxDiv();
        $(".header_menu").css("margin-top", "-" + ($(".header_menu").height() + 100) + "px");
        $(".loadingtext").text("Having fun!");
        $(".loadingpage").slideToggle();
        var referrer = document.createElement('a');
        referrer.href = document.referrer;
        var topHost = referrer.hostname;
        switch (topHost) {
            case "app.daidr.me":
                break;
            case "127.0.0.1":
                break;
            case "www.lastdream.net":
                Lobibox.window({
                    title: '内嵌编辑器提醒',
                    content: "<p style='color:#fff;text-align:center;font-size:20px;'>www.lastdream.net为官方认证编辑器站点，你可以在这里放心地进行你的创作。</p>",
                    height: 170,
                    buttons: {
                        ok: {
                            text: '确定',
                            class: 'lobibox_button',
                            closeOnClick: true
                        }
                    }
                });
                break;
            default:
                Lobibox.window({
                    title: '内嵌编辑器提醒',
                    content: "<p style='color:#fff;text-align:center;font-size:20px;'>当前站点" + topHost + "不是官方认证站点，在这里进行操作可能会导致隐私数据泄漏，请谨慎操作！</p>",
                    height: 175,
                    buttons: {
                        ok: {
                            text: '确定',
                            class: 'lobibox_button',
                            closeOnClick: true
                        }
                    }
                });
                break;
        }
    }

}

LibsLoader();