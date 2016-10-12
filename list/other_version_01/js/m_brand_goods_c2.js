		$(window).load(function(){
			titleResizer();
		}).resize(function(){
			titleResizer();
		});

		function titleResizer(){
			$("#goods_c2_list h3 > p").css("height", $("#goods_c2_list li").eq(0).find(".goods_area").css("height") );
		}