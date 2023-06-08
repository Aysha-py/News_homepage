let menuButton = document.querySelector(".nav_item_image")
let closeButton = document.querySelector(".mobile_item_image")
let mobileNav = document.getElementById("show_mobile")
let top_ten_text = document.querySelectorAll(".top_ten_text")
const listItems = document.querySelectorAll(".list_item")
var sidebar = document.getElementById("sidebar");

let menu =true



menuButton.addEventListener("click", function(){
    if (menu){  
        sidebar.classList.add("active");     
    }
    else{
        sidebar.classList.remove("active");     
    }
    
})
closeButton.addEventListener("click", function(){
    if (menu){  
        sidebar.classList.remove("active");    
    }
    else{
     
        sidebar.classList.add("active");      
    }
    
})

for (const list of listItems){
 list.addEventListener("click",(e)=>{
    const listValue = e.target.innerText;
    for (const list of listItems){
        if(list.innerText!== listValue){
            list.style.color = "hsl(233, 8%, 79%)"
        }
        else{
            list.style.color = "hsl(5, 85%, 63%)"
        }
    }

 })
}
