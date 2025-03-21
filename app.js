var circle = document.getElementById("circle")

function mode() {
    if (circle.style.justifyContent == "end") {
        circle.style.justifyContent = "start"
        document.documentElement.style.setProperty('--but2', '#ead9ce');

        document.documentElement.style.setProperty('--backgroundColor', ' linear-gradient(150deg,  #fdfcfb 5%, #cda68a 80% )');


        document.documentElement.style.setProperty('--text', 'black');


        document.documentElement.style.setProperty('--but1','Rosybrown');

        document.documentElement.style.setProperty('--shaddow','0px 0px 5px #b09784');

        document.documentElement.style.setProperty('--numbers','white');


        document.documentElement.style.setProperty('--but3',' #e8e3db');

        document.documentElement.style.setProperty('--sign',' #f2dcc6');

        document.documentElement.style.setProperty('--body',' #c7b7a3');

        document.documentElement.style.setProperty('--dayButton','yellow');

        document.documentElement.style.setProperty('--circle','white');

        document.documentElement.style.setProperty('--backgroundImage','url(./pic1.jpg)');

        
     
        

    }

    else {
        circle.style.justifyContent = "end"
      
        document.documentElement.style.setProperty('--but2', '#505050');

        document.documentElement.style.setProperty('--backgroundColor', 'black');

        document.documentElement.style.setProperty('--text', '#d4d4d2');

        document.documentElement.style.setProperty('--but1','black');

        document.documentElement.style.setProperty('--shaddow','0px 0px 5px black');

        document.documentElement.style.setProperty('--numbers','  #d4d4d2');

        document.documentElement.style.setProperty('--but3',' #d4d4d2 ');
     

        document.documentElement.style.setProperty('--sign',' black');
     
        document.documentElement.style.setProperty('--body',' #272e36');

        document.documentElement.style.setProperty('--dayButton','black');

        document.documentElement.style.setProperty('--circle','white');
        

        document.documentElement.style.setProperty('--backgroundImage','url(./pic4.jpg)');



    }
}


function press(a) {
    var input = document.getElementById('text')
    input.value += a
}



function equation() {
    var input = document.getElementById("text")
    input.value = eval(input.value)
}

function ac() {
    var input = document.getElementById('text')
    input.value = ""
}


function backspace() {
    let display = document.getElementById("text");
    display.value = display.value.slice(0, -1);
}



var lastValue = ""
function operand(a) {
    let display = document.getElementById("text");
    lastValue = display.value.slice(-1)

    if (lastValue == "+" || lastValue == "-" || lastValue == "*" || lastValue == "/" || lastValue == "%" || lastValue == ".") {
        display.value = display.value.slice(0, -1)


        display.value += a
    }

    else {
        display.value += a
    }

}