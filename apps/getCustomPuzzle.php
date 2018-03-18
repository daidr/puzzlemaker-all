<?php
error_reporting(0);
include('Requests-1.7.0/library/Requests.php');
Requests::register_autoloader();
require("conn2.php");
$type = $_GET['type'];
$uid = $_COOKIE["uid"];
$account = $_COOKIE["access_token"];

if($type == "" || $uid == ""){echo "console.log('error');";mysqli_close($conn);exit;}


//$url = "https://api.weibo.com/2/account/get_uid.json?access_token=2.00n345vFHekr5E20a7291eed0JDp21";
$url = "https://api.weibo.com/2/account/get_uid.json?access_token=".$account;
$res = Requests::get($url);
$res = $res->body;

$json=json_decode($res);
if ($res == "") {
	echo "console.log('error');";
	mysqli_close($conn);
	exit;
}

if ($json->error) {
	echo "console.log('error');";
	mysqli_close($conn);
	exit;
} else {
	if($json->uid <> $uid){echo "console.log('error');";mysqli_close($conn);exit;}
}

if($type == "getScript"){
	$sql ="SELECT puzzleIDs FROM UsersCustomPuzzle WHERE `uid`='$uid'";
	$result = mysqli_query($conn,$sql); //查询
	if (mysqli_num_rows($result) == 0) {
		echo "empty";
		mysqli_free_result($result);
		mysqli_close($conn);
		exit;
	}
	while($row = mysqli_fetch_row($result)){
		$IDList = $row[0];
		if($IDList == ""){
			mysqli_free_result($result);
			mysqli_close($conn);
			echo "empty";
			exit;
		} else {
			mysqli_free_result($result);
			mysqli_close($conn);
			echo $IDList;
		}	
	}
} else if ($type == "getCustomPuzzleID"){
	$sql ="SELECT puzzleIDs FROM UsersCustomPuzzle WHERE `uid`='$uid'"; //SQL语句
	$result = mysqli_query($conn,$sql); //查询
	if (mysqli_num_rows($result) == 0) {
		echo "empty";
		mysqli_free_result($result);
		mysqli_close($conn);
		exit;
	}
	while($row = mysqli_fetch_row($result)){
		$IDList = $row[0];
		if($IDList == ""){
			mysqli_free_result($result);
			mysqli_close($conn);
			echo "empty";
			exit;
		} else {
			mysqli_free_result($result);
			mysqli_close($conn);
			echo $IDList;
		}	
	}
}


mysqli_free_result($result);
mysqli_close($conn);
?>