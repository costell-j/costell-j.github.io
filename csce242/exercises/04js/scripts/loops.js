//First Loop
document.getElementById("btn-loop").onclick = (e) => {
    const loopResult = document.getElementById("loop-result");
    
    for(let i = 0; i < 11; i++) {
       let p = document.createElement("p");
       p.innerHTML = i;
       loopResult.append(p);
    }
}

//Loop with range
document.getElementById("btn-range-loop").onclick = (e) => {
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const errorStart = document.getElementById("error-start");
    errorStart.classList.add("hidden");
    const errorEnd = document.getElementById("error-end");
    errorEnd.classList.add("hidden");
    const ul = document.getElementById("range-list");
    

    if(startNum < 0 || startNum > 5) {
        errorStart.innerHTML= "* Invalid";
        errorStart.classList.remove("hidden");
        return;
    }

    if(endNum < 10 || endNum > 20 || endNum < startNum) {
        errorEnd.innerHTML= "* Invalid";
        errorEnd.classList.remove("hidden");
        return;
    }

    ul.innerHTML = "";

    for(let i = startNum; i < (endNum + 1); i++) {
        const li = document.createElement("li");
        li.innerHTML = i;
        ul.appendChild(li);
    }
}

//fist array example
document.getElementById("btn-show-toys").onclick = (e) => {
    const toys = ["doll", "skateboard", "mini car", "board game", "nuclear weapon"];
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    for(let i = 0; i < toys.length; i++) {
        const p = document.createElement("p");
        p.innerHTML = toys(i);
        toyList.append(p);
    }
}