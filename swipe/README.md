
# [목차이동](https://github.com/Guide-Line/Auction-promotion-guide#TOC)

## <a name='swipe'>Swipe</a>

### Official Site
-http://idangero.us/swiper/api/#.WAdfffmLTmF

### 웹  
    
```javascript
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/html">
<head>
	<title>옥션 - 모바일 쇼핑은 옥션</title>
	<meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link rel="stylesheet" href="http://eventimg.auction.co.kr/md/auction/08405BF42E/idangerous.swiper.css">
	<style type="text/css">
		*{margin:0;padding:0}
		img{border:0;vertical-align:top}
		li{list-style:none}

		#p_wrapper{width:980px;margin:0 auto;position:relative;padding-bottom:20px}		
		#p_wrapper .swiper-wrapper{position:relative}
		#p_wrapper .swiper-slide{position:relative;width:980px;height:500px;}
		#p_wrapper .swiper-pagination{width:100%;bottom:0;left:0}
		#p_wrapper .swiper-pagination .swiper-pagination-switch{width:12px;height:12px;display:inline-block;*display:inline;*zoom:1;padding:0 8px;background:url(http://eventimg.auction.co.kr/md/auction/08E93EF946/w_ico_blit_off.png) no-repeat 0 0;border-radius:0}
		#p_wrapper .swiper-pagination .swiper-active-switch{background:url(http://eventimg.auction.co.kr/md/auction/08E93EF946/w_ico_blit_on.png) no-repeat 0 0}
		#p_wrapper .swiper-button-prev{width:68px;height:68px;position:absolute;top:50%;margin-top:-34px;left:0;background:url(http://eventimg.auction.co.kr/md/auction/08E93EF946/w_btn_prev.png) no-repeat 0 0;z-index:100;cursor:pointer}
		#p_wrapper .swiper-button-next{width:68px;height:68px;position:absolute;top:50%;margin-top:-34px;right:0;background:url(http://eventimg.auction.co.kr/md/auction/08E93EF946/w_btn_next.png) no-repeat 0 0;z-index:100;cursor:pointer}
	</style>
	<script type="text/javascript" src="http://script.auction.co.kr/common/jquery.js"></script>
	<script src="http://eventimg.auction.co.kr/md/auction/08405BF42E/idangerous.swiper.js"></script>
</head>
<body>

	<div id="p_wrapper">

		<div class="swiper-container">
			<div class="swiper-wrapper">

				
				<div class="swiper-slide">1</div>
				<div class="swiper-slide">2</div>
				<div class="swiper-slide">3</div>
				<div class="swiper-slide">4</div>
				<div class="swiper-slide">5</div>
				<div class="swiper-slide">6</div>
				<div class="swiper-slide">7</div>
				<div class="swiper-slide">8</div>
			

			</div>
		</div>

		<!-- Add Arrows -->
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>

		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>

	</div>

	<script>
		var mySwiper = new Swiper('#p_wrapper .swiper-container', {			
			pagination:'#p_wrapper .swiper-pagination',
			paginationClickable:true,
			simulateTouch:true,
			loop:true,
			autoplay:4500,
			calculateHeight:true
		});
		$('#p_wrapper .swiper-button-prev').bind('click', function(e){
			e.preventDefault();

			// Autoplay false일때
			mySwiper.swipePrev();

			// Autoplay True일때
			mySwiper.stopAutoplay();
			mySwiper.swipePrev();
			mySwiper.startAutoplay();
		});
		$('#p_wrapper .swiper-button-next').bind('click', function(e){
			e.preventDefault();
			
			// Autoplay false일때
			mySwiper.swipeNext();

			// Autoplay True일때
			mySwiper.stopAutoplay();
			mySwiper.swipeNext();
			mySwiper.startAutoplay();
		});
	</script>
	
</body>
</html>
```


### 모바일  
    
```javascript
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="euc-kr">
	<title>옥션 - 모바일 쇼핑은 옥션</title>
	<meta id="viewport" name="viewport" content="width=device-width,initial-scale=1, user-scalable=no" />
	<meta http-equiv="cleartype" content="on"/>
	<link rel="stylesheet" href="http://eventimg.auction.co.kr/md/auction/0868D4BD4A/swiper.min.css">	
	<style type="text/css">
		*{margin:0;padding:0}
		img{border:0;vertical-align:top}
		li{list-style:none}

		#p_header{margin:0 auto;position:relative}
		#p_header img{width:100%}
		#p_header .slider_wrap{position:relative;overflow:hidden;background:#fff;padding-bottom:10%}
		#p_header .swiper-container {overflow:hidden;position:relative}
		#p_header .swiper-wrapper {width:100%;height:100%}
		#p_header .swiper-slide {overflow:hidden;position:relative}		
		#p_header .swiper-pagination{width:100%;text-align:center;position:absolute;left:0;bottom:5%}
		#p_header .swiper-pagination-bullet{width:6px;height:6px;margin:0 5px;background:#000;border:2px #000 solid;border-radius:100%;opacity:1}
		#p_header .swiper-pagination-bullet-active{border:2px #000 solid;opacity:1;background:transparent}
		#p_header .swiper-button-prev{opacity:0.3;width:40px;height:40px;z-index:10;top:50%;background-color:#fff;background-size:30px 20px;margin-top:-20px;left:0}
		#p_header .swiper-button-next{opacity:0.3;width:40px;height:40px;z-index:10;top:50%;background-color:#fff;background-size:30px 20px;margin-top:-20px;right:0}		
	</style>
	<script type="text/javascript" src="http://eventimg.auction.co.kr/md/auction/086A428A1C/jquery-1.11.3.min.js"></script>
	<script src="http://eventimg.auction.co.kr/md/auction/0868D4BD4A/swiper.min.js"></script>
</head>
<body>
	
	<div id="p_header">
		<div class="slider_wrap">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					
					<!--  -->
					<div class="swiper-slide">1</div>
					<div class="swiper-slide">2</div>
					<div class="swiper-slide">3</div>
					<div class="swiper-slide">4</div>
					<div class="swiper-slide">5</div>
					<div class="swiper-slide">6</div>
					<div class="swiper-slide">7</div>
					<div class="swiper-slide">8</div>
					<div class="swiper-slide">9</div>
					<!-- // -->

				</div>
			</div>			

			<!-- Add Arrows -->
			<div class="swiper-button-next swiper-button-black"></div>
			<div class="swiper-button-prev swiper-button-black"></div>

			<div class="swiper-pagination"></div>
		</div>

		<script>
			var swiper01 = new Swiper('#p_header .slider_wrap .swiper-container', {				
				autoplay : 4500,
				nextButton: '#p_header .slider_wrap .swiper-button-next',
				prevButton: '#p_header .slider_wrap .swiper-button-prev',
				pagination: '#p_header .swiper-pagination',
				paginationClickable: true,
				loop: true,
				autoHeight: true,
				spaceBetween: 0
			});			
		</script>
	</div>

</body>
</html>
```
