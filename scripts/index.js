(function(){
    "use strict"
    const hamburger = document.querySelector("#hamburger")

    hamburger.addEventListener("click", function(){
        if(hamburger.classList.contains("active")){
            hamburger.classList.remove("active")
        }
        else{
            hamburger.classList.add("active")
        }
    })
})()