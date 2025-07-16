<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = strip_tags($_POST["username"]);
  $message = strip_tags($_POST["message"]);

  $entry = "[" . date("H:i:s") . "] " . $username . ": " . $message . "\n";

  file_put_contents("messages.txt", $entry, FILE_APPEND);
}
?>
