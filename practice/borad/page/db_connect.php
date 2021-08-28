<?php
// db주소, db계정, db pw, 데이터베이스 이름
$db = new mysqli("localhost", "board_host", "1111", "board_smc");
$db->set_charset("utf8");


// function mq($sql){
//   global $db;
//   return $db->query($sql);
// }
