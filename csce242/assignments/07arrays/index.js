document.getElementById("destinations").onchange = (e) => {
    const ul = document.getElementById("ul-destinations");
    const pic = document.getElementById("pic");
    const mountains = ["Great Smoky Mountains", "Aspen", "Jackson", "Lake Placid"];
    const mountImgs = ["images/gsmountains.png", "images/aspen.png","images/jackson.png","images/placid.png"]
    const beaches = ["Siesta Beach", "Sandy Hook", "Kennebunkport", "Punalu'u Black Sand Beach"];
    const beachImgs = ["images/siesta.png", "images/sandy.png", "images/kenn.png", "images/punaluu.png"];
    ul.innerHTML = "";

    if(e.target.value === "mountains") {
        for(let i = 0; i < mountains.length; i++) {
            const li = document.createElement("li");
            li.innerHTML = mountains[i];
            ul.appendChild(li);
            
            li.onclick = (e) => {
                pic.src = mountImgs[i];
            }
        }
    }


    if(e.target.value === "beaches") {
        for(let i = 0; i < beaches.length; i++) {
            const li = document.createElement("li");
            li.innerHTML = beaches[i];
            ul.appendChild(li);
            li.onclick = (e) => {
                pic.src = beachImgs[i];
            }
        }
    }
}