$(document).ready(function(){
            window.addEventListener("scroll", function(){   
                console.log(window.pageYOffset)
                if(window.pageYOffset >= 265){
                    $("figure").css({
                        left : "400px",
                        opacity : '1'
                    })
                }
                if(window.pageYOffset > 550 && $("figure").css({'left':'400px'})){
                    $("figure").css({
                        left : "-200px",
                        opacity : '0'
                    })
                }
            })
        })
