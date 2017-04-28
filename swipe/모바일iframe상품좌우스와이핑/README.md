
# [목차이동](https://github.com/Guide-Line/Auction-promotion-guide#TOC)

## <a name='swipe'>모바일에서 좌우 슬라이드에 iframe 상품이 들어간 경우 </a>

#### 아래의 경우시 터치로 인한 슬라이딩 기능은 구현되지 못한다.
#### 반드시 좌우 방향 버튼으로 넘겨야 한다.

### 모바일  
    
```javascript
<!-- 상품롤링1 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width"/>

    <link rel="stylesheet" href="http://eventimg.auction.co.kr/md/auction/07071E4A79/swiper.min.css">
    <script type="text/javascript" src="http://script.auction.co.kr/common/jquery.js"></script>
    <script src="http://eventimg.auction.co.kr/md/auction/07071E4A79/swiper.min.js?ver=1.0"></script>
<title>옥션</title>
<style>
    *{padding: 0; margin:0; border: 0;}
    .no-highlight {
       /* iOS 터치하이라이트 비활성화 */
       -webkit-tap-highlight-color: transparent;
       /* 안드로이드 터치 하이라이트 비활성화 */
       -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .rel{position: relative; width:100%;}
    li{list-style: none;}
    #p_wrapper{position:relative; width:100%; line-height: 0px;}
    #p_wrapper img{vertical-align: top; line-height: 0px; width:100%;}

    .roll1 {padding-bottom: 5.5%; }
    .roll1 .slider_wrap{position:relative;overflow:hidden;padding-bottom:5.5%; width:95%; margin-left: 2.5%;}
    .roll1 .tab{position: relative; width:100%;overflow: hidden;}
    .roll1 .tab li{float: left; width:25.00%;}
    .roll1 .tab li img{width:100%; vertical-align: top;}
    .roll1 .swiper-container {overflow:hidden;position:relative}
    .roll1 .swiper-wrapper {width:100%;height:100% ; }
    .roll1 .swiper-slide {overflow:hidden;position:relative}
    .roll1 .swiper-pagination{width:100%;text-align:center;position:absolute;left:0;bottom:2%}
    .roll1 .swiper-pagination-bullet{width:6px;height:6px;margin:0 5px;background:#000;border:2px #000 solid;border-radius:100%;opacity:1}
    .roll1 .swiper-pagination-bullet-active{border:2px #000 solid;opacity:1;background:transparent}
    .roll1 .swiper-button-prev{opacity:0.2;width:40px;height:40px;z-index:10;top:50%;background-color:#000;background-size:30px 20px;margin-top:-20px;left:0}
    .roll1 .swiper-button-next{opacity:0.2;width:40px;height:40px;z-index:10;top:50%;background-color:#000;background-size:30px 20px;margin-top:-20px;right:0}
    
</style>
<script>

    var temp = -1;    
    var isView = 0;//0 , 1 , 2; 
    $(document).ready(function(){
        $(".roll1 .tab li>a").each(function(index){
            var $this = $(this)
            $this.click(function(){
                isView = index +1 ; // 0 , 1 , 2 , 3     +1
                swiper01.slideTo(isView)
                //console.debug('click ' , isView)
            })
        })
        function selectMenu(n){
            if(temp != -1){
                var off = $(".roll1 .tab li>a").eq(temp).find("img").attr("src").replace(/_on.jpg/,"_off.jpg")
                $(".roll1 .tab li>a").find("img").eq(temp).attr("src" , off)
            }
            var on = $(".roll1 .tab li>a").eq(n).find("img").attr("src").replace(/_off.jpg/,"_on.jpg")
            $(".roll1 .tab li>a").find("img").eq(n).attr("src" , on)
            temp = n
        }

        var swiper01 = new Swiper('.roll1 .slider_wrap .swiper-container', {
            autoplay : false,
            nextButton: '.roll1 .slider_wrap .swiper-button-next',
            prevButton: '.roll1 .slider_wrap .swiper-button-prev',
            pagination: '.roll1 .swiper-pagination',
            paginationClickable: false,
            loop: true,
            autoHeight: true,
            spaceBetween: 0,
            simulateTouch:true,
            onSlideChangeEnd : function(event){
                var mc = event.slides[event.activeIndex]
                isView = parseInt($(mc).attr('data-swiper-slide-index'));
                selectMenu(isView)
                //console.debug('swipe ' , isView)
            }
        });
        selectMenu(isView)
    })
</script>

</head>

<body>

    <div id="p_wrapper">

        <div class="roll1">
            <div class="slider_wrap">
                <ul class="tab">
                    <li> <a href="javascript:;"><img src="http://eventimg.auction.co.kr/md/auction/09628414C3/m_seller_tab_01_off.jpg" alt="" /></a> </li>
                    <li> <a href="javascript:;"><img src="http://eventimg.auction.co.kr/md/auction/09628414C3/m_seller_tab_02_off.jpg" alt="" /></a> </li>
                    <li> <a href="javascript:;"><img src="http://eventimg.auction.co.kr/md/auction/09628414C3/m_seller_tab_03_off.jpg" alt="" /></a> </li>
                    <li> <a href="javascript:;"><img src="http://eventimg.auction.co.kr/md/auction/09628414C3/m_seller_tab_04_off.jpg" alt="" /></a> </li>
                </ul>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <!--  -->
                        <div class="swiper-slide">
                            <iframe  src="http://eventv2.auction.co.kr/Event3/2017/04/17/EDRA1552_ToyFestival/mGoodsC2.aspx?idx=2&num=1" width="100%" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                        </div>
                        <div class="swiper-slide">
                            <iframe  src="http://eventv2.auction.co.kr/Event3/2017/04/17/EDRA1552_ToyFestival/mGoodsC2.aspx?idx=2&num=5" width="100%" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                        </div>
                        <div class="swiper-slide">
                            <iframe  src="http://eventv2.auction.co.kr/Event3/2017/04/17/EDRA1552_ToyFestival/mGoodsC2.aspx?idx=2&num=9" width="100%" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                        </div>
                        <div class="swiper-slide">
                            <iframe  src="http://eventv2.auction.co.kr/Event3/2017/04/17/EDRA1552_ToyFestival/mGoodsC2.aspx?idx=2&num=13" width="100%" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                        </div>
                        <!-- // -->
                    </div>
                </div>

                <!-- Add Arrows -->
                <div class="swiper-button-next swiper-button-white"></div>
                <div class="swiper-button-prev swiper-button-white"></div>

                <div class="swiper-pagination"></div>
            </div>
        </div>
        
    </div>
</body>
</html>
```
