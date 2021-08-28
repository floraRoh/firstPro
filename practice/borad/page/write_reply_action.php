<?php
$connect = mysqli_connect("localhost", "board_host", "1111", "board_smc");

$idx = $_GET["idx"];
$id = $_GET["rp_name"];
$content = $_GET["rp_content"];
$date = date('Y-m-d H:i:s');

$query = "insert into board_reply (idx, name, date, content) values(null,'$id', '$date', '$content')";
$result = $connect->query($query);
if ($result) {
?>
  <script>
    alert("댓글이 등록되었습니다.");
    location.replace("/page/list_save.php?idx=<?= $idx ?>");
  </script>
<?php } else {
  echo "FAIL - 눈물";
}
mysqli_close($connect);
?>