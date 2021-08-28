<?php
$connect = mysqli_connect("localhost", "board_host", "1111", "board_smc");

$idx = $_GET['idx'];
$idx_re = $_GET['idx_re'];
$query = "delete from board_reply where idx = '$idx_re'";
$result = $connect->query($query);
if ($result) {
?>
  <script>
    alert("글이 삭제되었습니다.");
    location.replace("/page/list_save.php?idx=<?= $idx ?>");
  </script>
<?php } else {
  echo "FAIL - 눈물";
}
mysqli_close($connect);

?>