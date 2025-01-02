let d = 0;
let x=0;
let l = "";
let z = setInterval(console.log(""), 1000)
function dots(clas) {
    let n = 1;
    let l = document.createElement("span")
    let k = document.querySelector(".content" + clas)
    l.setAttribute("class", "dot" + clas)
    l.innerHTML = "."
    k.after(l)
    clearInterval(z)
    z = setInterval(() => {
        if (n == 3) {
            n = 0
            l.innerHTML = l.innerHTML[0, l.innerHTML.length - 3]
        }
        else if (n != -1) {
            l.innerHTML += "."
        }
        n++
    }, 700);
    setTimeout(() => {
        clearInterval(z)
    }, 10000);
}

async function ghost(clas, content) {
    d = (Math.floor(((Math.random()) * 7) + 1)) + d
    setTimeout(() => {
        document.querySelector(".content" + clas).innerHTML = content
        x++
    }, 1000 * d)
    setTimeout(() => {
        dots(clas)
    }, (1000 * d) + 1);
}



async function all() {
    ghost("1", "Initializing Hacking")
    ghost("2", "Reading Your Files")
    ghost("3", "Password Files Detected")
    ghost("4", "Sending all password and personal files to server")
    ghost("5", "Cleaning up")
}
all()