var keydown = undefined;
        var keyup = undefined;
        const list = document.getElementsByTagName("li");
        window.onkeydown = (function(event){
            if(event.keyCode === 40 ){
                if(keydown === undefined){
                    keydown = 0;
                    list[0].style.backgroundColor = "red";
                    list[2].style.backgroundColor = "darkgrey";
                }else if(keydown !== undefined){
                    keydown++
                    list[0].style.backgroundColor = "darkgrey";
                    if(keydown === 1){
                        list[1].style.backgroundColor = "red";
                    }
                    if(keydown === 2){
                        list[1].style.backgroundColor = "darkgrey";
                        list[2].style.backgroundColor = "red";
                    }
                    if(keydown === 2){
                        keydown = undefined;
                    }
                }
            }
            if(event.keyCode === 38){
                if(keyup === undefined){
                    list[0].style.backgroundColor = "red";
                    keyup = 0;
                }if(keyup !== undefined){
                    if(keyup === 0){
                        list[0].style.backgroundColor = "darkgrey";
                        list[2].style.backgroundColor = "red"
                        keyup = 2;
                    }else if(keyup === 2){
                        list[2].style.backgroundColor = "darkgrey";
                        list[1].style.backgroundColor = "red";
                        keyup = 1;
                    }else if(keyup === 1){
                        list[1].style.backgroundColor = "darkgrey";
                        list[0].style.backgroundColor = "red";
                        keyup = 0;
                    }
                }
            }
        })
