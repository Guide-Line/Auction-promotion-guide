
# [목차이동](https://github.com/Guide-Line/Auction-promotion-guide#TOC)

## <a name='swipe'>Swipe</a>

  
    
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
		#p_wrapper .swiper-pagination .swiper-pagination-switch{width:12px;height:12px;display:inline-block;*display:inline;*zoom:1;padding:0 8px;...	</div>

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
