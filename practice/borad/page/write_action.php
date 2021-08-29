<?php
$connect = mysqli_connect("localhost", "board_host", "1111", "board_smc");

$id = $_GET["_name"];
$title = $_GET["_title"];
$content = isset($_GET["_content"]) ? $_GET["_content"] : "내용 없음";
$date = date('Y-m-d H:i:s');


$query = "insert into board (idx, name, title, date, content, view) values(null,'$id', '$title', '$date', '$content', 0)";

$result = $connect->query($query);
if ($result) {
?>
  <script>
    alert("글이 등록되었습니다.");
    location.replace("../index.php");
  </script>
<?php } else {
  echo "FAIL - 눈물";
}
mysqli_close($connect);

?>