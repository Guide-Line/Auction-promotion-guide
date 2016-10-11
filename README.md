
# [Auction](http://www.auction.co.kr) Promotion  가이드() {


## <a name='TOC'><a name='TOC'>목차</a>

  1. [Alarm](#alarm)
  1. [List(웹 , 모바일 상품)](#list)

  
 

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


  **웹**
  - [1단-소스이동](https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/goods_c1_list.html)

  ![Alt text](/img/1.jpg)  

  - [2단-소스이동](https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/goods_c2_list.html)

  ![Alt text](/img/2.jpg)

  - [3단-소스이동](https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/goods_c3_list.html)

  ![Alt text](/img/3.jpg)

  - [4단-문구2개-소스이동](https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/goods_c4_list-문구2개.html)

  ![Alt text](/img/4.jpg)

  - [4단-소스이동](https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/goods_c4_list.html)

  ![Alt text](/img/5.jpg)


**모바일**
  - [1단-소스이동](https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/m_goods_c1_list.html)

  ![Alt text](/img/m1.jpg)   

  - [2단+캘린더-소스이동](https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/m_goods_c1_list_calendar.html)

  ![Alt text](/img/m2.jpg)   

  - [2단+문구1-소스이동](https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/m_goods_c2_list - 문구1개.html)

  ![Alt text](/img/m3.jpg)   

  - [2단-소스이동](https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/m_goods_c2_list.html)  

  ![Alt text](/img/m4.jpg)   

  - [1단+2단-소스이동](https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/m_goods_list.html)  

  ![Alt text](/img/m5.jpg)   

  - [1단 가로정렬-소스이동](https://github.com/Guide-Line/Auction-promotion-guide/blob/master/list/m_goods_r1_list.html)

  ![Alt text](/img/m6.jpg)   

 

