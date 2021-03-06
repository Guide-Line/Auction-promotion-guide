
# [Auction](http://www.auction.co.kr) Promotion  가이드() {


## <a name='TOC'><a name='TOC'>목차b</a>

  1. [html기본폼](#default)
  1. [Font(style)](#font)  
  1. [스와이프 플러그인 (Swipe 3.x) 기본](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/swipe#swipe)
        - [모바일기획전에 좌우배너 삽입시 요령](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/swipe/%EB%AA%A8%EB%B0%94%EC%9D%BC_%EC%A2%8C%EC%9A%B0%EB%A1%A4%EB%A7%81%EB%B0%B0%EB%84%88_%EB%86%92%EC%9D%B4%EA%B0%92%EB%AA%BB%EC%9E%A1%EB%8A%94_%EC%97%90%EB%9F%AC%EB%B0%9C%EC%83%9D)
        - [모바일iframe상품 좌우배너](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/swipe/%EB%AA%A8%EB%B0%94%EC%9D%BCiframe%EC%83%81%ED%92%88%EC%A2%8C%EC%9A%B0%EC%8A%A4%EC%99%80%EC%9D%B4%ED%95%91)
        - [복수의스와이핑노출시 플러그인](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/swipe/%EB%B3%B5%EC%88%98%EC%9D%98%EC%8A%A4%EC%99%80%EC%9D%B4%ED%95%91%EB%85%B8%EC%B6%9C%EC%8B%9C(%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8))
  1. [상단 네비게이션 고정](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/fixed_top_navigation#fixed_top_navigation)
  1. [Alarm](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/time#alarm)
  1. [Sns](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/sns#sns)
  1. [List(상품기본)](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/list#list)
        - [모바일2단 ( 대표이미지 + 상품 )](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/list/other_version_01#list)
        - [웹2단 ( 대표이미지 + 상품 )](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/list/other_version_02#list)
        - [모바일 캘린더 스와이핑](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/list/calendar_swipe#list)
  1. [서버시간가져오기](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/server_time#server_time)
  1. [모바일에서 이미지맵 사용법](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/mobile_image_map#mobile_image_map)
  1. [tweenlite (2016.12.20)](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/tweenLite#greensock)
  1. [spinner (2016.12.20) cut by cut 제어 js](https://github.com/Guide-Line/Auction-promotion-guide/tree/master/spinner#spinner)

  


  
 ## <a name='default'>html기본폼</a> [원문]

   - 웹.
```javascript
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

<!-- cmtool 하단 상품 운영시 jquery 는 주석처리한후 업로드 한다 -->
<script type="text/javascript" src="http://script.auction.co.kr/common/jquery.js"></script>


<title>옥션 - 프로모션명a</title>
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

   - 모바일.
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



## <a name='font'>Font</a> [원문]
   
 
**옥션작업시 시스템 폰트는 아래와같이 적용하여 사용한다.**

**모바일**

font-family:Roboto, Droid Sans, Helvetica, AppleSDGothicNeo, 'Apple SD 산돌고딕 Neo', Apple-Gothic, '애플고딕', 'Tahoma', 'dotum', '돋움', 'gulim', '굴림', sans-serif;

**웹**

font-family:"맑은 고딕", Roboto, Droid Sans, Helvetica, AppleSDGothicNeo, 'Apple SD 산돌고딕 Neo', Apple-Gothic, '애플고딕', 'Tahoma', 'dotum', '돋움', 'gulim', '굴림', sans-serif;


**[[↑]](#TOC)**



