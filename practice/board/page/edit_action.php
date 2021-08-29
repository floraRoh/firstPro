<?php
$connect = mysqli_connect("localhost", "board_host", "1111", "board_smc");

$idx = $_GET["_idx"];
$name = $_GET["_name"];
$title = $_GET["_title"];
$content = $_GET["_content"];
$date = date('Y-m-d H:i:s');


$query = "update board set name='$name', title='$title', date='$date', content='$content', view=0 where idx='$idx'";

$result = $connect->query($query);
if ($result) {
?>
  <script>
    alert("글이 수정되었습니다.");
    location.replace("../index.php");
  </script>
<?php } else {
  echo "FAIL - 눈물";
}
mysqli_close($connect);

?>