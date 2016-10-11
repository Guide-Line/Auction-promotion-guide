
# [Auction](http://www.auction.co.kr) Promotion  가이드() {



## <a name='TOC'><a name='TOC'>목차</a>

  1. [Alarm](#alarm)
  1. [List(상품)](#list)

  
 

## <a name='alarm'>Alarm</a> [원문]

  - 소스바로가기(https://github.com/Guide-Line/Auction-promotion-guide/tree/master/time)

   
    ```javascript
    $(document).ready(function(){
    
      var obj = {year: "2016", month: "10",day: "15", hour: "24", min: "00", sec: "00"}//목표시간 설정하기
      var alarm = new Alarm(obj)
      alarm.setInterval_state = "y"; // y or no , y 이면 enterframe 계속 실행
      alarm.setTime();
    
      alarm.onComplete= function(){
        //목표시간이 지나면 실행
        //console.debug("목표시간이거나 지났습니다.")
        alert(this.day+ "일 : " +  this.hour + "시간 : " +  this.min + "분 : "  +this.sec + "초")
      }
      alarm.onComplete_before = function(){
        //목표시간이 지나면 실행
        //console.debug("목표시간을 지나지않았습니다.")
        alert(this.day+ "일 : " +  this.hour + "시간 : " +  this.min + "분 : "  +this.sec + "초 남았습니다.")
      }
      alarm.enterframe = function(){
        /* this 로 접근 가능
        console.debug("오늘은 무슨요일 :  " ,  this.yoil)
        console.debug("남은 일자 :  " ,  this.day)
        console.debug("남은 시간 :  " ,  this.hour)
        console.debug("남은 분 :  " ,  this.min)
        console.debug("남은 초 :  " ,  this.sec)
        */        
      }  
  })
    ```

## <a name='list'>List(상품)</a> [원문]

  - 소스바로가기(https://github.com/Guide-Line/Auction-promotion-guide/tree/master/list)

   

   <웹>
   1단  https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/goods_c1_list.html
   2단  https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/goods_c2_list.html
   3단  https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/goods_c3_list.html
   4단  https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/goods_c4_list-문구2개.html
   4단  https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/goods_c4_list.html

**Blogs**

  - [DailyJS](http://dailyjs.com/)
  - [JavaScript Weekly](http://javascriptweekly.com/)
  - [JavaScript, JavaScript...](http://javascriptweblog.wordpress.com/)
  - [Bocoup Weblog](http://weblog.bocoup.com/)
  - [Adequately Good](http://www.adequatelygood.com/)
  - [NCZOnline](http://www.nczonline.net/)
  - [Perfection Kills](http://perfectionkills.com/)
  - [Ben Alman](http://benalman.com/)
  - [Dmitry Baranovskiy](http://dmitry.baranovskiy.com/)
  - [Dustin Diaz](http://dustindiaz.com/)
  - [nettuts](http://net.tutsplus.com/?s=javascript)


