<?php
error_reporting(0);
require("conn.php");
$style = str_replace("\n","",$_POST['style']);
$code = str_replace("\n","",$_POST['code']);
$uid = $_COOKIE["cqpm_uid"];
$account = $_COOKIE["weibojs_4031974087"];
$uidt = $_POST['uid'];
$pid = $_POST['pid'];

if($uid <> $uidt){echo "error";exit;}
if($style == "" || $code == "" || $uid == ""){echo "error";exit;}
if($pid == ""){echo "nopid";exit;}


$values_array = getUrlKeyValue("?".$account);
$account = $values_array['access_token'];

//$url = "https://api.weibo.com/2/account/get_uid.json?access_token=2.00n345vFHekr5E20a7291eed0JDp21";
$url = "https://api.weibo.com/2/account/get_uid.json?access_token=".$account;
$res = http_request($url);
$json=json_decode($res);
if ($res == "") {
	echo "error";
	exit;
}

if ($json->error) {
	echo "error";
	exit;
} else {
	if($json->uid <> $uid){echo "error";exit;}
}

$pid_num = $uid . "-" . $pid;

$sql ="SELECT pid FROM allcodes WHERE `uid`='$uid'"; //SQL语句
$result = mysql_query($sql,$conn); //查询
while($row = mysql_fetch_array($result)){
	$maxpidnum = $row['pid'];
}

if((int)$maxpidnum == 0){
	$sql = "INSERT INTO allcodes (uid,pid) VALUES (\"".$uid."\",\"5\")";
	mysql_query($sql,$conn);
	$maxpidnum = "5";
}
if((int)$pid > (int)$maxpidnum){echo "exceed";exit;}

$sql ="SELECT * FROM cqpmsys WHERE `key`='id'"; //SQL语句
$result = mysql_query($sql,$conn); //查询
while($row = mysql_fetch_array($result)){
	$allid = $row['value'];
}

if(strstr($allid,"*".$pid_num."*")){
	$sql = "UPDATE cqpmcodes SET code = \"$code\",style=\"$style\" WHERE `pid`='$pid_num'";
	if(mysql_query($sql,$conn)){
		echo "ok";
	} else {
		echo "error";
	}
} else {
	$sql = "UPDATE cqpmsys SET value = '".$allid."*".$pid_num."*' WHERE `key`='id'|||||";
	$sql .= "INSERT INTO cqpmcodes (pid,code,style) VALUES (\"" . $pid_num . "\",\"$code\",\"$style\")";

	$sql_array = explode('|||||',$sql);
	$isError = 0;
	for($index=0;$index<count($sql_array);$index++){
		if(mysql_query($sql_array[$index],$conn)){
		} else {
			$isError = $isError + 1;
		}
	} 
	
	if($isError == 0){
		echo "ok";
	} else {
		echo "error";
	}
}

function getUrlKeyValue($url)
	{
		$result = array();
		$mr     = preg_match_all('/(\?|&)(.+?)=([^&?]*)/i', $url, $matchs);
		if ($mr !== false) {
			for ($i = 0; $i < $mr; $i++) {
				$result[$matchs[2][$i]] = $matchs[3][$i];
			}
		}
		return $result;
	}

function http_request($uri)
	{
		    //初始化  
			$curl = curl_init();  
			//设置抓取的url  
			curl_setopt($curl, CURLOPT_URL, $uri);  
			//设置头文件的信息作为数据流输出  
			curl_setopt($curl, CURLOPT_HEADER, 0); 
			curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
			//设置获取的信息以文件流的形式返回，而不是直接输出。  
			curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);  
			//执行命令  
			$data = curl_exec($curl);  
			//关闭URL请求  
			curl_close($curl);  
			return $data;
	}

?>