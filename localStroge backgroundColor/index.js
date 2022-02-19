$(document).ready(function(){
    $("button").click(function(){
        $("div").toggleClass("on")
        if($("div").hasClass("on")){
            localStorage.setItem("background", "black")
            $("body").css({
                backgroundColor : localStorage.getItem("background")
            })
        }else{
            localStorage.removeItem("background")
            $("body").css({
                backgroundColor : "white"
            })
        }
    })
})
var bgColor = localStorage.getItem("background");   
if(bgColor != null){
    $("body").css({
        backgroundColor : bgColor
    })     
    $("div").toggleClass("on")
}else{
    $("body").css({
        backgroundColor : "white"
    })  
}