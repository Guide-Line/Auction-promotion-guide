
# [Auction](http://www.auction.co.kr) Promotion  가이드() {


## <a name='TOC'><a name='TOC'>목차</a>

  1. [html기본폼](#default)
  1. [Alarm](#alarm)
  1. [Font(style)](#font)
  1. [Sns](#sns)  
  1. [List(웹 , 모바일 상품)](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/list)

  
 ## <a name='default'>html기본폼</a> [원문]

   - 웹
    ```javascript
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

<!-- cmtool 하단 상품 운영시 jquery 는 주석처리한후 업로드 한다 -->
<script type="text/javascript" src="http://script.auction.co.kr/common/jquery.js"></script>


<title>옥션 - 프로모션명</title>
<style>
  *{padding: 0; margin:0; border: 0;}
  #p_wrapper{position:relative; width:100%; line-height: 0px;}
  #p_wrapper img{vertical-align: top; line-height: 0px;}
  
  #p_header{position: relative; width:100%;}
  #p_contents{position: relative; width:100%;}
  #p_footer{position: relative; width:100%;}
</style>
</head>

<body>
  <div id="p_wrapper">
    <div id="p_header">
      
    </div>
    <div id="p_contents">
      
    </div>
    <div id="p_contents">
      
    </div>
  </div>
</body>
</html>
   ``` 

   - 모바일
    ```javascript
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

<!-- cmtool 하단 상품 운영시 jquery 는 주석처리한후 업로드 한다 -->
<script type="text/javascript" src="http://script.auction.co.kr/common/jquery.js"></script>


<title>옥션 - 프로모션명</title>
<style>
  *{padding: 0; margin:0; border: 0;}
  #p_wrapper{position:relative; width:100%; line-height: 0px; max-width:640px; margin: 0 auto}
  #p_wrapper img{vertical-align: top; line-height: 0px; width:100%;}
  
  #p_header{position: relative; width:100%;}
  #p_contents{position: relative; width:100%;}
  #p_footer{position: relative; width:100%;}
</style>
</head>

<body>
  <div id="p_wrapper">
    <div id="p_header">
      
    </div>
    <div id="p_contents">
      
    </div>
    <div id="p_contents">
      
    </div>
  </div>
</body>
</html>
   ```

**[[↑]](#TOC)**

## <a name='alarm'>Alarm</a> [원문]

  - 소스바로가기(https://github.com/Guide-Line/Auction-promotion-guide/tree/master/time)

   
    ```javascript
    $(document).ready(function(){
    
    var obj = {year: "2016", month: "10",day: "15", hour: "24", min: "00", sec: "00"}//목표시간 설정하기
    var alarm = new Alarm(obj)
    alarm.setInterval_state = "n"; // y or no , y 이면 enterframe 계속 실행
    alarm.setTime();
  
    alarm.onComplete= function(){
      //목표시간이 지나면 실행
      //console.debug("목표시간이거나 지났습니다.")
      alert(this.day+ "일 : " +  this.hour + "시간 : " +  this.min + "분 : "  +this.sec + "초")
    }
    alarm.onComplete_before = function(){
      //목표시간이 지나지 않았으면 실행
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

**[[↑]](#TOC)**

## <a name='sns'>Sns</a> [원문]

  - 소스바로가기(https://github.com/Guide-Line/Auction-promotion-guide/tree/master/sns)

  
    ```javascript
    웹
    <style>
    .ifr_sns{top:20px;right:0px;position: absolute;}
    <html>
    <iframe class="ifr_sns" src="sns.html" width="56" height="320" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
   ``` 
    ![Alt text](/img/wsns.jpg)  



    ```javascript
    모바일
    <style> : 우측 상단에 위치 하게 인라인으로 작성되어있음
    <html>
    <iframe style="position: absolute; top:1%; right:3%; width:13%; z-index:10;" src="m_sns.html" width="100%"  scrolling="no" frameborder="0" allowTransparency="true"></iframe>

  
   ``` 

    ![Alt text](/img/msns.jpg) 


**[[↑]](#TOC)**

    


## <a name='font'>Font</a> [원문]
   
 
**옥션작업시 시스템 폰트는 아래와같이 적용하여 사용한다.**

**모바일**

font-family:Roboto, Droid Sans, Helvetica, AppleSDGothicNeo, 'Apple SD 산돌고딕 Neo', Apple-Gothic, '애플고딕', 'Tahoma', 'dotum', '돋움', 'gulim', '굴림', sans-serif;

**웹**

font-family:"맑은 고딕", Roboto, Droid Sans, Helvetica, AppleSDGothicNeo, 'Apple SD 산돌고딕 Neo', Apple-Gothic, '애플고딕', 'Tahoma', 'dotum', '돋움', 'gulim', '굴림', sans-serif;


**[[↑]](#TOC)**



