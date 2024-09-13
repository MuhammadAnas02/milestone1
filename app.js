var buttons = document.getElementById("toggle");
var bodys = document.body;
buttons.addEventListener('click', function () {
    if (buttons.checked) {
        bodys.style.backgroundColor = '#19ccc3';
    }
    else {
        bodys.style.backgroundColor = "rgb(81, 245, 136)";
    }
});
