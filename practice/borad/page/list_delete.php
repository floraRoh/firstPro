<?php
$connect = mysqli_connect("localhost", "board_host", "1111", "board_smc");

$idx = $_GET['idx'];
$query = "delete from board where idx = '$idx'";
$result = $connect->query($query);
if ($result) {
?>
  <script>
    alert("글이 삭제되었습니다.");
    location.replace("../index.php");
  </script>
<?php } else {
  echo "FAIL - 눈물";
}
mysqli_close($connect);

?>