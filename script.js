const hero = document.querySelector(".hero"),
heroBoy = document.querySelector(".heroBoy"),
villain = document.querySelector(".villain");

function jump(){
    if (hero.classList != "animate"){
            hero.classList.add("animate");
    }

    setTimeout(function() {
        hero.classList.remove("animate");
    }, 300); 
}

document.addEventListener("keydown", function(event){
     if (event.code === "Space" ){
        jump();
     }
    
})

function move(){
    villain.classList.add
}