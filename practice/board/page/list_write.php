<?php include $_SERVER['DOCUMENT_ROOT'] . "/page/db_connect.php"; ?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../css/style.css">
	<link rel="stylesheet" href="../css/list_write.css">
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
		<section>
			<aside class="borderRadius">
				<p class="title">Q/A</p>
				<ul id="menu">
					<li><a href="">> 일반 컨텐츠</a></li>
					<li><a href="">추천 컨텐츠</a></li>
					<li><a href="">인기 컨텐츠</a></li>
				</ul>
			</aside>
			<article class="borderRadius" id="list_write">
				<h1 class="title">게시글 작성</h1>
				<form action="write_action.php" method="get" onsubmit="return valueAlert();" enctype="multipart/form-data">
					<table id="list_write_table">
						<tr>
							<th>제목</th>
							<td>
								<input name="_title" id="_title" type="text" placeholder="제목을 작성해주세요." require>
							</td>
						</tr>
						<tr>
							<th>작성자</th>
							<td>
								<input id="_name" type="text" name="_name" placeholder="이름을 입력해주세요." require>
							</td>
						</tr>
						<tr>
							<th>내용</th>
							<td>
								<textarea name="_content" id="_content" cols="60" rows="30"></textarea>
							</td>
						</tr>
						<!-- <tr>
							<th>파일</th>
							<td>
								<input id="_file" type="file" name="_file">
							</td>
						</tr> -->
					</table>
					<div id="submit_btn">
						<a href="../index.php">취소</a>
						<input type="submit" value="등록" id="list_submit">
					</div>
				</form>
			</article>
		</section>
		<footer class="colorWhite">
			© Copyright 2020 by&nbsp;The SMC GROUP. All Rights Reserved.
		</footer>
	</div>
</body>

</html>