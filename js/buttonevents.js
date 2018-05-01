var isMenubtngroupOpen = 0, exportWindow, passwordWindow;

function cusnotify(type, size, icon, delay, msg, closebtn, sound = true) {
	Lobibox.notify(type, {
		size: size,
		icon: icon,
		delay: delay,
		msg: msg,
		closeButton: closebtn,
		sound: sound
	});
}

function clearInputFile(f) {
	if (f.value) {
		try {
			f.value = ''; //for IE11, latest Chrome/Firefox/Opera...  
		} catch (err) {
		}
		if (f.value) { //for IE5 ~ IE10  
			var form = document.createElement('form'), ref = f.nextSibling, p = f.parentNode;
			form.appendChild(f);
			form.reset();
			p.insertBefore(f, ref);
		}
	}
}

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function clearCookies() {
	var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
	if (keys) {
		for (var i = keys.length; i--;) { }
		document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
	}
}

function IsPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPod"
	];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

function passwordFocus(e) {
	e.attr("type", "text");
}
function passwordBlur(e) {
	e.attr("type", "password");
}
/* 
$("#downloadButton").click(function () {
	var xmlcontent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
	if (xmlcontent == "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <variables></variables>\n</xml>") {
		cusnotify('warning', 'mini', true, 2500, MSG['WorkspaceIsEmpty'], false);
		//_czc.push(["_trackEvent", "菜单", "下载拼图文件", user.idstr, "失败", "downloadButton"]);
		return;
	}
	//var desxml = des("a", xmlcontent, 1, 0);
	var desxml = xmlcontent;
	Lobibox.prompt('text', {
		title: MSG['DownloadFileTitle'],
		attrs: {
			placeholder: 'MyCqPlugin'
		},
		buttons: {
			ok: {
				text: '完成',
				closeOnClick: true
			},
			cancel: {
				text: '取消',
				closeOnClick: true
			}
		},
		callback: function (lobibox, type) {
			var btnType;
			if (type === 'ok') {
				if (lobibox.$input[0].value == "") {
					var randomfilename = Math.random().toString(36).substr(2);
					createAndDownloadFile(randomfilename + ".xml", desxml);
					cusnotify('success', 'mini', true, 5000, MSG['DownloadFileSuccessful'] + randomfilename, false);
					//_czc.push(["_trackEvent", "菜单", "下载拼图文件", user.idstr, "成功-" +randomfilename + ".xml", "downloadButton"]);
				} else {
					createAndDownloadFile(lobibox.$input[0].value + ".xml", desxml);
					cusnotify('success', 'mini', true, 5000, MSG['DownloadFileSuccessful'] + lobibox.$input[0].value, false);
					//_czc.push(["_trackEvent", "菜单", "下载拼图文件", user.idstr, "成功-" + lobibox.$input[0].value + ".xml", "downloadButton"]);
				}
			} else if (type === 'cancel') {
				cusnotify('info', 'mini', true, 2000, MSG['OperatingCancel'], false);
				//_czc.push(["_trackEvent", "菜单", "下载拼图文件", user.idstr, "取消", "downloadButton"]);
			}
		}
	});
	//createAndDownloadFile(Math.random().toString(36).substr(2) + ".xml",desxml);
	//解密：des ("a", desxml, 0)
}); */

/* $('#loadButton').click(function () {
	$('#loadcqwpk').click();
	//_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr,"按钮按下", "loadButton"]);
}); */

/* $("#loadcqwpk").change(function () {
	var objFile = document.getElementById("loadcqwpk");
	console.log(objFile.files[0].size); // 文件字节数
	var files = $('#loadcqwpk').prop('files'); //获取到文件列表
	if (files.length == 0) {

	} else {
		var reader = new FileReader(); //新建一个FileReader
		reader.readAsText(files[0], "UTF-8"); //读取文件 
		reader.onload = function (evt) { //读取完文件之后会回来这里
			var fileString = evt.target.result; // 读取文件内容
			var fileLength = objFile.files[0].size;
			if (fileLength > 900000){
				if (fileLength < 1200000){
					cusnotify('warning','mini',true,5000,MSG['LoadFileWarning'].replace('%1', fileLength),false);
					//_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "文件过大", "loadButton"]);
				} else {
					cusnotify('error','mini',true,5000,MSG['LoadFileError'].replace('%1', fileLength),false);
					//_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "文件过大(超大)", "loadButton"]);
				}
			}
			Code.workspace.clear();
			Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(fileString), Code.workspace);
			if (Code.workspace.getAllBlocks().length < 1000) {
				cusnotify('success', 'mini', true, 3000, MSG['LoadFileSuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
				//_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "成功", "loadButton"]);
			} else if (Code.workspace.getAllBlocks().length > 1000) {
				if (Code.workspace.getAllBlocks().length < 1500) {
					cusnotify('success', 'mini', true, 3000, MSG['LoadFileSuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
					//cusnotify('warning','mini',true,5000,MSG['AllPuzzleWarning'].replace('%1', Code.workspace.getAllBlocks().length),false);
					//_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "拼图过多", "loadButton"]);
				} else {
					cusnotify('success', 'mini', true, 3000, MSG['LoadFileSuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
					//cusnotify('error','mini',true,5000,MSG['AllPuzzleError'].replace('%1', Code.workspace.getAllBlocks().length),false);
					//_czc.push(["_trackEvent", "菜单", "载入拼图文件", user.idstr, "拼图过多(超多)", "loadButton"]);
				}
			}
		}
	}
}); */

/* $('#addButton').click(function () {
	$('#addcqwpk').click();
	//_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"按钮按下", "addButton"]);
});

$("#addcqwpk").change(function () {
	var objFile = document.getElementById("addcqwpk");
	console.log(objFile.files[0].size); // 文件字节数
	var files = $('#addcqwpk').prop('files'); //获取到文件列表
	if (files.length == 0) {

	} else {
		var reader = new FileReader(); //新建一个FileReader
		reader.readAsText(files[0], "UTF-8"); //读取文件 
		reader.onload = function (evt) { //读取完文件之后会回来这里
			var fileString = evt.target.result; // 读取文件内容
			var fileLength = objFile.files[0].size;
			if (fileLength > 900000){
				if (fileLength < 1200000){
					cusnotify('warning','mini',true,5000,MSG['LoadFileWarning'].replace('%1', fileLength),false);
					//_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"文件过大", "addButton"]);
				} else {
					cusnotify('error','mini',true,5000,MSG['LoadFileError'].replace('%1', fileLength),false);
					//_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"文件过大(超大)", "addButton"]);
				}
			}
			Blockly.Xml.appendDomToWorkspace(Blockly.Xml.textToDom(fileString), Code.workspace);
			if (Code.workspace.getAllBlocks().length < 1000) {
				cusnotify('success', 'mini', true, 3000, MSG['addFileSuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
				//_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"成功", "addButton"]);
			} else if (Code.workspace.getAllBlocks().length > 1000) {
				if (Code.workspace.getAllBlocks().length < 1500) {
					cusnotify('success', 'mini', true, 3000, MSG['addFileSuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
					//cusnotify('warning','mini',true,5000,MSG['AllPuzzleWarning'].replace('%1', Code.workspace.getAllBlocks().length),false);
					//_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"拼图过多", "addButton"]);
				} else {
					cusnotify('success', 'mini', true, 3000, MSG['addFileSuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
					//cusnotify('error','mini',true,5000,MSG['AllPuzzleError'].replace('%1', Code.workspace.getAllBlocks().length),false);
					//_czc.push(["_trackEvent", "菜单", "追加拼图文件", user.idstr,"拼图过多(超多)", "addButton"]);
				}
			}
		}
	}
}); */

/* $('#temporaryButton').click(function () {
	var xmlcontent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
	if (xmlcontent == "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <variables></variables>\n</xml>") {
		cusnotify('warning', 'mini', true, 2500, MSG['WorkspaceIsEmpty'], false);
		//_czc.push(["_trackEvent", "菜单", "缓存拼图", user.idstr, "失败", "temporaryButton"]);
		return;
	} else {
		//var desxml = des("a", xmlcontent, 1, 0);
		var desxml = xmlcontent;
		window.localStorage.setItem("puzzleTemporary", desxml);
		cusnotify('success', 'mini', true, 3000, MSG['SaveTemporarySuccessful'].replace('%1', desxml.replace(/[^\x00-\xff]/gi, "--").length), false);
		//_czc.push(["_trackEvent", "菜单", "缓存拼图", user.idstr, "成功", "temporaryButton"]);
	}
}); */

function autoSave() {
	if ($("#menu_autosave").attr("autosave-open") === "0") {
		return;
	}
	var xmlcontent = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(Code.workspace));
	if (xmlcontent == "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n  <variables></variables>\n</xml>") {
		return;
	} else {
		//var desxml = des("a", xmlcontent, 1, 0);
		var desxml = xmlcontent;
		window.localStorage.setItem("puzzleTemporary", desxml);
		//cusnotify('info', 'mini', true, 1000, MSG['AutoSaveTemporarySuccessful'].replace('%1', desxml.replace(/[^\x00-\xff]/gi, "--").length), false, false);
	}
	try {
		window.localStorage.setItem("puzzleInfoTemporary", doEncode(JSON.stringify(PuzzleMakerGlobalSetting.PluginInfo)));
	} catch (err) { }
}

function readTemporary() {
	var xmlcontent = window.localStorage.getItem("puzzleTemporary");
	if (xmlcontent == null) { } else {
		//var desxml = des ("a", xmlcontent, 0);
		var desxml = xmlcontent;
		Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(desxml), Code.workspace);
		cusnotify('success', 'mini', true, 3000, MSG['ReadTemporarySuccessful'].replace('%1', Code.workspace.getAllBlocks().length), false);
	}

	var plugininfo = window.localStorage.getItem("puzzleInfoTemporary");
	if (plugininfo == null) { } else {
		PuzzleMakerGlobalSetting.PluginInfo = JSON.parse(doDecode(plugininfo));
	}
}

$(document).ready(function () {
	setTimeout("readTemporary();", 500);
});


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

function getNonFunctions(c) {
	var e = c.getTopBlocks();
	var a = [];
	for (var b = 0; b < e.length; b++) {
		var d = e[b];
		if (d.type != "procedures_defreturn" && d.type != "procedures_defnoreturn" && d.type != "rotevent_allevent") {
			a.push(d)
		}
	}
	return a
}

function clearBlockMarkers() {
	$(".viewproblem").fadeOut(200);
	$(".viewproblem").attr("delete", "true");
	setTimeout(function () {
		$(".viewproblem[delete='true']").remove()
	}, 200);
}

function appendBlockMarker(b) {
	if (!b.getParent()) {
		var a = $("<div>priority_high</div>").addClass("viewproblem").addClass("material-icons").css("left", (b.getRelativeToSurfaceXY().x + b.workspace.scrollX) + 60).css("top", (b.getRelativeToSurfaceXY().y + b.workspace.scrollY) + 45).fadeIn(250).fadeOut(250).fadeIn(250);
		//var a = $("<div>priority_high</div>").addClass("viewproblem").addClass("material-icons").css("left", (b.getRelativeToSurfaceXY().x + b.workspace.scrollX) + 60).css("top", (b.getRelativeToSurfaceXY().y + b.workspace.scrollY) + 45).fadeIn(250).fadeOut(250).fadeIn(250);

		$("body").append(a)
	}
}

function appendBlockMarkers(b) {
	var a = 0;
	b.forEach(function (c) {
		if (!c.disabled) {
			appendBlockMarker(c);
			a++
		}
	})
}

function checkForStrayBlocks() {
	var a = getNonFunctions(Blockly.mainWorkspace);
	clearBlockMarkers();
	appendBlockMarkers(a)
}

$("body").mouseup(function () {
	setTimeout(function () {
		checkForStrayBlocks()
	}, 10)
});

function checkCode() {
	//是否有警告图标
	if ($(".blocklyIconShape[d='M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z']").length != 0) {
		cusnotify('error', 'mini', true, 3000, "请解决带有警告的拼图", false);
		return false;
	}
	//是否有机器人事件
	var hasROTEvents = 0;
	for (var i = 0; i < Code.workspace.getTopBlocks().length; i++) {
		var block = Code.workspace.getTopBlocks()[i];
		if (block.type == "rotevent_allevent") {
			hasROTEvents = hasROTEvents + 1;
		}
	}
	if (hasROTEvents == 0) {
		cusnotify('warning', 'mini', true, 3000, MSG['NoROTEvent'], false);
		return true;
	}

	//代码是否有错误
	var jsCode = Blockly.JavaScript.workspaceToCode(Code.workspace);
	var has_error = false;
	try {
		eval(jsCode)
	} catch (e) {
		if (e != "") {
			has_error = true
		}
	}
	if (has_error) {
		cusnotify('warning', 'mini', true, 3000, MSG['CodehasMistake'], false);
		return true;
	}

	//是否有散落拼图
	var blocks = getNonFunctions(Code.workspace);
	var redsanjiao = false;
	blocks.forEach(function (block) {
		if (!block.disabled) {
			redsanjiao = true
		}
	});
	if (redsanjiao) {
		cusnotify('error', 'mini', true, 3000, MSG['redsanjiao'], false);
		return false;
	}

}

$(".header_menu_mark").click(function () {
	isMenubtngroupOpen = 0;
	$(".header_menu_mark").css("display", "none");
	updateMenu();
});

function autoSize_blocklyToolboxDiv() {
	$("#toolboxNav").css("left", $(".blocklyToolboxDiv").width() + "px");
	$(".blocklyToolboxDiv").resize(function () {
		$("#toolboxNav").css("left", $(".blocklyToolboxDiv").width() + "px");
	});
}

$("#toolboxUpBtn").click(function () {
	Code.scrolledPos = Code.scrolledPos - 50;
	if (Code.scrolledPos < 0) {
		Code.scrolledPos = 0
	}
	$(".blocklyToolboxDiv").animate({
		scrollTop: Code.scrolledPos
	})
});

$("#toolboxDownBtn").click(function () {
	Code.scrolledPos = Code.scrolledPos + 50;
	if (Code.scrolledPos >= $(".blocklyToolboxDiv").height()) {
		Code.scrolledPos = $(".blocklyToolboxDiv").height()
	}
	$(".blocklyToolboxDiv").animate({
		scrollTop: Code.scrolledPos
	})
});

$(".searchSwitch").click(function () {
	if ($(".searchSwitch").html() == "search") {
		$(".searchSwitch").html("close");
		$("#blocksearch_input").fadeIn(100);
	} else {
		$(".searchSwitch").html("search");
		$("#blocksearch_input").fadeOut(100);
	}
});

/* 头部菜单按钮 */
$(".header_menubtn").click(function () {
	updateMenu();
});

$("#menu_autosave").click(function () {
	var isAutoSaveOpen = $(this).attr("autosave-open"); //获取自动保存状态
	switch (isAutoSaveOpen) {
		case '0': //关闭状态，即将打开
			$(this).attr("autosave-open", "1");
			break;
		case '1': //打开状态，即将关闭
			$(this).attr("autosave-open", "0");
			break;
		default: //恢复初始状态
			$(this).attr("autosave-open", "1");
			break;
	}
});
function bindMoreBtn() {
	$(".PuzzleMoreBtn").click(function () {
		var moreID = $(this).attr("data-moreid"); //获取moreID
		var moreContainer = $(".PuzzleMoreContainer[data-moreid='" + moreID + "']"); //获取对应more容器
		var isMoreContainerOpen = moreContainer.attr("data-open"); //获取more容器状态
		switch (isMoreContainerOpen) {
			case '0': //关闭状态，即将打开
				$(this).text("arrow_drop_up");
				$(this).css("right", "-123px");
				moreContainer.attr("data-open", "1");
				exportWindow.setHeight(520);
				moreContainer.show();
				break;
			case '1': //打开状态，即将关闭
				$(this).text("arrow_drop_down");
				$(this).css("right", "-125px");
				moreContainer.attr("data-open", "0");
				exportWindow.setHeight(280);
				moreContainer.hide();
				break;
			default: //恢复初始状态
				$(this).text("arrow_drop_down");
				$(this).css("right", "-125px");
				moreContainer.attr("data-open", "0");
				exportWindow.setHeight(280);
				moreContainer.hide();
				break;
		}
	});
}

$("#menu_unarchive").click(function () {
	if (checkCode() === false) {
		return;
	}
	exportWindow = Lobibox.window({
		title: '导出拼图',
		height: 280,
		content: function () {
			var content = $(".PuzzleMakerWindow[pdata-data-id=ExportWindow]").prop("outerHTML");
			content = content.replace(/pdata-/g, "");
			content = content.replace(/data-id/g, "id");
			var pluginname = "",
				pluginversion = "",
				pluginauthor = "",
				plugindescription = "";

			try {
				pluginname = PuzzleMakerGlobalSetting.PluginInfo.name;
				pluginversion = PuzzleMakerGlobalSetting.PluginInfo.version;
				pluginauthor = PuzzleMakerGlobalSetting.PluginInfo.author;
				plugindescription = PuzzleMakerGlobalSetting.PluginInfo.description;
			} catch (error) {

			}
			content = content.replace("{$PLUGINNAME$}", pluginname);
			content = content.replace("{$PLUGINAUTHOR$}", pluginauthor);
			content = content.replace("{$PLUGINVERSION$}", pluginversion);
			content = content.replace("{$PLUGINDESCRIPTION$}", plugindescription);
			return content;
		},
		buttons: {
			ok: {
				text: '确定',
				class: 'lobibox_button',
				closeOnClick: false
			}
		},
		callback: function ($this, type, ev) {
			if (type == "ok") {
				var pluginname = $("#ExportWindow #pluginname").val().trim();
				if (pluginname == "") {
					cusnotify("error", "mini", true, 4000, "请填写插件名称", false, true);
					return;
				}
				var pluginpassword = $("#ExportWindow #pluginpassword").val().trim();
				if (pluginpassword == "") {
					cusnotify("error", "mini", true, 4000, "请填写主人密码", false, true);
					return;
				} else {
					var reg = /^[0-9a-zA-Z]+$/;
					if (!reg.test(pluginpassword)) {
						cusnotify("error", "mini", true, 4000, "主人密码需为英文或数字", false, true);
						return;
					}
				}
				var pluginauthor = $("#ExportWindow #pluginauthor").val().trim();
				if (pluginauthor == "") {
					pluginauthor = "佚名";
				}
				var pluginver = $("#ExportWindow #pluginver").val().trim();
				if (pluginauthor == "") {
					pluginauthor = "1.0.0";
				}
				var plugindescription = $("#ExportWindow #plugindescription").val().trim();
				if (pluginauthor == "") {
					pluginauthor = "没有描述";
				}

				PuzzleMaker.Plugin.doEncode({
					name: pluginname,
					version: pluginver,
					author: pluginauthor,
					description: plugindescription,
					password: pluginpassword
				});
				exportWindow.destroy();
			}
		}
	});
	bindMoreBtn();
});

$("#menu_archive").click(function () {
	$('#PluginImportInput').click();
});

$("#PluginImportInput").change(function () {
	var objFile = this;
	//console.log(objFile.files[0].size); //文件字节数
	var files = $(this).prop('files'); //获取到文件列表
	if (files.length == 0) {
		cusnotify("error", "mini", true, 3000, "文件无效", false, true);
	} else {
		var reader = new FileReader(); //新建一个FileReader
		reader.readAsText(files[0], "UTF-8"); //读取文件 
		reader.onload = function (evt) { //读取完文件之后会回来这里
			var fileString = evt.target.result; //读取文件内容
			var fileLength = objFile.files[0].size;
			clearInputFile(objFile); //清空input
			if (PuzzleMaker.Plugin.isPlugin(fileString) === true) {
				var xmlcontent = doEncode(PuzzleMaker.Plugin.getPluginXmlsrc(fileString));
				var plugininfo = doEncode(JSON.stringify(PuzzleMaker.Plugin.getPluginInfo(fileString)));
				if (xmlcontent != "") {
					passwordWindow = Lobibox.window({
						title: '验证密码',
						content: function () {
							var content = $(".PuzzleMakerWindow[pdata-data-id=PasswordWindow]").prop("outerHTML");
							content = content.replace(/pdata-/g, "");
							content = content.replace(/data-id/g, "id");
							content = content.replace("{$XMLCONTENT$}", xmlcontent);
							content = content.replace("{$PLUGININFO$}", plugininfo);
							return content;
						},
						height: 195,
						buttons: {
							ok: {
								text: '确定',
								class: 'lobibox_button',
								closeOnClick: false
							}
						},
						callback: function ($this, type, ev) {
							if (type == "ok") {
								var xmlcontent = doDecode($("#password_xmlcontent").text());
								try {
									var pluginInfo = JSON.parse(doDecode($("#password_plugininfo").text()));
								} catch (err) {
								}
								var password = $("#PasswordWindow #password").val().trim();
								if (password == "") {
									cusnotify("error", "mini", true, 4000, "请填写主人密码", false, true);
									return;
								};
								var realxml = "";
								try {
									var realxml = PuzzleMaker.Plugin.doDecode({ xmlcontent: xmlcontent, password: password });
								} catch (error) {

								}
								if (realxml === "") {
									cusnotify("error", "mini", true, 4000, "密码错误或文件无效", false, true);
									return;
								}
								if (realxml === false) {
									cusnotify("error", "mini", true, 4000, "密码错误或文件无效", false, true);
									return;
								} else {
									PuzzleMakerGlobalSetting.PluginInfo = pluginInfo;
									Code.workspace.clear();
									Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(realxml), Code.workspace);
									cusnotify("success", "mini", true, 4000, "导入成功", false, true);
								}
								passwordWindow.destroy();
							}
						}
					});
				} else {
					cusnotify("error", "mini", true, 3000, "文件无效", false, true);
				}

			} else {
				cusnotify("error", "mini", true, 3000, "文件无效", false, true);
			}
		}
	}
});


$("#menu_delete").click(function () {
	Code.discard();
});

function updateMenu() {
	var isMenuOpen = $(".header_menubtn").attr("menu-open"); //获取菜单状态
	switch (isMenuOpen) {
		case '0': //关闭状态，即将打开
			$(".header_menubtn").attr("menu-open", "1");
			$(".header_menu_mark").css("display", "block");
			$(".header_menu").css("margin-top", "0px");
			break;
		case '1': //打开状态，即将关闭
			$(".header_menubtn").attr("menu-open", "0");
			$(".header_menu_mark").css("display", "none");
			$(".header_menu").css("margin-top", "-" + ($(".header_menu").height() + 10) + "px");
			break;
		default: //恢复初始状态
			$(".header_menubtn").attr("menu-open", "0");
			$(".header_menu_mark").css("display", "none");
			$(".header_menu").css("margin-top", "-" + ($(".header_menu").height() + 10) + "px");
			break;
	}
}


window.setInterval("autoSave()", 15000);