const persenLoad = document.querySelector(".number");
let count = 0;
setInterval(() => {
    if(count == 100){
        clearInterval();
    }else{
        count++;
        persenLoad.textContent = `${count}%`
    }
}, 80);
