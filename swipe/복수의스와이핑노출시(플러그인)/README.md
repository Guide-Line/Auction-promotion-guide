
# [목차이동](https://github.com/Guide-Line/Auction-promotion-guide#TOC)

## <a name='swipe'>다수의 스와이핑 컨텐츠 다루기</a>



### 웹
    
```javascript
$.fn.IacRealtimeEvent = function(options) {
            var elements = this;
            var temp = -1;
            var isView = 0;
            var settings = {
                eventDate : false
            };
            var init = function(){
                //console.log(elements)
                $(elements).find(".tab li>a").each(function(index){
                    var $this = $(this)
                    $this.click(function(){
                        isView = index;
                        console.debug(isView)
                        selectMenu(index)
                        mySwiper.swipeTo(isView)
                    })
                })
                function selectMenu(n){
                    if(temp != -1){
                        var off = $(elements).find(".tab li>a").eq(temp).find("img").attr("src").replace(/_on.jpg/,"_off.jpg")
                        $(elements).find(".tab li>a").find("img").eq(temp).attr("src" , off)
                    }
                    var on = $(elements).find(".tab li>a").eq(n).find("img").attr("src").replace(/_off.jpg/,"_on.jpg")
                    $(elements).find(".tab li>a").find("img").eq(n).attr("src" , on)
                    temp = n
                }
                selectMenu(isView)
                var mySwiper = new Swiper(elements.selector+ ' .swiper-container', {
                    pagination:elements.selector + ' .swiper-pagination',
                    paginationClickable:false,
                    // simulateTouch:true,
                    loop:true,
                    autoplay:false,
                    calculateHeight:true,
                    autoplay : 2000,
                    onSlideChangeEnd : function(event){
                        var mc = event.slides[event.activeIndex]
                        isView = parseInt($(mc).attr('data-swiper-slide-index'));
                        selectMenu(isView)
                    }
                });
                $(elements).find('.swiper-button-prev').bind('click', function(e){
                    e.preventDefault();
                    // Autoplay false일때
                    mySwiper.stopAutoplay();
                    mySwiper.swipePrev();
                    mySwiper.startAutoplay();
                    isView = (mySwiper.activeIndex -1) % (mySwiper.slides.length - 2)
                    if(isView == -1){
                        isView = mySwiper.slides.length - 3
                        selectMenu(isView)
                    }else{
                        selectMenu(isView)
                    }
                    //alert(isView)
                });
                $(elements).find('.swiper-button-next').bind('click', function(e){
                    e.preventDefault();
                    // Autoplay false일때
                    mySwiper.stopAutoplay();
                    mySwiper.swipeNext();
                    mySwiper.startAutoplay();
                    isView = (mySwiper.activeIndex - 1) % (mySwiper.slides.length - 2)
                    //alert(isView)
                    selectMenu(isView)
                });
                $(elements).bind('mouseenter', function(e){
                    console.log("이벤트영역에 오버시")
                    mySwiper.stopAutoplay ()
                })
                $(elements).bind('mouseleave', function(e){
                    console.log("이벤트 영역에서 마우스 빠져나갔을시")
                    mySwiper.startAutoplay ()
                })
            }
            $(document).ready(function() {
                if(options) {
                    $.extend(settings, options);
                }
                init();
            });
            return this;
        };
        //start
        $(document).ready(function(){
            // Gmarket Goods Info Load
            $(".rollArea01").IacRealtimeEvent({
                eventDate : []
            });
            $(".rollArea02").IacRealtimeEvent({
                eventDate : []
            });
            $(".rollArea03").IacRealtimeEvent({
                eventDate : []
            });
        });
```


### 모바일  
    
```javascript
$.fn.IacRealtimeEvent = function(options) {
			var elements = this;
			var temp = -1;
			var isView = 0;
			var settings = {
				eventDate : false
			};
			var init = function(){
				$(elements).find(".tab li>a").each(function(index){
					var $this = $(this)
					$this.click(function(){
						isView = index +1 ; // 0 , 1 , 2 , 3     +1
						swiper01.slideTo(isView)
						//console.debug('click ' , isView)
					})
				})
				var selectMenu = function(n){
					$(elements).find(".tab li>a").find("img").css("opacity" ,"0.6")
					$(elements).find(".tab li>a").find("img").eq(n).css("opacity" ,"1")
					//console.debug('selectMenu' + " : "  + n)
					/*if(temp != -1){
						var off = $(elements).find(".tab li>a").eq(temp).find("img").attr("src").replace(/_on.jpg/,"_off.jpg")
						$(elements).find(".tab li>a").find("img").eq(temp).attr("src" , off)
					}
					var on = $(elements).find(".tab li>a").eq(n).find("img").attr("src").replace(/_off.jpg/,"_on.jpg")
					$(elements).find(".tab li>a").find("img").eq(n).attr("src" , on)
					temp = n*/
				};
				var swiper01 = new Swiper(elements.selector+' .slider_wrap .swiper-container', {
					autoplay : false,
					nextButton:elements.selector+' .slider_wrap .swiper-button-next',
					prevButton:elements.selector+' .slider_wrap .swiper-button-prev',
					pagination:elements.selector+' .swiper-pagination',
					paginationClickable: false,
					loop: true,
					autoHeight: true,
					spaceBetween: 0,
					simulateTouch:true,
					onSlideChangeEnd : function(event){
						var mc = event.slides[event.activeIndex]
						isView = parseInt($(mc).attr('data-swiper-slide-index'));
						selectMenu(isView)
						console.debug('swipe ' , parseInt($(mc).attr('data-swiper-slide-index')))
					}
				});
				selectMenu(isView)
			}
			$(document).ready(function() {
				if(options) {
					$.extend(settings, options);
				}
				init();
			});
			return this;
		};
		//start
		$(document).ready(function(){
			// Gmarket Goods Info Load
			$(".event03_1").IacRealtimeEvent({
				eventDate : []
			});
			$(".event03_2").IacRealtimeEvent({
				eventDate : []
			});
			$(".event03_3").IacRealtimeEvent({
				eventDate : []
			});
			$(".event03_4").IacRealtimeEvent({
				eventDate : []
			});
			$(".event03_5").IacRealtimeEvent({
				eventDate : []
			});
			$(".event03_6").IacRealtimeEvent({
				eventDate : []
			});
			$(".tabArea a").each(function(index){
				var $this = $(this)
				/*$this.mouseenter(function(){
				 selectMenu(index)
				 })
				 $this.mouseleave(function(){
				 selectMenu()
				 })*/
				$this.click(function(){
					stabPos(index)
				})
			})
		});
```
