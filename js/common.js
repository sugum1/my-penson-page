
(function($){
	$.fn.preview = function(){
		var xOffset = 10;
		var yOffset = 20;
		var w = $(window).width();
		$(this).each(function(){
			$(this).hover(function(e){
				if(/.png$|.gif$|.jpg$|.bmp$/.test($(this).attr("href"))){
					$("body").append("<div id='preview'><div><img src='"+$(this).attr('href')+"' /><p>"+$(this).attr('title')+"</p></div></div>");
				}else{
					$("body").append("<div id='preview'><div><p>"+$(this).attr('title')+"</p></div></div>");
				}
				$("#preview").css({
					position:"absolute",
					padding:"1px",
					border:"1px solid #f3f3f3",
					backgroundColor:"#eeeeee",
					top:(e.pageY - yOffset) + "px",
					zIndex:1000
				});
				$("#preview > div").css({
					padding:"0px",
					backgroundColor:"white",
					border:"1px solid #cccccc"
				});
				$("#preview > div > p").css({
					textAlign:"center",
					fontSize:"12px",
					padding:"0px 0 0px",
					margin:"0"
				});
				if(e.pageX < w/2){
					$("#preview").css({
						left: e.pageX + xOffset + "px",
						right: "auto"
					}).fadeIn("fast");
				}else{
					$("#preview").css("right",(w - e.pageX + yOffset) + "px").css("left", "auto").fadeIn("fast");	
				}
			},function(){
				$("#preview").remove();
			}).mousemove(function(e){
				$("#preview").css("top",(e.pageY - xOffset) + "px")
				if(e.pageX < w/2){
					$("#preview").css("left",(e.pageX + yOffset) + "px").css("right","auto");
				}else{
					$("#preview").css("right",(w - e.pageX + yOffset) + "px").css("left","auto");
				}
			});						  
		});
	};
})(jQuery);
//图片阅览插件
$(function(){
  $(".pro1imgviw").preview();
   $(window).scroll(function () {  
               var scrollTop =$(this).scrollTop();//滚动高度
               if(scrollTop < 85){  
                   $(".miantil").addClass("header-border");  
               };  
               if(scrollTop > 88){  
                   $(".miantil").removeClass("header-border")  
               }; 
               if(scrollTop > 90){  
                   $(".protil").addClass("header-border");  
               }; 
              if(scrollTop > 679){  
                   $(".protil").removeClass("header-border")  
               }; 
           if(scrollTop < 89){  
                   $(".protil").removeClass("header-border")  
               }; 
           });
  //header滚动效果 效果到pro
  var pro = $(".pro").offset().top -61
  $(".miantil").click(function(){
   
$("html,body").animate({scrollTop: 0}, 1000);
  });
  $(".protil").click(function(){
   
$("html,body").animate({scrollTop:pro}, 1000);
  });
  
});