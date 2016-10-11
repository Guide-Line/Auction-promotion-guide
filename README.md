
# [Auction](http://www.auction.co.kr) Promotion  가이드() {



[원문:https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

## <a name='TOC'><a name='TOC'>목차</a>

  1. [Alarm](#alarm)
  
 

## <a name='alarm'>Alarm</a> [원문]

  - 소스바로가기(https://github.com/airbnb/javascript#alarm)

   
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


