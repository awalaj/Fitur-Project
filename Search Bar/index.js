function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}
function filterFunction(){
    var input, filter, div, a , i, lst;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    if(input.value !== " "){
        document.getElementsByTagName("span")[0].style.visibility = "visible";
    }
    if(input.value == ""){
        document.getElementsByTagName("span")[0].style.visibility = "hidden";
    }
    for(i = 0; i < a.length; i++){
        inputValue = a[i].innerHTML || a[i].textContent;
    if(inputValue.toUpperCase().indexOf(filter) > -1){
        a[i].style.visibility = "visible";
        if(a[i].style.display = "none"){
            a[i].style.display = "block";
        }
    }else if(inputValue.toUpperCase().indexOf(filter) == -1){
        a[i].style.display = "none";
    }else if(inputValue.toUpperCase().indexOf(filter) == " "){
        a[i].style.display = "block"
    }}
}
document.getElementsByTagName("span")[0].addEventListener("click", () => {
    document.getElementsByTagName("span")[0].style.visibility = "hidden";
    document.getElementById("myInput").value = "";
        if(this){
            for(let i = 0; i < document.getElementsByTagName("a").length; i++){
                document.getElementsByTagName("a")[i].style.display = 'block';
            }
        }
})
