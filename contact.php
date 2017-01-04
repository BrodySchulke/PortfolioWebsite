<?php
  $from = $_POST['senderEmail'];
  $comments = $_POST['comments'];
  mail("schulke@uw.edu", "Porfolio conact from " . $from, $comments);
  mail("4255778617@mms.att.net", "Portfolio contact from " . $from, $comments);
?>
