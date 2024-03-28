document.querySelector('.toggle').addEventListener('click', function () {
    var ul = document.querySelector('.ul');
    if (ul.style.display === 'none') {
        ul.style.display = 'block';
    } else {
        ul.style.display = 'block';
    }
});


let close = document.getElementsByClassName("fa-solid")[0]
let ul = document.querySelector('.ul');

close.onclick = function () {
    ul.style.display = 'none'
}



let bar = document.getElementsByClassName("bars")[0]

bar.onclick = function () {
    ul.classList.toggle("show")
}


var i = 0;
var txt = "Mr Said Kamal"; /* The text you want to type */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Call the function when you want to start the effect
typeWriter();




let login1 = document.getElementById("login1")
let login2 = document.getElementById("login2")
let login3 = document.getElementById("login3")
let form = document.getElementsByClassName("form")[0]
let x = document.getElementById("close")

login1.onclick = function () {
    form.style.display = "block"
}


login2.onclick = function () {
    form.style.display = "block"
}



login3.onclick = function () {
    form.style.display = "block"
}


x.onclick = function () {
    form.style.display = "none"
}





