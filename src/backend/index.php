<?php
	ini_set("log_errors", 1);

	header('Access-Control-Allow-Origin: *');

	require_once("server.php");

	if(!empty($_POST["request"])) {
		$server = new Server();
		
		switch ($_POST["request"]) {
			case "getUser":
				$server->getUser($_POST['username'], $_POST['address']);
				break;
			case "postPhoto":
				$server->postPhoto($_POST['userID'], $_FILES, $_POST['NFT']);
				break;
			case "deletePhoto":
				$server->deletePhoto($_POST['photoID']);
				break;
			case "comment":
				$server->comment($_POST['photoID'], $_POST['username'], $_POST['timestamp'], $_POST['text']);
				break;
			case "deleteComment":
				$server->deleteComment($_POST['commentID']);
				break;
			case "like":
				$server->like($_POST['photoID'], $_POST['userID']);
				break;
			case "unlike":
				$server->unlike($_POST['photoID'], $_POST['userID']);
				break;
			case "follow":
				$server->follow($_POST['userID'], $_POST['following']);
				break;
			case "unfollow":
				$server->unfollow($_POST['userID'], $_POST['following']);
				break;
			case "photosByUser":
				$server->photosByUser($_POST['userID']);
				break;
			case "commentsByPhoto":
				$server->commentsByPhoto($_POST['photoID']);
				break;
			case "likesByPhoto":
				$server->likesByPhoto($_POST['photoID']);
				break;
			case "likesByUser":
				$server->likesByUser($_POST['userID']);
				break;
			case "following":
				$server->followings($_POST['userID']);
				break;
			case "followers":
				$server->followers($_POST['userID']);
				break;
			case "getAddresses":
				$server->getAddresses($_POST['userIds'], $_POST['length']);
				break;
			default:
				//echo "";
		}
		
		$data = [ 'returned' => $server->returnData ];

		echo json_encode($data);
	} else {
		error_log("no suitable request received");
	}
?>
