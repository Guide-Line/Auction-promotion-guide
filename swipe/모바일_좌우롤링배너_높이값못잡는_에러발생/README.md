
# [목차이동](https://github.com/Guide-Line/Auction-promotion-guide#TOC)

## <a name='swipe'>모바일에서 Swipe error</a>



### 모바일  
    
```javascript
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="euc-kr">
    <title>옥션 - 모바일 쇼핑은 옥션</title>
    <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1,  user-scalable=no" />
    <meta http-equiv="cleartype" content="on" />
    
    
    <script type="text/javascript" src="http://script.auction.co.kr/common/jquery.js"></script>
    
    <style>
       *{padding: 0; margin:0; border:0;}
    </style>
    <script type="text/javascript">
    
        /*
            스크립트를 선언해 줍니다.
        */
        $(window).load = function () {
            resizeFun()
        }
        $(window).resize(function () {
            resizeFun()
        });
        function resizeFun() {
            var docWidth = document.body.offsetWidth;
            if (docWidth < 640) {
                $(".swipe_obj").css("width", docWidth + "px")
            } else {
                $(".swipe_obj").css("width", 640 + "px")
            }
        }
        /*
            여기까지
        */
        
    </script>
</head>

<body>
    /*
        좌우배너 기획전 페이지에 적용시 아래처럼 작성해주세요
    */
	<!-- 좌우배너1 -->
    <div style="position:relative; width:100% !important; line-height:0;">    	
    	<iframe class="swipe_obj"  src="http://eventv2.auction.co.kr/event3/2017/03/40/edra1412_Beauty/mIfrm03Good.aspx?index=1" width="100%"  scrolling="no" frameborder="0" allowTransparency="true"></iframe>
    </div>
    <!-- 좌우배너2 -->
    <div style="position:relative; width:100% !important; line-height:0;">    	
    	<iframe class="swipe_obj"  src="http://eventv2.auction.co.kr/event3/2017/03/40/edra1412_Beauty/mIfrm03Good.aspx?index=1" width="100%"  scrolling="no" frameborder="0" allowTransparency="true"></iframe>
    </div>
    <!-- 좌우배너3 -->
    <div style="position:relative; width:100% !important; line-height:0;">    	
    	<iframe class="swipe_obj"  src="http://eventv2.auction.co.kr/event3/2017/03/40/edra1412_Beauty/mIfrm03Good.aspx?index=1" width="100%"  scrolling="no" frameborder="0" allowTransparency="true"></iframe>
    </div>

</body>

</html>
```
