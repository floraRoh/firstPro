<?php include $_SERVER['DOCUMENT_ROOT'] . "/page/db_connect.php"; ?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="css/style.css">
	<script src="js/script.js"></script>
	<title>방구석연구소 - 관리자</title>
</head>

<body>
	<div id="wrap">
		<header>
			<div id="logo">
				<a href="/">
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
				<li><a href="">컨텐츠</a></li>
				<li><a href="">업로드</a></li>
				<li><a href="" class="colorWhite">문제</a></li>
				<li><a href="">통계</a></li>
				<li><a href="">키워드</a></li>
				<li><a href="">공지사항</a></li>
			</ul>
		</nav>
		<section>
			<aside class="borderRadius">
				<p class="title">Q/A</p>
				<ul id="menu">
					<li><a href="">> 문제</a></li>
					<li><a href="">폰타 문제</a></li>
					<li><a href="">짤뽑기</a></li>
					<li><a href="">짤뽑기 User</a></li>
					<li><a href="">스낵 관리자</a></li>
				</ul>
			</aside>
			<article class="borderRadius">
				<!-- <div id="search_area">
					<form action="">
						<div>
							<label for="">내용</label>
							<select name="" id="">
								<option value="">내용</option>
							</select>
							<input type="text">
						</div>
						<div>
							<label for="">상태</label>
							<select name="" id="">
								<option value="">전체</option>
							</select>
						</div>
					</form>
					<button type="submit">검색</button>
				</div> -->
				<div id="list_btn">
					<input type="button" value="삭제">
					<a href="page/list_write.php">등록</a>
				</div>
				<table id="tableList">
					<tbody>
						<tr>
							<th></th>
							<th>번호</th>
							<th class="title">제목</th>
							<th>작성자</th>
							<th>작성일</th>
							<th>조회수</th>
						</tr>
						<?php
						$connect = mysqli_connect("localhost", "board_host", "1111", "board_smc");
						$query = 'select * from board order by idx desc';
						$result = $connect->query($query);
						while ($row = mysqli_fetch_assoc($result)) {
						?>
							<tr>
								<td>
									<input type="checkbox">
								</td>
								<td><?= $row['idx'] ?></td>
								<td>
									<a href="page/list_save.php?idx=<?= $row['idx'] ?>"><?= $row['title'] ?></a>
								</td>
								<td><?= $row['name'] ?></td>
								<td><?= $row['date'] ?></td>
								<td><?= $row['view'] ?></td>
							</tr>
						<?php
						}
						?>
					</tbody>
				</table>
			</article>
		</section>
		<footer class=" colorWhite">
			© Copyright 2020 by&nbsp;The SMC GROUP. All Rights Reserved.
		</footer>
	</div>
</body>

</html>