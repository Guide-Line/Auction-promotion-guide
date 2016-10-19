
# [목차이동](https://github.com/Guide-Line/Auction-promotion-guide#TOC)

## <a name='fixed_top_navigation'>fixed_top_navigation</a>


### 웹  
	네비를 상단에 고정시키고, 고정된 네비는 하단 앵커로 이동하는 기능을 합니다.	

```javascript
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/html">
<head>
	<title>옥션 - 모바일 쇼핑은 옥션</title>
	<meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<script type="text/javascript" src="http://script.auction.co.kr/common/jquery.js"></script>
	<script type="text/javascript">
	<!--
		// 링크 연동
		$(document).ready(function(){
			var naviH = $("#p_navi").height();

			// when scroll
			$(window).scroll(function(){
				var num = 0;
				var aboveHeight = $("#p_navi").offset().top;
				var menuPos = new Array;
				var menuLength = $("#p_navi_area li").length-1;

				locate = $(window).scrollTop()+45;
				locate2 = $(window).scrollTop()+45+naviH; // 마지막 네비높이


				//scrolled down header's height
				if (locate >= aboveHeight){
					$("#p_navi_area").addClass('fixed');
				} else {
					$("#p_navi_area").removeClass('fixed');
				}

				$("#p_navi_area li").each(function(i){
					menuPos[i] = $($("#p_navi_area li:eq("+i+") a").attr("href")).offset().top;
					$("#p_navi_area li:eq("+i+") a img").attr("src", $("#p_navi_area li:eq("+i+") a img").attr("src").replace("_on.png", "_off.png"));
				});
				if(locate2 < menuPos[1]){
					num = 0
				} else if(locate2 < menuPos[2]){
					num = 1
				} else if(locate2 < menuPos[3]){
					num = 2
				} else if(locate2 < menuPos[4]){
					num= 3;
				} else {
					num= menuLength;
				}
				$("#p_navi_area li:eq("+num+") a img").attr("src", $("#p_navi_area li:eq("+num+") a img").attr("src").replace("_off.png", "_on.png"));
			});

			$("#p_navi_area ul li a").click(function(){
				winHeight = $(window).scrollTop();

				var iElm = $(this).attr("href");
				var iElmPos = $(iElm).offset().top;

				if(winHeight <= 90){
					$('html, body').stop().animate({ scrollTop: iElmPos-90-naviH }, "slow"); // 마지막 네비높이
				} else {
					$('html, body').stop().animate({ scrollTop: iElmPos-45-naviH }, "slow"); // 마지막 네비높이
				}
				return false;
			})
		})
	//-->
	</script>
	<style type="text/css">
		*{margin:0;padding:0;}
		img{border:0;vertical-align:top;}
		li{list-style:none;}

		#p_navi{width:100%;height:66px;position:relative;z-index:300;}
		#p_navi_area{height:66px;z-index:10;background:url(http://eventimg.auction.co.kr/md/auction/08474515E3/bg_navi_shadow.png) left bottom repeat-x;}
		#p_navi_cnt{height:61px;z-index:10;background:#00549a;}
		#p_navi_cnt ul{width:980px;margin:0 auto;overflow:hidden;}
		#p_navi_cnt ul li{width:20%;float:left;text-align:center;}

		.p_cnt{height:1000px;border:1px red solid;}

		.fixed{position:fixed;top:45px;left:0;width:100%;background:#fff;margin:0;z-index:100;}
	</style>
</head>
<body>

	<div id="p_header" style="border:1px blue solid;height:200px;">
		상단 이미지
	</div>

	<div id="p_navi">
		<div id="p_navi_area">
			<div id="p_navi_cnt">
				<ul>
					<li><a href="#p_section01"><img src="images/navi01_on.png" alt="" /></a></li>
					<li><a href="#p_section02"><img src="images/navi02_off.png" alt="" /></a></li>
					<li><a href="#p_section03"><img src="images/navi03_off.png" alt="" /></a></li>
					<li><a href="#p_section04"><img src="images/navi04_off.png" alt="" /></a></li>
					<li><a href="#p_section05"><img src="images/navi04_off.png" alt="" /></a></li>
				</ul>
			</div>
		</div>
	</div>

	<div id="p_section01" class="p_cnt">
		1
	</div>
	<div id="p_section02" class="p_cnt">
		1
	</div>
	<div id="p_section03" class="p_cnt">
		1
	</div>
	<div id="p_section04" class="p_cnt">
		1
	</div>
	<div id="p_section05" class="p_cnt">
		1
	</div>
	<div id="p_section06" class="p_cnt">
		1
	</div>
</body>
</html>
```
    


### 모바일  
    네비를 상단에 고정시키고, 고정된 네비는 하단 앵커로 이동하는 기능을 합니다.	

```javascript
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="euc-kr">
	<title>옥션 - 모바일 쇼핑은 옥션</title>
	<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1,  user-scalable=no" />
	<meta http-equiv="cleartype" content="on"/>
	<script type="text/javascript" src="http://script.auction.co.kr/common/jquery.js"></script>
	<script type="text/javascript">
	<!--
		var menuH;

		window.onload = function(){
			menuH = $("#p_navi_cnt ul li img").height();

			$("#p_navi").css("height",menuH);
			$("#review_popup").css("top",menuH);
		}

		$(window).resize(function(){
			menuH = $("#p_navi_cnt ul li img").height();

			$("#p_navi").css("height",menuH);
			$("#review_popup").css("top",menuH);
		})

		$(document).ready(function(){
			// when scroll
			$(window).scroll(function(){
				var num = 0;
				var aboveHeight = $("#p_navi").offset().top;
				var menuPos = new Array;
				var menuLength = $("#p_navi_area li").length-1;

				locate = $(window).scrollTop();
				locate2 = $(window).scrollTop()+menuH; // 마지막 네비높이

				//scrolled down header's height
				if (locate >= aboveHeight){
					$("#p_navi_area").addClass('fixed');
				} else {
					$("#p_navi_area").removeClass('fixed');
				}

				$("#p_navi_area li").each(function(i){
					menuPos[i] = $($("#p_navi_area li:eq("+i+") a").attr("href")).offset().top;
					$("#p_navi_area li:eq("+i+") a img").attr("src", $("#p_navi_area li:eq("+i+") a img").attr("src").replace("_on.png", "_off.png"));
				});
				if(locate2 < menuPos[1]){
					num = 0
				} else if(locate2 < menuPos[2]){
					num = 1
				} else if(locate2 < menuPos[3]){
					num = 2
				} else if(locate2 < menuPos[4]){
					num= 3;
				} else {
					num= menuLength;
				}
				$("#p_navi_area li:eq("+num+") a img").attr("src", $("#p_navi_area li:eq("+num+") a img").attr("src").replace("_off.png", "_on.png"));
			});

			$("#p_navi_area ul li a").click(function(){
				winHeight = $(window).scrollTop();

				var iElm = $(this).attr("href");
				var iElmPos = $(iElm).offset().top;

				$('html, body').stop().animate({ scrollTop: iElmPos-menuH }, "slow");
				return false;
			})
		})
	//-->
	</script>
	<style type="text/css">
		*{margin:0;padding:0;}
		img{border:0;vertical-align:top;}
		li{list-style:none;}

		#p_navi{z-index:10;position:relative;}
		#p_navi_cnt{z-index:10;overflow:hidden;background:#00a735;max-width:640px;margin:0 auto;}
		#p_navi_cnt ul{overflow:hidden;}
		#p_navi_cnt ul li{width:25%;float:left;}
		#p_navi_cnt ul li img{width:100%;}

		.p_cnt{height:1000px;border:1px red solid;}

		.fixed{position:fixed;top:0;left:0;width:100%;background:#fff;margin:0;z-index:100;}
	</style>
</head>
<body>

	<div id="p_header" style="border:1px blue solid;height:200px;">
		상단 이미지
	</div>

	<div id="p_navi">
		<div id="p_navi_area">
			<div id="p_navi_cnt">
				<ul>
					<li><a href="#p_section01"><img src="images/navi01_on.png" alt="" /></a></li>
					<li><a href="#p_section02"><img src="images/navi02_off.png" alt="" /></a></li>
					<li><a href="#p_section03"><img src="images/navi03_off.png" alt="" /></a></li>
					<li><a href="#p_section04"><img src="images/navi04_off.png" alt="" /></a></li>
				</ul>
			</div>
		</div>
	</div>

	<div id="p_section01" class="p_cnt">
		1
	</div>
	<div id="p_section02" class="p_cnt">
		1
	</div>
	<div id="p_section03" class="p_cnt">
		1
	</div>
	<div id="p_section04" class="p_cnt">
		1
	</div>
	<div id="p_section05" class="p_cnt">
		1
	</div>
	<div id="p_section06" class="p_cnt">
		1
	</div>
</body>
</html>
```


