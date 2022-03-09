$(document).ready(function(){
            window.addEventListener("scroll", function(){   
                if(window.pageYOffset >= 265){
                    $("figure").animate({
                        "opacity" : "1",
                        "top" : "430px",
                        "left" : "200px",   
                        "display" : "block"
                    }, 1000, function(){
                        if(window.pageYOffset >= 800){
                            $("figure").animate({
                                "opacity" : "0",
                                "top" : "430px",
                                "left" : "0px",   
                                "display" : "none"
                            }) 
                            console.log("Halo")
                        }
                    })
                }
            })
        })
