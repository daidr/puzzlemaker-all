/**
 * LibsLoader
 * 当前文件版本：v0.1
 * 使用blob动态加载页面所需库文件
 * ============================================
 * 作者：戴兜
 * ============================================
 * 
 * */

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
        switch (step) {
            case "css":
                loadCSS();
                $(".loadingtext").text("正在加载样式");
                if (rcss === css) {
                    step = "js";
                }
                break;
            case "js":
                loadJS(0, js - 1);
                $(".loadingtext").text("正在加载必要库");
                if (rjs === js) {
                    step = "puzzle";
                }
                break;
            case "puzzle":
                loadPUZZLE(0, puzzle - 1);
                $(".loadingtext").text("正在加载拼图列表");
                if (rpuzzle === puzzle) {
                    step = "complete";
                }
                break;
            case "complete":
                complete();
                break;
        }
    }

    var libsConfig = {
        libs: {
            css: ["style.day.css", "iconfont/material-icons.css", "css/animate.min.css", "css/PuzzleTips.css", "css/Lobibox.min.css"],
            js: ["js/Base64.js", "face/face.js", "js/jquery-ui-1.10.4.min.js", "js/PuzzleTips.js", "blockly_compressed.js", "msg/zh-hans.js", "msg/zh-hans_2.js", "js/lobibox.min.js", "js/aes.js", "js/encrypt.min.js"],
            puzzle: ["blocks/math.js", "blocks/text.js", "blocks/loops.js", "blocks/procedures.js", "blocks/logic.js", "blocks/lists.js", "blocks/variables.js", "blocks/rotcode.js", "blocks/rotevent.js", "blocks/rotfunc.js", "blocks/sysdisk.js", "blocks/time.js", "blocks/voiceera.js", "blocks/http.js", "blocks/json.js", "javascript.js", "blocks/generators/math.js", "blocks/generators/text.js", "blocks/generators/loops.js", "blocks/generators/procedures.js", "blocks/generators/logic.js", "blocks/generators/lists.js", "blocks/generators/variables.js", "blocks/generators/rotcode.js", "blocks/generators/rotevent.js", "blocks/generators/rotfunc.js", "blocks/generators/sysdisk.js", "blocks/generators/time.js", "blocks/generators/voiceera.js", "blocks/generators/http.js", "blocks/generators/json.js", "js/code.js", "js/buttonevents.js"]
        }
    }

    var css = libsConfig.libs.css.length;
    var js = libsConfig.libs.js.length;
    var puzzle = libsConfig.libs.puzzle.length;
    var step = "css";
    var rcss = 0, rjs = 0, rpuzzle = 0;
    var acss = 0, ajs = 0, apuzzle = 0;
    var success = 0, error = 0;
    var timer = window.setInterval(function () { isCompleted() }, 1000);

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
                async: false,
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
                        console.log("%c错误%c「" + libsConfig.libs.css[i] + "」加载超时", style_red, style_orange);
                    } else if (status != "success") {
                        error += 1;
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
            async: false,
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
                    console.log("%c错误%c「" + libsConfig.libs.js[i] + "」加载超时", style_red, style_orange);
                } else if (status != "success") {
                    error += 1;
                    console.log("%c错误%c「" + libsConfig.libs.js[i] + "」加载失败", style_red, style_orange);
                }
                if (i != t) {
                    loadJS(i + 1, t);
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
            async: false,
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
                    console.log("%c错误%c「" + libsConfig.libs.puzzle[i] + "」加载超时", style_red, style_orange);
                } else if (status != "success") {
                    error += 1;
                    console.log("%c错误%c「" + libsConfig.libs.puzzle[i] + "」加载失败", style_red, style_orange);
                }
                if (i != t) {
                    loadPUZZLE(i + 1, t);
                }
            }
        });
    }

    var complete = function () {
        window.clearInterval(timer);
        autoSize_blocklyToolboxDiv();
        $(".header_menu").css("margin-top", "-" + ($(".header_menu").height() + 100) + "px");
        $(".loadingtext").text("Having fun!");
        $(".loadingpage").slideToggle();
    }

}

LibsLoader();