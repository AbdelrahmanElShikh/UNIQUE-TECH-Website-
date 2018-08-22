$(document).ready(function()
				  
{
	"use strict";
	new WOW().init();
	applyHeader();
	applyResize();
	applyNavBar();
	scrollNav();
	arrowUp();
	preload();
	
	//	var a= $("#sec1 .change-nav").offset().top;
	//	console.log(a);
	
	
});
				  

function applyHeader()
{
	"use strict";
//	console.log($(window).width());
//	console.log($(window).height());
	
	if (($(window).width()<757)||($(window).height()<850)||(($(window).height()<850)&&($(window).width()<757)))
			{
				$("#sec1 .header").css("height","auto");
				$("#sec1 .carousel-indicators").css("display","none");
			}
		else
		{
			
	
	$("#sec1 .header").css("height",(($(window).height()/4)*3));
			$("#sec1 .carousel-indicators").css("display","block");
}
}
function applyResize()
{
	"use strict";
	
	$(window).on('resize', function() 
	{  
			if (($(this).width()<757)||($(this).height()<850)||(($(this).height()<850)&&($(this).width()<757)))
			{
				$("#sec1 .header").css("height","auto");
				$("#sec1 .carousel-indicators").css("display","none");
			}
		else
		{
			
	
	$("#sec1 .header").css("height",(($(window).height()/4)*3));
			$("#sec1 .carousel-indicators").css("display","block");
}
	}); 
}
function applyNavBar()
{
	"use strict";
var windowWidth = $(window).width();
	//var a= $("#sec1 .change-nav").offset().top;
    if (windowWidth > 757) {

        
          
            $(window).scroll(function () {
                if ($(this).scrollTop() >100) {
                    
                    $('#sec1 .navbar').addClass('menu-bg');

                } else {
                    
                    $('.navbar').removeClass('menu-bg');
                }
            });
        
    }
}
function scrollNav()
{
	"use strict";
	$(".navigation li ").click(function()
		{
			var destination = $(this).attr('rel');
			destination=$(destination).offset().top;
			//console.log(destination);
			$("body").animate({scrollTop:(destination)},1500);
			                                         
			
		}
	);
}
function arrowUp()
{
	"use strict";
	$(".scrollup").click(function ()
	{
		$("body").animate({scrollTop:(0)},800);	 
	 }
	);
	$(window).scroll(function()
	 {
	if( ($(window).scrollTop()) > ($("#sec2").offset().top) ) 
		{
			//console.log("window"+"   "+$(window).scrollTop());
			//console.log("sec5"+"   "+$("#sec5").offset().top);
			$(".scrollup").fadeIn(1000);
		}
	else{
		$(".scrollup").fadeOut(100);
	}
	}
);
}
function preload()
{
	"use strict";
	$(window).on('load',function ()
				 {
		$("#preloaded").fadeOut();
		$(".load").delay(5000).fadeOut("slow");
		}
							   );
	}

