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

