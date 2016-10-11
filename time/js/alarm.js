/*
version 1.0.0
 */

/**	생성자 생성 **/
function Alarm(_obj){
	this.obj = _obj
	this.setInterval_state; // string
	this.yoil;
	this.day;
	this.hour;
	this.min;
	this.sec;
}

/**	setTime 사용법**/
Alarm.prototype.setTime = function(){
	var _this = this;
	
	var _xml;
	var set_time = new Date(this.obj.year,parseInt(this.obj.month)-1,this.obj.day,this.obj.hour,this.obj.min,this.obj.sec);
	var yoil = new Array("일요일","월요일","화요일","수요일","목요일","금요일","토요일")
	
	var getData = "http://eventv2.auction.co.kr/event3/2013/12/25/MartOnLimitSpecialPrice/getTime.aspx"; // //info({"month":"9","hours":"13","day":"5","year":"2016","min":"33","second":"51"})
	
	jQuery.ajax({
		url : getData,
		crossDomain : true,
		dataType : "jsonp",
		jsonpCallback : "info",
		success : function(xml) {
			//console.debug("success")
			_xml = xml;
			var server_time = new Date(xml.year, parseInt(xml.month)-1 ,xml.day ,xml.hours ,xml.min ,xml.second)
			_this.yoil = yoil[server_time.getDay()];
			
			
			var timeLeft = (set_time.getTime() - server_time.getTime()) / 1000; // 목표시간 - 서버현제시간	
			
			if(_this.setInterval_state == "y"){
				
				setInterval(function(){
					if (timeLeft <= 0 || timeLeft == 0) {				
						outputString = '종료';
						dayCount = "0"
						hourCount = "00"
						minCount = "00"
						secCount = "00"									
					}else{	
						var dayCount = Math.floor(timeLeft / 86400);
						var hourCount = Math.floor((timeLeft - dayCount * 86400) / 3600);
						var minCount = Math.floor((timeLeft - (dayCount * 86400) - (hourCount * 3600)) / 60);
						var secCount = timeLeft - (dayCount * 86400) - (hourCount * 3600) - (minCount * 60);		
								
						
						timeLeft -= 1;
	
					}
					_this.day = dayCount;
					_this.hour = hourCount;
					_this.min = minCount ;
					_this.sec = secCount;
					
					_this.enterframe()
					
				}, 1000)
				
			}else{
				
				if (timeLeft <= 0 || timeLeft == 0) {				
					outputString = '종료';
					dayCount = "0"
					hourCount = "00"
					minCount = "00"
					secCount = "00"									
				}else{	
					var dayCount = Math.floor(timeLeft / 86400);
					var hourCount = Math.floor((timeLeft - dayCount * 86400) / 3600);
					var minCount = Math.floor((timeLeft - (dayCount * 86400) - (hourCount * 3600)) / 60);
					var secCount = timeLeft - (dayCount * 86400) - (hourCount * 3600) - (minCount * 60);
					
					timeLeft -= 1;

				}
				_this.day = dayCount;
				_this.hour = hourCount;
				_this.min = minCount ;
				_this.sec = secCount;
			};
			
			if(server_time.getTime() > set_time.getTime()){
				//console.debug("설정시간을 지났습니다.")
				_this.onComplete();
			}else{
				//console.debug("아직 설정시간을 지나지 않았습니다.")
				_this.onComplete_before();
			}
			
		},
		complete : function(){
			//console.debug("complete" , _this.str)	
		},
		error : function(r) {
			//console.debug("error" , _this.str)
		}
	});
}


