
# [목차이동](https://github.com/Guide-Line/Auction-promotion-guide#TOC)

## <a name='server_time'>Server_time</a>

  

	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/html">
	<head>
		<title>옥션 - 모바일 쇼핑은 옥션</title>
		<meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<script type="text/javascript" src="http://script.auction.co.kr/common/jquery.js"></script>
		<script type="text/javascript">
		<!--

			$(document).ready(function(){

				var eventDate = new Date(2016,10 - 1,11,00,00,00);
				var sEventDate = GetSearchQuery('date');
	// ?date=2016-10-11-00
				var getData = "http://eventv2.auction.co.kr/event3/2014/05/25/Time/getTime.aspx";
				$.ajax({
					url : getData,
					crossDomain : true,
					dataType : "jsonp",
					jsonpCallback : "info",
					success : function(xml) {

						var nowDate;
						if ( sEventDate != -1 ){
							nowDate = new Date(sEventDate.substr(0,4),parseInt ( sEventDate.substr(5,2),10 ) - 1,sEventDate.substr(8,2),sEventDate.substr(11,2),00,00);
						}else{
							nowDate = new Date(xml.year, xml.month -1, xml.day, xml.Hour);
						}

						if ( nowDate.getTime() < eventDate.getTime() ){
							//2016-10-11 00시 초과
							alert("해당일 초과");
						}else{
							//2016-10-11 00시 미달
							alert("해당일 안지남");
						}

					},
					error : function() {
						
						var nowDate = new Date();

						if ( nowDate.getTime() < eventDate.getTime() ){
							//2016-10-11 00시 초과
							alert("해당일 초과");
						}else{
							//2016-10-11 00시 미달
							alert("해당일 안지남");
						}


					}
				});			

			});

		//-->

		</script>
	</head>
	<body>

		<div id="p_wrap">

		</div>

	</body>
	</html>
