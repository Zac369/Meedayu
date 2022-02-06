<?php
    require_once("configuration.php");

    class Server {
        public $returnData = null;

        function __construct() {
			
        }
		
		public function getUser($username, $address) {
			global $dbCon;
			$userID = "empty";
			
			try {
				$stmt = $dbCon->query("SELECT id FROM users WHERE username = '".$username."'");
				$fetchResult = $stmt->fetch();

				if(!$fetchResult) {
					$sql = "INSERT INTO users (username, address) VALUES (:username, :address)";
					$stmt = $dbCon->prepare($sql);

					$stmt->bindParam(':username', $username, PDO::PARAM_STR);
					$stmt->bindParam(':address', $address, PDO::PARAM_STR);
					$stmt->execute(array(':username' => $username, ':address' => $address));
					
					$stmt = $dbCon->query("SELECT id FROM users WHERE username = '".$username."'");

					$fetchResult = $stmt->fetch();
					$userID = $fetchResult[0];
				} else {
					$userID = $fetchResult[0];
				}
				
				$this->returnData = $userID;
			} catch (PDOException $e) {
				error_log("Failed to get userID from DB : err: ".$e->getMessage());
			}
		}
		
		public function postPhoto($userID, $files, $NFT) {
			global $dbCon;
			
			try {
				$sql = "INSERT INTO photos (userID, image, NFT) VALUES (:userID, :image, :NFT)";
				$stmt = $dbCon->prepare($sql);
				
				$tmpName  = $files['image']['tmp_name'];  
				$image = fopen($tmpName, 'rb'); // read binary				
				
				$stmt->bindParam(':userID', $userID, PDO::PARAM_STR);
				$stmt->bindParam(':image', $image, PDO::PARAM_LOB);
				$stmt->bindParam(':NFT', $NFT, PDO::PARAM_STR);
				$stmt->execute(array(':userID' => $userID, ':image' => $image, ':NFT' => $NFT));
			} catch (PDOException $e) {
				error_log("Failed to save photo : err: ".$e->getMessage());
			}
		}
		
		public function deletePhoto($photoID) {
			global $dbCon;
			
			try {
				$stmt = $dbCon->query("DELETE FROM photos WHERE photoID = '".$photoID."'");
			} catch (PDOException $e) {
				error_log("Failed to delete image from DB : err: ".$e->getMessage());
			}
		}
		
		public function comment($photoID, $username, $timestamp, $text) {
			try {
				$sql = "INSERT INTO comments (photoID, username, timestamp, text) VALUES (:photoID, :username, :timestamp, :text)";
				$stmt = $dbCon->prepare($sql);

				$stmt->bindParam(':photoID', $photoID, PDO::PARAM_STR);	
				$stmt->bindParam(':username', $username, PDO::PARAM_STR);
				$stmt->bindParam(':timestamp', $timestamp, PDO::PARAM_STR);
				$stmt->bindParam(':text', $text, PDO::PARAM_STR);
				$stmt->execute(array(':photoID' => $photoID, ':username' => $username, ':timestamp' => $timestamp, ':text' => $text));
			} catch (PDOException $e) {
				error_log("Failed to add comment : err: ".$e->getMessage());
			}
		}
		
		public function deleteComment($commentID) {
			global $dbCon;
			
			try {
				$stmt = $dbCon->query("DELETE FROM comments WHERE id = '".$commentID."'");
			} catch (PDOException $e) {
				error_log("Failed to delete comment from DB : err: ".$e->getMessage());
			}
		}
		
		public function like($photoID, $userID) {
			global $dbCon;
			
			try {
				$sql = "INSERT INTO likes (photoID, userID) VALUES (:photoID, :userID)";
				$stmt = $dbCon->prepare($sql);

				$stmt->bindParam(':photoID', $photoID, PDO::PARAM_STR);
				$stmt->bindParam(':userID', $userID, PDO::PARAM_STR);
				$stmt->execute(array(':photoID' => $photoID, ':userID' => $userID));
			} catch (PDOException $e) {
				error_log("Failed to like post : err: ".$e->getMessage());
			}
		}
		
		public function unlike($photoID, $userID) {
			global $dbCon;
			
			try {
				$stmt = $dbCon->query("DELETE FROM likes WHERE photoID = '".$photoID."' AND userID = '".$userID."'");
			} catch (PDOException $e) {
				error_log("Failed to delete like from DB : err: ".$e->getMessage());
			}
		}
		
		public function follow($userID, $following) {
			global $dbCon;
			
			try {
				$sql = "INSERT INTO following (userID, following) VALUES (:userID, :following)";
				$stmt = $dbCon->prepare($sql);

				$stmt->bindParam(':userID', $userID, PDO::PARAM_STR);
				$stmt->bindParam(':following', $following, PDO::PARAM_STR);
				$stmt->execute(array(':userID' => $userID, ':following' => $following));
			} catch (PDOException $e) {
				error_log("Failed to follow : err: ".$e->getMessage());
			}
		}
		
		public function unfollow($userID, $following) {
			global $dbCon;
			
			try {
				$stmt = $dbCon->query("DELETE FROM following WHERE following = '".$following."' AND userID = '".$userID."'");
			} catch (PDOException $e) {
				error_log("Failed to delete follow from DB : err: ".$e->getMessage());
			}
		}
		
		public function photosByUser($userID) {
			global $dbCon;

			try {
				$stmt = $dbCon->query("SELECT * FROM `photos` WHERE userID = '".$userID."' ORDER BY timestamp");
				$images = $stmt->fetchAll();

				$returnData = $images;
			} catch (PDOException $e) {
				error_log("Failed to get images from DB : err: ".$e->getMessage());
			}
		}
		
		public function commentsByPhoto($photoID) {
			global $dbCon;

			try {
				$stmt = $dbCon->query("SELECT * FROM `photos` WHERE photoID = '".$photoID."' ORDER BY timestamp");
				$comments = $stmt->fetchAll();

				$returnData = $comments;
			} catch (PDOException $e) {
				error_log("Failed to get comments from DB : err: ".$e->getMessage());
			}
		}
		
		public function likesByPhoto($photoID) {
			global $dbCon;

			try {
				$stmt = $dbCon->query("SELECT * FROM `likes` WHERE photoID = '".$photoID."'");
				$likes = $stmt->fetchAll();

				$returnData = $likes;
			} catch (PDOException $e) {
				error_log("Failed to get likes from DB : err: ".$e->getMessage());
			}
		}
		
		public function likesByUser($userID) {
			global $dbCon;

			try {
				$stmt = $dbCon->query("SELECT * FROM `likes` WHERE userID = '".$userID."'");
				$likes = $stmt->fetchAll();

				$returnData = $likes;
			} catch (PDOException $e) {
				error_log("Failed to get likes from DB : err: ".$e->getMessage());
			}
		}
		
		public function followings($userID) {
			global $dbCon;

			try {
				$stmt = $dbCon->query("SELECT * FROM `followings` WHERE userID = '".$userID."'");
				$followings = $stmt->fetchAll();

				$returnData = $followings;
			} catch (PDOException $e) {
				error_log("Failed to get followings from DB : err: ".$e->getMessage());
			}
		}
		
		public function followers($userID) {
			global $dbCon;

			try {
				$stmt = $dbCon->query("SELECT * FROM `followings` WHERE following = '".$userID."'");
				$followers = $stmt->fetchAll();

				$returnData = $followers;
			} catch (PDOException $e) {
				error_log("Failed to get followings from DB : err: ".$e->getMessage());
			}
		}

		public function getAddresses($userIds, $length) {
			global $dbCon;
			
			$addresses = [];

			try {
				$ignore = false;
				
				for($i = 0; $i < $length; $i++) {
					
					if($ignore = true) { 
						$ignore = false;
					} else {
						$stmt = $dbCon->query("SELECT address FROM users WHERE id = '".$userIds[$i]."'");
						$fetchResult = $stmt->fetch();
						$addresses[$i] = $fetchResult[0];
						$ignore = true;
					}
					
					error_log("Failed to get followings from DB : err: ".$e->getMessage());
				}

				$returnData = $addresses;
			} catch (PDOException $e) {
				error_log("Failed to get followings from DB : err: ".$e->getMessage());
			}
		}
    }
?>