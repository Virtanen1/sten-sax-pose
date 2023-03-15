const images = Array.from(document.getElementsByClassName("bilde"));
images.map(element => element.addEventListener("click", function(){
    const button = document.getElementById("btn")
    
    const randomIndex = Math.floor(Math.random() * 3);  
        
        
        if (element.id == "paper"){
            if (randomIndex == 2){
                let result = document.getElementById("result").innerHTML = `Du vann`
            }
            if (randomIndex == 1){
                let result = document.getElementById("result").innerHTML = `Datorn vann`
            }
            if (randomIndex == 0){
                let result = document.getElementById("result").innerHTML = `Oavgjort`
            }
            images.forEach(
                item => {
                    item.style.display = "none"
                })
               
                button.style.display = "block"


       
        }
        if (element.id == "scissor"){
            if (randomIndex == 2){
                let result = document.getElementById("result").innerHTML = `Du vann`
            }
            if (randomIndex == 1){
                let result = document.getElementById("result").innerHTML = `Datorn vann`
            }
            if (randomIndex == 0){
                let result = document.getElementById("result").innerHTML = `Oavgjort`
            }
            images.forEach(
                item => {
                    item.style.display = "none"
                })

                button.style.display = "block"
          
       
        }
        if (element.id == "rock"){
            if (randomIndex == 2){
                let result = document.getElementById("result").innerHTML = `Du vann`
            }
            if (randomIndex == 1){
                let result = document.getElementById("result").innerHTML = `Datorn vann`
            }
            if (randomIndex == 0){
                let result = document.getElementById("result").innerHTML = `Oavgjort`
            }
            images.forEach(
                item => {
                    item.style.display = "none"
                })
                button.style.display = "block"
       
        }
    
       button.addEventListener("click", ()=> {
            window.location.reload()
        })


      

    })

    
    
);


/*
let button = document.getElementById("btn").addEventListener("click", ()=> {
    button.style.display = "block"
    window.location.reload()*/