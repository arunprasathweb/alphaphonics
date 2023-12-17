var no_of = document.querySelectorAll(".bet").length;


for(i=0; i<no_of; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var pressedButton = this.innerHTML;
        playSound(pressedButton);
        playAnimation(pressedButton);

    });
}


document.addEventListener("keydown", function(event){
      playSound(event.key);
      playAnimation(event.key);
});


function playSound(key){

    switch(key) {
        case "a":
            var a = new Audio("assets/a.mp3");
            a.play();
            break;
        case "b":
            var b = new Audio("assets/b.mp3");
            b.play();
            break;
        case "c":
            var c = new Audio("assets/c.mp3");
            c.play();
            break;
        case "d":
            var d = new Audio("assets/d.mp3");
            d.play();
            break;
        case "e":
            var e = new Audio("assets/e.mp3");
            e.play();
            break;
        case "f":
            var f = new Audio("assets/f.mp3");
            f.play();
            break;
        case "g":
            var g = new Audio("assets/g.mp3");
            g.play();
            break;
        case "h":
            var h = new Audio("assets/h.mp3");
            h.play();
            break;
        case "i":
            var i = new Audio("assets/i.mp3");
            i.play();
            break;
        case "j":
            var j = new Audio("assets/j.mp3");
            j.play();
            break;
        case "k":
            var k = new Audio("assets/k.mp3");
            k.play();
            break;
        case "l":
            var l = new Audio("assets/l.mp3");
            l.play();
            break;
        case "m":
            var m = new Audio("assets/m.mp3");
            m.play();
            break;
        case "n":
            var n = new Audio("assets/n.mp3");
            n.play();
            break;
        case "o":
            var o = new Audio("assets/o.mp3");
            o.play();
            break;
        case "p":
            var p = new Audio("assets/p.mp3");
            p.play();
            break;
        case "q":
            var q = new Audio("assets/q.mp3");
            q.play();
            break;
        case "r":
            var r = new Audio("assets/r.mp3");
            r.play();
            break;
        case "s":
            var s = new Audio("assets/s.mp3");
            s.play();
            break;
        case "t":
            var t = new Audio("assets/t.mp3");
            t.play();
            break;
        case "u":
            var u = new Audio("assets/u.mp3");
            u.play();
            break;
        case "v":
            var v = new Audio("assets/v.mp3");
            v.play();
            break;
        case "w":
            var w = new Audio("assets/w.mp3");
            w.play();
            break;
        case "x":
            var x = new Audio("assets/x.mp3");
            x.play();
            break;
        case "y":
            var y = new Audio("assets/y.mp3");
            y.play();
            break;
        case "z":
            var z = new Audio("assets/z.mp3");
            z.play();
            break;
        
    }
}

function playAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("animation");

    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("animation");
    }, 100);
}