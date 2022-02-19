const resize = document.getElementById("resize");
        const list = document.getElementsByTagName("li");
        const contyainerList = document.querySelector(".color-change");
        const container = document.querySelector(".container");
        let index = {
            Lindex: 0
        }
        function GetIndex(sender){
            var liElement = sender.parentNode.getElementsByTagName("li");
            var liElementLength = liElement.length;

            for(let i = 0; i < liElementLength; i++){
                if(liElement[i] == sender){
                    index.Lindex = i;
                }
            }
            for(let i = 0; i < list.length; i++){
                if(index.Lindex == 0){
                    container.style.backgroundColor = "#f0eded";
                    contyainerList.style.backgroundColor = "#cfcfcf";
                }
                if(index.Lindex == 1){
                    container.style.backgroundColor = "#040921";
                    contyainerList.style.backgroundColor = "#white";
                }
                if(index.Lindex == 2){
                    container.style.backgroundColor = "#000000";
                    contyainerList.style.backgroundColor = "#ddd";
                }
            }
        }
        resize.addEventListener("click", function(){
            if(container.style.width == "262px"){
                container.style.width = "110px";
                resize.style.left = "85px";
                resize.style.transform = "rotateZ(180deg)";

            }else{
                container.style.width = "262px"
                resize.style.left = "245px";
                resize.style.transform = "rotateZ(0deg)";
            }
            if(index.Lindex == 0){
                list[index.Lindex].style.display = "block";
                for(let i = 1;i < 3; i++){
                    list[i].style.display = "none";
                    if(container.style.width == "262px"){
                        setTimeout(() => {
                            list[1].style.display = "block";                        
                        }, 300);
                        setTimeout(() => {
                            list[2].style.display = "block";                        
                        }, 990);
                    }
                }
            }
            if(index.Lindex == 1){
                list[index.Lindex].style.display = "block";
                const arr = [0, 2]
                for(let i = 0; i < arr.length; i++){
                    list[arr[i]].style.display = "none";
                    if(container.style.width == "262px"){
                        setTimeout(() => {
                            list[0].style.display = "block";                        
                        }, 300);
                        setTimeout(() => {
                            list[2].style.display = "block";                        
                        }, 990);                    
                    }
                }
            }
            if(index.Lindex == 2){
                list[index.Lindex].style.display = "block";
                const arr = [0, 1]
                for(let i = 0; i < arr.length; i++){
                    list[arr[i]].style.display = "none";
                    if(container.style.width == "262px"){
                        setTimeout(() => {
                            list[0].style.display = "block";                        
                        }, 300);
                        setTimeout(() => {
                            list[1].style.display = "block";                        
                        }, 990);
                    }
                }
            }
        })
