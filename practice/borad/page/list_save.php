<?php include $_SERVER['DOCUMENT_ROOT'] . "/page/db_connect.php"; ?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../css/style.css">
	<link rel="stylesheet" href="../css/list_write.css">
	<link rel="stylesheet" href="../css/list_save.css">
	<script src="../js/script.js"></script>
	<title>방구석연구소 - 관리자</title>
</head>

<body>
	<div id="wrap">
		<header>
			<div id="logo">
				<a href="../index.php">
					<img src="https://thesmc.co.kr/wp-content/themes/thesmc/images/common/header_logo.png" alt="로고">
				</a>
			</div>
			<div>
				[노혜원]님 좋은 하루 되세요.
			</div>
			<div id="login_btn" class="colorWhite borderRadius">LOGOUT</div>
		</header>
		<nav>
			<ul id="nav_list">
				<li><a href="">회원관리</a></li>
				<li><a href="" class="colorWhite">컨텐츠</a></li>
				<li><a href="">업로드</a></li>
				<li><a href="">문제</a></li>
				<li><a href="">통계</a></li>
				<li><a href="">키워드</a></li>
				<li><a href="">공지사항</a></li>
			</ul>
		</nav>
		<section id="saveSection">
			<aside class="borderRadius">
				<p class="title">Q/A</p>
				<ul id="menu">
					<li><a href="">> 일반 컨텐츠</a></li>
					<li><a href="">추천 컨텐츠</a></li>
					<li><a href="">인기 컨텐츠</a></li>
				</ul>
			</aside>
			<article class="borderRadius" id="list_write">
				<table>
					<?php
					$connect = mysqli_connect("localhost", "board_host", "1111", "board_smc");
					$list_idx = $_GET['idx'];
					$query = 'select * from board where idx in (' . $list_idx . ')';
					$result = $connect->query($query);

					$row = mysqli_fetch_assoc($result);
					$idx = $row['idx'];
					$name = $row['name'];
					$title = $row['title'];
					$content = $row['content'];
					$date = $row['date'];
					?>
					<tr>
						<td colspan="4"><?php echo $row['title']; ?></td>
					</tr>
					<tr>
						<th>번호</th>
						<td><?php echo $idx; ?></td>
						<th>작성자</th>
						<td><?php echo $name; ?></td>
					</tr>
					<tr>
						<th colspan="1">등록시간</th>
						<td colspan="3"><?php echo $date; ?></td>
					</tr>
					<tr>
						<th>내용</th>
						<td colspan="3"><?php echo $content; ?></td>
					</tr>
					<!-- <tr>
						<th>파일</th>
						<td colspan="3"><?php echo $file; ?></td>
					</tr> -->
				</table>
				<div id="list_btn">
					<a href="list_delete.php?idx=<?php echo $idx ?>">삭제하기</a>
					<a href="list_edit.php?idx=<?php echo $idx ?>">글 수정</a>
				</div>
			</article>
		</section>
		<form action="write_reply_action.php" method="get" class="marginW">
			<!-- 댓글 쓰기 창 -->
			<table id="table_reply" class="borderRadius">
				<tbody>
					<tr>
						<th>이름</th>
						<td>
							<input name="rp_name" type="text" placeholder="이름을 입력하세요.">
						</td>
					</tr>
					<tr>
						<th>내용</th>
						<td>
							<textarea name="rp_content" id="" rows="3" placeholder="내용을 입력하세요."></textarea>
						</td>
					</tr>
				</tbody>
			</table>
			<div id="list_btn">
				<a href="../index.php">목록으로</a>
				<input type="submit" value="댓글 등록" id="reply_submit">
			</div>
		</form>
		<?php
		$query_re = 'select * from board_reply order by idx desc';
		$result_re = $connect->query($query_re);

		while ($row_re = mysqli_fetch_assoc($result_re)) {
			$idx_re = $row_re['idx'];
			$name_re = $row_re['name'];
			$date_re = $row_re['date'];
			$content_re = $row_re['content'];
		?>
			<table id="reply_list" class="borderRadius marginW">
				<tbody>
					<tr>
						<th rowspan="3"><?php echo  $idx_re; ?></th>
						<td><?php echo $name_re; ?></td>
						<td><?php echo $date_re; ?></td>
					</tr>
					<tr>
						<td colspan="2"><?php echo $content_re; ?></td>
					</tr>
					<tr>
						<!-- <td>수정</td> -->
						<td><a href="list_reply_delete.php?idx=<?php echo $idx ?>&idx_re=<?php echo $idx_re ?>">삭제하기</a></td>
					</tr>
				</tbody>
			</table>
		<?php
		}
		?>

		<footer class="colorWhite">
			© Copyright 2020 by&nbsp;The SMC GROUP. All Rights Reserved.
		</footer>
	</div>
</body>

</html>