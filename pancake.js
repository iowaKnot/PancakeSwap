const inputElement = document.querySelector(".imgCard1")
console.log(inputElement)

    
     inputElement.forEach(element => {
        element.addEventListener("mouseover", ()  => {
        if(element.classList.contain(imgCard10)){
            element.src="../Pancake/Pancake img card1/card1 img2.png"
        }

    })
        
    });


