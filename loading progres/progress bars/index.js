$(window).on("load", function(){
    var progres = 0;
    var Interval = setInterval(frame, 100);
    function frame(){  
        if(progres >= 100){
            clearInterval(Interval)
            $(".progres").css({
                borderBottomRightRadius : "20px",
                borderTopRightRadius : "20px"
            })
        }else{
            progres++;
            $(".progres").css({
                width : `${progres}%`
            })
            $("#persenProgres").html(`${progres} %`)
        }
    }
})
