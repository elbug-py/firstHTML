

window.a = function(txt) {
    if (txt == 'B&amp;W'){
        txt = 'B&W'
    }
    document.getElementById('new_txt').innerHTML = txt;
    if (txt == 'B&W'){

        document.getElementById("img").style.filter = "grayscale("+ document.getElementById("demo").innerHTML+"%)";
    }
    else if (txt == 'Sepia'){

        document.getElementById("img").style.filter = "sepia("+ document.getElementById("demo").innerHTML+"%)";
        }
    
    else if (txt == 'Negative'){

        document.getElementById("img").style.filter = "invert("+ document.getElementById("demo").innerHTML+"%)";
        }

    else if (txt == 'Original'){

        document.getElementById("img").style.filter = "none";
        }
    }

function changeImage(){
    new_img = document.getElementById('img_sel').value
    console.log(new_img)
    document.getElementById("img").src = new_img;
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      changeImage()
    }
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  a(document.getElementById('new_txt').innerHTML)
} 