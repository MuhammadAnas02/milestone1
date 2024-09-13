let buttons = document.getElementById("toggle") as HTMLInputElement
let bodys = document.body


buttons.addEventListener('click', ()=>{
    if(buttons.checked){
        bodys.style.backgroundColor = '#19ccc3';

    }
    else{
        bodys.style.backgroundColor = "rgb(81, 245, 136)";
    }
})

