$(document).ready(function(){
    window.onresize = function(){
        console.log(window.outerWidth)
    }
    console.log($("img:nth-child(1)").attr("src"))
    window.addEventListener("scroll", function(){
        if(window.pageYOffset >= 265){
            $("figure").animate({
                "opacity" : "1",
                "top" : "430px",
                "left" : "200px",
                "display" : "block"
            }, 3000)
        }
    })
})